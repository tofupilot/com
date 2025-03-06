import { BadgeButton } from "@/app/components/catalyst/badge";
import { ContainerLanding } from "@/app/components/ContainerLanding";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MarkdownComponents } from "./_components/MarkdownComponents";
import { PaginationLinks } from "./_components/PaginationLinks";
import { REPOSITORIES, RepositoryBadges } from "./_components/RepositoryBadges";

// GitHub API configuration
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
const GITHUB_ORG = "tofupilot";

// Enhanced interface for GitHub release with repository info
interface GitHubRelease {
  id: string;
  name: string;
  body: string;
  published_at: string;
  created_at: string;
  html_url: string;
  tag_name: string;
  // Added fields for multi-repo support
  repo: string;
  displayName: string;
  color: string;
  repoUrl: string;
}

/**
 * Process GitHub release notes to make them cleaner for display
 * - Removes empty lines at the beginning
 * - Removes the first H1 title (typically the version header)
 * - Removes blank lines after the heading
 */
async function processReleaseNotes(body: string): Promise<string> {
  const bodyLines = body.split("\n");
  const processedLines = [...bodyLines];

  // Remove empty lines at the beginning
  while (processedLines.length > 0 && processedLines[0].trim() === "") {
    processedLines.shift();
  }

  // Remove the first H1 heading (# title)
  if (processedLines.length > 0 && /^# .+/.test(processedLines[0])) {
    processedLines.shift();

    // Remove any blank lines following the heading
    while (processedLines.length > 0 && processedLines[0].trim() === "") {
      processedLines.shift();
    }
  }

  return processedLines.join("\n").trim();
}

async function fetchRepoReleases(
  repoConfig: (typeof REPOSITORIES)[0],
  page = 1,
  perPage = 5
): Promise<GitHubRelease[]> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_ORG}/${repoConfig.repo}/releases?page=${page}&per_page=${perPage}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(GITHUB_TOKEN && { Authorization: `token ${GITHUB_TOKEN}` }),
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      console.error(
        `Failed to fetch releases for ${repoConfig.repo}: ${response.status}`
      );
      return [];
    }

    const releases = await response.json();

    // Process each release and add repo info
    return Promise.all(
      releases.map(async (release: any) => {
        // Process release notes to clean up format
        const processedBody = await processReleaseNotes(release.body);

        // Return release with additional metadata
        return {
          ...release,
          body: processedBody,
          repo: repoConfig.repo,
          displayName: repoConfig.displayName,
          color: repoConfig.color,
          repoUrl: `https://github.com/${GITHUB_ORG}/${repoConfig.repo}`
        };
      })
    );
  } catch (error) {
    console.error(`Failed to fetch releases for ${repoConfig.repo}:`, error);
    return [];
  }
}

/**
 * Cache for storing all fetched releases to enable proper pagination
 */
let allFetchedReleases: GitHubRelease[] = [];
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

/**
 * Fetch and paginate through all GitHub releases across repositories
 * Uses a caching strategy to avoid refetching on page navigation
 * @param page The page number to fetch (1-indexed)
 * @param perPage Number of releases per page
 */
async function getAllReleases(page = 1, perPage = 5): Promise<GitHubRelease[]> {
  try {
    // Refresh cache if needed (every 5 minutes or if empty)
    const now = Date.now();
    if (now - lastFetchTime > CACHE_DURATION || allFetchedReleases.length === 0) {
      const repositories = [...REPOSITORIES];
      
      // Fetch releases from all repositories in parallel
      const releasesArrays = await Promise.all(
        repositories.map(repo => fetchRepoReleases(repo, 1, 10))
      );
      
      // Combine, sort and cache all releases
      allFetchedReleases = releasesArrays
        .flat()
        .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
      
      lastFetchTime = now;
    }
    
    // Return the appropriate page slice
    const startIdx = (page - 1) * perPage;
    const endIdx = startIdx + perPage;
    return allFetchedReleases.slice(startIdx, endIdx);
  } catch (error) {
    console.error("Error fetching all releases:", error);
    return [];
  }
}

function formatDate(dateString: string | undefined): string {
  if (!dateString) return "Unknown date";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Page props interface

interface PageProps {
  searchParams?: {
    page?: string;
  };
}

/**
 * GitHub Release Notes Page Component
 * Displays releases from all TofuPilot repositories with pagination
 */
export default async function Page({ searchParams }: PageProps) {
  // Parse page number from URL and set default values
  const currentPage = Number(searchParams?.page) || 1;
  const perPage = 10; // Show 10 releases per page
  const safePage = Math.max(1, currentPage); // Ensure we never use a negative page
  
  // Fetch the appropriate page of releases
  const releases = await getAllReleases(safePage, perPage);
  
  // Calculate pagination info
  const totalPages = Math.ceil(allFetchedReleases.length / perPage);
  const hasMorePages = safePage < totalPages;

  return (
    <ContainerLanding
      title="Changelog"
      description="Our latest updates and improvements across all TofuPilot products and services."
    >
      <div className="px-6 lg:px-8 pb-32">
        <div className="mx-auto flex max-w-xl flex-col py-12 sm:py-20">
          <div className="mb-8">
            <RepositoryBadges />
          </div>

          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {releases.length > 0 ? (
              releases.map((release) => (
                <article key={release.id} className="flex flex-col py-16">
                  <div className="mb-4 flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs">
                    <div className="flex items-center gap-3">
                      <BadgeButton
                        href={release.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        color={release.color}
                      >
                        {release.displayName}
                      </BadgeButton>
                    </div>
                    <time
                      dateTime={new Date(release.published_at).toISOString()}
                      className="font-mono text-zinc-500 dark:text-zinc-400"
                    >
                      {formatDate(release.published_at)}
                    </time>
                  </div>
                  <h2 className="mt-3 text-2xl font-bold leading-6 text-zinc-900 dark:text-zinc-100">
                    {release.name}
                  </h2>
                  <div className="prose prose-zinc dark:prose-invert prose-headings:font-display my-3 mt-4 max-w-none overflow-x-auto text-base leading-7 text-zinc-700 dark:text-zinc-300 focus:outline-none">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={MarkdownComponents}
                    >
                      {release.body}
                    </ReactMarkdown>
                  </div>
                </article>
              ))
            ) : (
              <div className="py-16 text-center">
                <p className="text-zinc-500 dark:text-zinc-400">
                  No releases found. Check back later!
                </p>
              </div>
            )}
          </div>

          {releases.length > 0 && <PaginationLinks currentPage={safePage} totalPages={totalPages} />}
        </div>
      </div>
    </ContainerLanding>
  );
}

export const revalidate = 3600; // Revalidate once per hour
