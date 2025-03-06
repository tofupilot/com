import { BadgeButton } from "@/app/components/catalyst/badge";
import { CatalystColor } from "@/app/components/catalyst/types";
import { ContainerLanding } from "@/app/components/ContainerLanding";
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '@/app/components/catalyst/pagination';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Configuration for GitHub repositories
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
const GITHUB_ORG = "tofupilot";

// Repository configuration with display names and badge colors
const REPOSITORIES = [
  {
    repo: "app",
    displayName: "Application",
    color: "lime" as const,
    description: "Web application for test analytics",
  },
  {
    repo: "python-client",
    displayName: "Python SDK",
    color: "indigo" as const,
    description: "Python SDK for TofuPilot API",
  },
  {
    repo: "tofupilot-docs",
    displayName: "TofuPilot Docs",
    color: "emerald" as const,
    description: "Product documentation",
  },
  {
    repo: "com",
    displayName: "Landing Page",
    color: "blue" as const,
    description: "TofuPilot marketing website and documentation",
  },
  {
    repo: "openhtf-docs",
    displayName: "OpenHTF Docs",
    color: "amber" as const,
    description: "Documentation for OpenHTF test framework",
  },
];

// Enhanced interface for GitHub release with repository info
interface GitHubRelease {
  id: string;
  name: string;
  body: string;
  published_at: string;
  created_at: string; // Base creation date
  html_url: string;
  tag_name: string;
  // Added fields for multi-repo support
  repo: string;
  displayName: string;
  color: string;
  repoUrl: string;
  // Tag information
  tag_date?: string; // Optional tag creation date (might not be available)
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
        const processedBody = await processReleaseNotes(release.body);

        // Try to get tag date for this release tag, if we have a token
        let tagDate = undefined;
        if (GITHUB_TOKEN && release.tag_name) {
          try {
            const tagResponse = await fetch(
              `https://api.github.com/repos/${GITHUB_ORG}/${repoConfig.repo}/git/refs/tags/${release.tag_name}`,
              {
                headers: {
                  Accept: "application/vnd.github.v3+json",
                  Authorization: `token ${GITHUB_TOKEN}`,
                },
                next: { revalidate: 3600 },
              }
            );

            if (tagResponse.ok) {
              const tagData = await tagResponse.json();
              if (tagData.object && tagData.object.sha) {
                // Now get the tag object to get its date
                const tagObjectResponse = await fetch(
                  `https://api.github.com/repos/${GITHUB_ORG}/${repoConfig.repo}/git/tags/${tagData.object.sha}`,
                  {
                    headers: {
                      Accept: "application/vnd.github.v3+json",
                      Authorization: `token ${GITHUB_TOKEN}`,
                    },
                    next: { revalidate: 3600 },
                  }
                );

                if (tagObjectResponse.ok) {
                  const tagObject = await tagObjectResponse.json();
                  if (tagObject.tagger && tagObject.tagger.date) {
                    tagDate = tagObject.tagger.date;
                  }
                }
              }
            }
          } catch (tagError) {
            console.error(
              `Failed to fetch tag data for ${release.tag_name}:`,
              tagError
            );
            // We'll fallback to using the release date
          }
        }

        return {
          ...release,
          body: processedBody,
          repo: repoConfig.repo,
          displayName: repoConfig.displayName,
          color: repoConfig.color,
          repoUrl: `https://github.com/${GITHUB_ORG}/${repoConfig.repo}`,
          tag_date: tagDate,
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
      
      // Keep the repository order as defined, no need to reorder
      // The repositories are already sorted as we want them
      
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

// Custom components for markdown rendering
const MarkdownComponents = {
  // Simple code block rendering without syntax highlighting
  code: ({ node, inline, className, children, ...props }: any) => {
    const content = String(children).replace(/\n$/, "");

    return inline ? (
      <code
        className="font-mono text-sm bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded"
        {...props}
      >
        {children}
      </code>
    ) : (
      <pre className="overflow-x-auto p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800">
        <code className="font-mono text-sm" {...props}>
          {children}
        </code>
      </pre>
    );
  },

  // Custom rendering for links
  a: ({ node, className, children, ...props }: any) => (
    <a
      className="text-lime-600 hover:text-lime-800 dark:text-lime-500 dark:hover:text-lime-400 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  ),

  // Reduced size heading rendering
  h1: ({ node, children, ...props }: any) => (
    <h1
      className="text-xl font-bold mt-6 mb-3 text-zinc-900 dark:text-zinc-100 pb-2 border-b border-zinc-200 dark:border-zinc-700"
      {...props}
    >
      {children}
    </h1>
  ),

  h2: ({ node, children, ...props }: any) => (
    <h2
      className="text-lg font-bold mt-5 mb-3 text-zinc-900 dark:text-zinc-100"
      {...props}
    >
      {children}
    </h2>
  ),

  h3: ({ node, children, ...props }: any) => (
    <h3
      className="text-base font-semibold mt-4 mb-2 text-zinc-800 dark:text-zinc-200"
      {...props}
    >
      {children}
    </h3>
  ),

  // Compact paragraph rendering
  p: ({ node, children, ...props }: any) => (
    <p className="my-2 text-zinc-700 dark:text-zinc-300" {...props}>
      {children}
    </p>
  ),

  // Compact lists
  ul: ({ node, children, ...props }: any) => (
    <ul
      className="list-disc pl-6 my-4 space-y-2 text-zinc-700 dark:text-zinc-300"
      {...props}
    >
      {children}
    </ul>
  ),

  ol: ({ node, children, ...props }: any) => (
    <ol
      className="list-decimal pl-6 my-4 space-y-2 text-zinc-700 dark:text-zinc-300"
      {...props}
    >
      {children}
    </ol>
  ),

  // List items with commit hash linking
  li: ({ node, children, ...props }: any) => {
    const text = String(children);
    const commitHashRegex = /\(([0-9a-f]{7,40})\)$/;
    const match = commitHashRegex.exec(text);

    if (match && match[1]) {
      const commitHash = match[1];
      const commitUrl = `https://github.com/${GITHUB_ORG}/commit/${commitHash}`;
      const textBeforeHash = text.substring(0, match.index);

      return (
        <li className="text-zinc-700 dark:text-zinc-300" {...props}>
          {textBeforeHash}(
          <a
            href={commitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-lime-600 hover:text-lime-800 dark:text-lime-500 dark:hover:text-lime-400 hover:underline"
          >
            {commitHash}
          </a>
          )
        </li>
      );
    }

    return (
      <li className="text-zinc-700 dark:text-zinc-300" {...props}>
        {children}
      </li>
    );
  },

  blockquote: ({ node, children, ...props }: any) => (
    <blockquote
      className="border-l-4 border-zinc-300 dark:border-zinc-600 pl-4 italic my-4 text-zinc-600 dark:text-zinc-400"
      {...props}
    >
      {children}
    </blockquote>
  ),
};

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

  /**
   * Calculate and render pagination controls
   * - Shows all page numbers for <= 5 total pages
   * - For more pages, shows smart pagination with current page context
   */
  const PaginationLinks = () => {
    const visiblePageNumbers = [];
    
    // Simple case: 5 or fewer pages - show all page numbers
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        visiblePageNumbers.push(i);
      }
    } 
    // Complex case: more than 5 pages - show smart pagination
    else {
      // Always show page 1
      visiblePageNumbers.push(1);
      
      // Case 1: Near the beginning (pages 1-3)
      if (safePage <= 3) {
        for (let i = 2; i <= 4; i++) {
          visiblePageNumbers.push(i);
        }
        visiblePageNumbers.push(null); // Gap
        visiblePageNumbers.push(totalPages); // Last page
      } 
      // Case 2: Near the end
      else if (safePage >= totalPages - 2) {
        visiblePageNumbers.push(null); // Gap
        for (let i = totalPages - 3; i <= totalPages; i++) {
          if (i > 1) visiblePageNumbers.push(i);
        }
      }
      // Case 3: Somewhere in the middle
      else {
        visiblePageNumbers.push(null); // Gap
        visiblePageNumbers.push(safePage - 1);
        visiblePageNumbers.push(safePage);
        visiblePageNumbers.push(safePage + 1);
        visiblePageNumbers.push(null); // Gap
        visiblePageNumbers.push(totalPages); // Last page
      }
    }
    
    return (
      <div className="mt-16 flex justify-center w-full">
        <Pagination className="w-full flex justify-between">
          <PaginationPrevious 
            href={safePage > 1 ? `/github?page=${safePage - 1}` : null} 
          />
          
          <PaginationList className="flex-grow flex justify-center">
            {visiblePageNumbers.map((pageNum, index) => 
              pageNum === null ? (
                <PaginationGap key={`gap-${index}`} />
              ) : (
                <PaginationPage 
                  key={`page-${pageNum}`}
                  href={`/github?page=${pageNum}`}
                  current={safePage === pageNum}
                >
                  {pageNum}
                </PaginationPage>
              )
            )}
          </PaginationList>
          
          <PaginationNext 
            href={hasMorePages ? `/github?page=${safePage + 1}` : null}
          />
        </Pagination>
      </div>
    );
  };

  return (
    <ContainerLanding
      title="Changelog"
      description="Our latest updates and improvements across all TofuPilot products and services."
    >
      <div className="px-6 lg:px-8 pb-32">
        <div className="mx-auto flex max-w-xl flex-col py-12 sm:py-20">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {REPOSITORIES.map((repo) => (
                <BadgeButton
                  key={repo.repo}
                  href={`https://github.com/${GITHUB_ORG}/${repo.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  color={repo.color as CatalystColor}
                >
                  {repo.displayName}
                </BadgeButton>
              ))}
            </div>
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
                        color={release.color as CatalystColor}
                      >
                        {release.displayName}
                      </BadgeButton>
                    </div>
                    <time
                      dateTime={new Date(
                        release.tag_date || release.published_at
                      ).toISOString()}
                      className="font-mono text-zinc-500 dark:text-zinc-400"
                    >
                      {formatDate(release.tag_date || release.published_at)}
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

          {releases.length > 0 && <PaginationLinks />}
        </div>
      </div>
    </ContainerLanding>
  );
}

export const revalidate = 3600; // Revalidate once per hour
