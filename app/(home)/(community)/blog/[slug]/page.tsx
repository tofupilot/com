import { getAllPostsSlugs, getPostBySlug } from "@/app/(sanity)/lib/client";
import PostPage from "./default";

export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

export default async function PostDefault({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  return <PostPage post={post} />;
}

export const revalidate = 60;
