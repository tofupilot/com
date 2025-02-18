import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../env";

import {
  allauthorsquery,
  authorsquery,
  careerpathquery,
  careersinglequery,
  careersquery,
  catpathquery,
  catquery,
  configQuery,
  newsletterpathquery,
  newsletterquery,
  newslettersinglequery,
  paginatedquery,
  pathquery,
  postquery,
  postsbyauthorquery,
  postsbycatquery,
  releasequery,
  singlequery,
  templatepathquery,
  templatequery,
  templatesquery
} from "./groq";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

if (!projectId) {
  console.error(
    "The Sanity Project ID is not set. Check your environment variables."
  );
}

export async function getSettings() {
  if (client) {
    return (await client.fetch(configQuery)) || [];
  }
  return [];
}

// ====== Blog ======

// Posts

export async function getAllPosts() {
  if (client) {
    return (await client.fetch(postquery)) || [];
  }
  return [];
}

export async function getLastThreePosts() {
  if (client) {
    return (
      (await client.fetch(`${postquery} | order(_publishedAt desc)[0...3]`)) ||
      []
    );
  }
  return [];
}

export async function getPostBySlug(slug: string) {
  if (client) {
    return (await client.fetch(singlequery, { slug })) || {};
  }
  return {};
}

export async function getAllPostsSlugs() {
  if (client) {
    const slugs = (await client.fetch(pathquery)) || [];
    return slugs.map((slug: string) => ({ slug }));
  }
  return [];
}

// Authors
export async function getAllAuthorsSlugs() {
  if (client) {
    const slugs = (await client.fetch(authorsquery)) || [];
    return slugs.map((slug: string) => ({ author: slug }));
  }
  return [];
}

export async function getAuthorPostsBySlug(slug: string) {
  if (client) {
    return (await client.fetch(postsbyauthorquery, { slug })) || {};
  }
  return {};
}

export async function getAllAuthors() {
  if (client) {
    return (await client.fetch(allauthorsquery)) || [];
  }
  return [];
}

// Categories

export async function getAllCategories() {
  if (client) {
    const slugs = (await client.fetch(catpathquery)) || [];
    return slugs.map((slug: string) => ({ category: slug }));
  }
  return [];
}

export async function getPostsByCategory(slug: string) {
  if (client) {
    return (await client.fetch(postsbycatquery, { slug })) || {};
  }
  return {};
}

export async function getTopCategories() {
  if (client) {
    return (await client.fetch(catquery)) || [];
  }
  return [];
}

export async function getPaginatedPosts({
  limit,
  pageIndex = 0,
}: {
  limit: number;
  pageIndex: number;
}) {
  if (client) {
    return (
      (await client.fetch(paginatedquery, {
        pageIndex: pageIndex,
        limit: limit,
      })) || []
    );
  }
  return [];
}


// ====== Newsletter ======

export async function getAllNewsletters() {
  if (client) {
    return (await client.fetch(newsletterquery)) || [];
  }
  return [];
}


export async function getNewsletterBySlug(slug: string) {
  if (client) {
    return (await client.fetch(newslettersinglequery, { slug })) || {};
  }
  return {};
}

export async function getAllNewslettersSlugs() {
  if (client) {
    const slugs = (await client.fetch(newsletterpathquery)) || [];
    return slugs.map((slug: string) => ({ slug }));
  }
  return [];
}

// ====== Careers ======

export async function getAllCareers() {
  if (client) {
    return (await client.fetch(careersquery)) || [];
  }
  return [];
}


export async function getCareerBySlug(slug: string) {
  if (client) {
    return (await client.fetch(careersinglequery, { slug })) || {};
  }
  return {};
}

export async function getAllCareersSlugs() {
  if (client) {
    const slugs = (await client.fetch(careerpathquery)) || [];
    return slugs.map((slug: string) => ({ slug }));
  }
  return [];
}

// ====== Releases ======

export async function getAllReleases() {
  if (client) {
    return (await client.fetch(releasequery)) || [];
  }
  return [];
}

export async function getLastFiveReleases() {
  if (client) {
    return (
      (await client.fetch(
        `${releasequery} | order(_publishedAt desc)[0...5]`
      )) || []
    );
  }
  return [];
}


// ====== Templates ======

export async function getAllTemplates() {
  if (client) {
    return (await client.fetch(templatesquery)) || [];
  }
  return [];
}

export async function getTemplateBySlug(slug: string) {
  if (client) {
    return (await client.fetch(templatequery, { slug })) || {};
  }
  return {};
}

export async function getAllTemplatesSlug() {
  if (client) {
    const slugs = (await client.fetch(templatepathquery)) || [];
    return slugs.map((slug: string) => ({ slug }));
  }
  return [];
}

