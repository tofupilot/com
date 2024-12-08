import { getAllPosts } from "@/app/(sanity)/lib/client";
import ListBlogPosts from "@/app/components/blog/ListBlogPosts";
import { ContainerLanding } from "@/app/components/ContainerLanding";

export default async function Page() {
  const posts = await getAllPosts();
  return (
    <ContainerLanding
      title="Blog"
      description="Insights and updates from across the team"
    >
      <div className="mb-64 py-12 sm:py-20">
        <ListBlogPosts posts={posts} />
      </div>
    </ContainerLanding>
  );
}

export const revalidate = 60;
