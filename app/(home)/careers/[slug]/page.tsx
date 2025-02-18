import { getAllCareersSlugs, getAllNewslettersSlugs, getAllPostsSlugs, getCareerBySlug, getNewsletterBySlug, getPostBySlug } from "@/app/(sanity)/lib/client";
import Newsletter from "../default";

export async function generateStaticParams() {
  return await getAllCareersSlugs();
}

export default async function NewsletterDefault({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getCareerBySlug(params.slug);
  return <Newsletter post={post} />;
}

export const revalidate = 60;
