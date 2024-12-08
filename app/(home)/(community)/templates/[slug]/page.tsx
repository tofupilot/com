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
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      images: [urlForImage(post.mainImage)],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const query = await getTemplateBySlug(params.slug);
  return <TemplatePage template={query} />;
}

export const revalidate = 60;
