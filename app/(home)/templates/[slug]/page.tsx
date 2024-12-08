import {
  getAllTemplatesSlug,
  getTemplateBySlug,
} from "@/app/(sanity)/lib/client";
import { urlForImage } from "@/app/(sanity)/lib/image";
import { notFound } from "next/navigation";
import { TemplatePage } from "./default";

export async function generateStaticParams() {
  return await getAllTemplatesSlug();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getTemplateBySlug(params.slug);
  if (!post?.slug) {
    notFound();
  }

  // Generate additional keywords
  const additionalKeywords = [
    post.language,
    post.framework,
    post.usecase,
    post.author?.name,
  ].filter(Boolean); // Ensure no null/undefined values

  // Combine template keywords with generated ones
  const keywords = Array.from(
    new Set([...(post.keywords || []), ...additionalKeywords])
  );

  return {
    title: post.title,
    description: post.summary,
    keywords: keywords.join(", "), // Metadata keywords as a comma-separated string
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [
        {
          url: urlForImage(post.mainImage),
          alt: post.mainImage?.alt || `${post.title} image`,
        },
      ],
      type: "article",
      authors: [post.author?.name || "Unknown"], // Include the author
      publishedTime: post.publishedAt, // Assuming `publishedAt` exists
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [
        {
          url: urlForImage(post.mainImage),
          alt: post.mainImage?.alt || `${post.title} image`,
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const template = await getTemplateBySlug(params.slug);
  if (!template?.slug) {
    notFound();
  }
  return <TemplatePage template={template} />;
}
