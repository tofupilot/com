import {
  getAllTemplatesSlug,
  getTemplateBySlug,
} from "@/app/(sanity)/lib/client";
import { urlForImage } from "@/app/(sanity)/lib/image";
import { notFound } from "next/navigation";
import { TemplatePage } from "./default";

export const revalidate = 60
export const dynamicParams = true

export async function generateStaticParams() {
  return await getAllTemplatesSlug();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const template = await getTemplateBySlug(params.slug);
  if (!template?.slug) {
    notFound();
  }

  // Generate additional keywords
  const additionalKeywords = [
    template.language,
    template.framework,
    template.usecase,
    template.author?.name,
  ].filter(Boolean); // Ensure no null/undefined values

  // Combine template keywords with generated ones
  const keywords = Array.from(
    new Set([...(template.keywords || []), ...additionalKeywords])
  );

  return {
    title: template.title,
    description: template.summary,
    keywords: keywords.join(", "), // Metadata keywords as a comma-separated string
    openGraph: {
      title: template.title,
      description: template.summary,
      images: [
        {
          url: urlForImage(template.mainImage),
          alt: template.mainImage?.alt || `${template.title} image`,
        },
      ],
      type: "article",
      authors: [template.author?.name || "Unknown"], // Include the author
      publishedTime: template.publishedAt, // Assuming `publishedAt` exists
    },
    twitter: {
      card: "summary_large_image",
      title: template.title,
      description: template.summary,
      images: [
        {
          url: urlForImage(template.mainImage),
          alt: template.mainImage?.alt || `${template.title} image`,
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
