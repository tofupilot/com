import React from "react";

// GitHub organization name for commit URLs
const GITHUB_ORG = "tofupilot";

/**
 * Custom components for rendering GitHub flavored markdown
 * Used with react-markdown to style and enhance markdown content
 */
export const MarkdownComponents = {
  // Simple code block rendering without syntax highlighting
  code: ({ inline, children, ...props }: any) => {
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
  a: ({ children, ...props }: any) => (
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
  h1: ({ children, ...props }: any) => (
    <h1
      className="text-xl font-bold mt-6 mb-3 text-zinc-900 dark:text-zinc-100 pb-2 border-b border-zinc-200 dark:border-zinc-700"
      {...props}
    >
      {children}
    </h1>
  ),

  h2: ({ children, ...props }: any) => (
    <h2
      className="text-lg font-bold mt-5 mb-3 text-zinc-900 dark:text-zinc-100"
      {...props}
    >
      {children}
    </h2>
  ),

  h3: ({ children, ...props }: any) => (
    <h3
      className="text-base font-semibold mt-4 mb-2 text-zinc-800 dark:text-zinc-200"
      {...props}
    >
      {children}
    </h3>
  ),

  // Compact paragraph rendering
  p: ({ children, ...props }: any) => (
    <p className="my-2 text-zinc-700 dark:text-zinc-300" {...props}>
      {children}
    </p>
  ),

  // Compact lists
  ul: ({ children, ...props }: any) => (
    <ul
      className="list-disc pl-6 my-4 space-y-2 text-zinc-700 dark:text-zinc-300"
      {...props}
    >
      {children}
    </ul>
  ),

  ol: ({ children, ...props }: any) => (
    <ol
      className="list-decimal pl-6 my-4 space-y-2 text-zinc-700 dark:text-zinc-300"
      {...props}
    >
      {children}
    </ol>
  ),

  // List items with commit hash linking
  li: ({ children, ...props }: any) => {
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

  blockquote: ({ children, ...props }: any) => (
    <blockquote
      className="border-l-4 border-zinc-300 dark:border-zinc-600 pl-4 italic my-4 text-zinc-600 dark:text-zinc-400"
      {...props}
    >
      {children}
    </blockquote>
  ),
};