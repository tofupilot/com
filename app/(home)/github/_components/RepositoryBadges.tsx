import React from "react";
import { BadgeButton } from "@/app/components/catalyst/badge";
import { CatalystColor } from "@/app/components/catalyst/types";

// GitHub organization name
const GITHUB_ORG = "tofupilot";

// Repository configuration with display names and badge colors
export const REPOSITORIES = [
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

/**
 * Displays badges for each TofuPilot repository
 * Links to the respective GitHub repositories
 */
export const RepositoryBadges: React.FC = () => {
  return (
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
  );
};