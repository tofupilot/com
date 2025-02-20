import { getAllCareersSlugs, getCareerBySlug } from "@/app/(sanity)/lib/client";
import Career from "./default";

export async function generateStaticParams() {
  return await getAllCareersSlugs();
}

export default async function NewsletterDefault({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getCareerBySlug(params.slug);
  return <Career post={post} />;
}

export const revalidate = 60;
