import { Badge } from "@/app/components/catalyst/badge";
import { ContainerLanding } from "@/app/components/ContainerLanding";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getHighlighter } from "@/app/components/shiki/highlighter";
import { transformerNotationHighlight, transformerNotationWordHighlight } from "@shikijs/transformers";
import CopyButton from "@/app/components/shiki/CopyButton";

// Configuration for GitHub repositories
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
const GITHUB_ORG = "tofupilot";

// Repository configuration with display names and badge colors
const REPOSITORIES = [
  { 
    repo: "com", 
    displayName: "Website", 
    color: "blue" as const,
    description: "TofuPilot marketing website and documentation"
  },
  { 
    repo: "app", 
    displayName: "Web App", 
    color: "lime" as const,
    description: "Web application for test analytics"
  },
  { 
    repo: "python-client", 
    displayName: "Python SDK", 
    color: "indigo" as const,
    description: "Python SDK for TofuPilot API"
  },
  { 
    repo: "tofupilot-docs", 
    displayName: "Product Docs", 
    color: "emerald" as const,
    description: "Product documentation"
  },
  { 
    repo: "openhtf-docs", 
    displayName: "OpenHTF Docs", 
    color: "amber" as const,
    description: "Documentation for OpenHTF test framework"
  }
];

// Enhanced interface for GitHub release with repository info
interface GitHubRelease {
  id: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
  tag_name: string;
  // Added fields for multi-repo support
  repo: string;
  displayName: string;
  color: string;
  repoUrl: string;
}

async function processReleaseNotes(body: string): Promise<string> {
  // Find the first occurrence of a section header
  const sectionHeaderRegex = /^(#+\s*)?(Bug Fixes|Features|BREAKING CHANGES|Performance Improvements|Improvements|Fixes|Documentation|Refactor|Tests|Build|CI|Chore)/im;
  const sectionMatch = body.search(sectionHeaderRegex);
  
  if (sectionMatch > 0) {
    return body.substring(sectionMatch);
  }
  
  // If no section headers found, try to find the first list item
  const listItemRegex = /^[-*]\s+.+/m;
  const listMatch = body.search(listItemRegex);
  
  if (listMatch > 0) {
    return body.substring(listMatch);
  }
  
  // If still no good start point, remove version lines and empty lines
  const bodyLines = body.split('\n');
  const processedLines = [...bodyLines];
  const versionLineRegex = /^v?\d+\.\d+\.\d+/;
  
  while (
    processedLines.length > 0 && 
    (processedLines[0].trim() === '' || versionLineRegex.test(processedLines[0].trim()))
  ) {
    processedLines.shift();
  }
  
  return processedLines.join('\n').trim();
}

async function fetchRepoReleases(repoConfig: typeof REPOSITORIES[0], page = 1, perPage = 5): Promise<GitHubRelease[]> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_ORG}/${repoConfig.repo}/releases?page=${page}&per_page=${perPage}`,
      {
        headers: {
          "Accept": "application/vnd.github.v3+json",
          ...(GITHUB_TOKEN && { "Authorization": `token ${GITHUB_TOKEN}` })
        },
        next: { revalidate: 3600 }
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch releases for ${repoConfig.repo}: ${response.status}`);
      return [];
    }

    const releases = await response.json();
    
    // Process each release to remove duplicate version headers and add repo info
    return Promise.all(releases.map(async (release: any) => {
      const processedBody = await processReleaseNotes(release.body);
      
      return { 
        ...release, 
        body: processedBody,
        repo: repoConfig.repo,
        displayName: repoConfig.displayName,
        color: repoConfig.color,
        repoUrl: `https://github.com/${GITHUB_ORG}/${repoConfig.repo}`
      };
    }));
  } catch (error) {
    console.error(`Failed to fetch releases for ${repoConfig.repo}:`, error);
    return [];
  }
}

async function getAllReleases(page = 1, perPage = 5): Promise<GitHubRelease[]> {
  try {
    // Always prioritize the "com" repository (website) for releases on first page
    const repositories = [...REPOSITORIES];
    
    // For the first page, we want to ensure website releases are prominently featured
    if (page === 1) {
      // Move the "com" repository to the beginning if it's not already there
      const comIndex = repositories.findIndex(repo => repo.repo === "com");
      if (comIndex > 0) {
        const comRepo = repositories.splice(comIndex, 1)[0];
        repositories.unshift(comRepo);
      }
      
      // Request more releases from the website repo
      const websiteReleases = await fetchRepoReleases(repositories[0], 1, perPage * 2);
      
      // And a smaller number from other repos
      const otherReleasesArrays = await Promise.all(
        repositories.slice(1).map(repo => fetchRepoReleases(repo, 1, 1))
      );
      
      // Combine all releases
      const allReleases = [...websiteReleases, ...otherReleasesArrays.flat()];
      
      // Sort and return them
      return allReleases.sort((a, b) => 
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
      );
    } else {
      // For other pages, fetch evenly from all repositories
      const releasesArrays = await Promise.all(
        repositories.map(repo => fetchRepoReleases(repo, page, perPage))
      );
      
      // Flatten the array of arrays into a single array
      const allReleases = releasesArrays.flat();
      
      // Sort all releases by date (newest first)
      return allReleases.sort((a, b) => 
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
      );
    }
  } catch (error) {
    console.error("Error fetching all releases:", error);
    return [];
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Custom components for markdown rendering
const MarkdownComponents = {
  // Custom rendering for code blocks with syntax highlighting
  code: async ({ node, inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '');
    const lang = match ? match[1] : 'plaintext';
    const content = String(children).replace(/\n$/, '');
    
    if (!inline && match) {
      try {
        const highlighter = await getHighlighter();
        const html = await highlighter.codeToHtml(content, {
          lang,
          theme: 'tofupilot-theme',
          transformers: [
            transformerNotationHighlight(),
            transformerNotationWordHighlight(),
          ],
        });
        
        return (
          <div className="not-prose text-sm my-4 overflow-hidden rounded-lg bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
            <div className="relative group">
              <pre
                className="text-sm p-0 overflow-x-auto [&>pre]:w-full [&>pre]:overflow-x-auto [&>pre]:!py-4 [&>pre]:px-4 [&>pre]:leading-snug"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <CopyButton code={content} />
            </div>
          </div>
        );
      } catch (error) {
        console.error('Error highlighting code:', error);
      }
    }
    
    return inline ? (
      <code className="font-mono text-sm bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded" {...props}>
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
  
  // Simple heading rendering with consistent sizing
  h1: ({ node, children, ...props }: any) => (
    <h1 className="text-3xl font-bold mt-10 mb-5 text-zinc-900 dark:text-zinc-100 pb-3 border-b-2 border-zinc-200 dark:border-zinc-700" {...props}>
      {children}
    </h1>
  ),
  
  h2: ({ node, children, ...props }: any) => (
    <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-100" {...props}>
      {children}
    </h2>
  ),
  
  h3: ({ node, children, ...props }: any) => (
    <h3 className="text-xl font-semibold mt-6 mb-3 text-zinc-800 dark:text-zinc-200" {...props}>
      {children}
    </h3>
  ),
  
  // Simple paragraph rendering (no special cases)
  p: ({ node, children, ...props }: any) => (
    <p className="my-3 text-zinc-700 dark:text-zinc-300" {...props}>
      {children}
    </p>
  ),
  
  // Lists
  ul: ({ node, children, ...props }: any) => (
    <ul className="list-disc pl-6 my-6 space-y-3 text-zinc-700 dark:text-zinc-300" {...props}>
      {children}
    </ul>
  ),
  
  ol: ({ node, children, ...props }: any) => (
    <ol className="list-decimal pl-6 my-6 space-y-3 text-zinc-700 dark:text-zinc-300" {...props}>
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
  }
}

export default async function Page({ searchParams }: PageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const perPage = 3; // Show fewer releases per page to ensure pagination works
  
  const releases = await getAllReleases(currentPage, perPage);
  // We'll show a "Next" button if we have the full number of requested releases
  // This is a simple way to check if there might be more results
  const hasMoreResults = releases.length >= perPage;
  
  // Pagination links component
  const PaginationLinks = () => (
    <div className="mt-16 flex justify-center items-center gap-4">
      {currentPage > 1 && (
        <a 
          href={`/changeloggithub?page=${currentPage - 1}`}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-zinc-600 bg-white border border-zinc-300 rounded-md hover:bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700 dark:hover:bg-zinc-700"
        >
          Previous
        </a>
      )}
      
      <span className="text-sm text-zinc-500 dark:text-zinc-400">
        Page {currentPage}
      </span>
      
      {hasMoreResults && (
        <a 
          href={`/changeloggithub?page=${currentPage + 1}`}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-zinc-600 bg-white border border-zinc-300 rounded-md hover:bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700 dark:hover:bg-zinc-700"
        >
          Next
        </a>
      )}
    </div>
  );

  return (
    <ContainerLanding
      title="Release Notes"
      description="Our latest updates and improvements across all TofuPilot products and services."
    >
      <div className="px-6 lg:px-8 pb-32">
        <div className="mx-auto flex max-w-xl flex-col py-12 sm:py-20">
          <div className="mb-8">
            <div className="text-zinc-700 dark:text-zinc-300 text-base">
              Viewing releases from all TofuPilot repositories, sorted by most recent.
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {REPOSITORIES.map((repo) => (
                <a 
                  key={repo.repo}
                  href={`https://github.com/${GITHUB_ORG}/${repo.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Badge color={repo.color as any}>
                    {repo.displayName}
                  </Badge>
                </a>
              ))}
            </div>
          </div>
          
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {releases.length > 0 ? (
              releases.map((release) => (
                <article key={release.id} className="flex flex-col py-16">
                  <div className="mb-4 flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs">
                    <div className="flex items-center gap-3">
                      <a 
                        href={release.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge color={release.color as any} className="hover:ring-1 hover:ring-offset-1 transition-all">
                          {release.displayName}
                        </Badge>
                      </a>
                      <Badge color="zinc">
                        <a 
                          href={release.html_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {release.tag_name}
                        </a>
                      </Badge>
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
                  <div className="prose prose-zinc dark:prose-invert prose-headings:font-display my-3 mt-8 max-w-none overflow-x-auto text-base leading-7 text-zinc-700 dark:text-zinc-300 focus:outline-none">
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