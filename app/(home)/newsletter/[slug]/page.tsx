import { getAllNewslettersSlugs, getAllPostsSlugs, getNewsletterBySlug, getPostBySlug } from "@/app/(sanity)/lib/client";
import Newsletter from "../default";

export async function generateStaticParams() {
  return await getAllNewslettersSlugs();
}

export default async function NewsletterDefault({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getNewsletterBySlug(params.slug);
  return <Newsletter post={post} />;
}

export const revalidate = 60;
