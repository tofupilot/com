import { ContainerLanding } from "@/app/_components/container-landing";
import { getAllPosts } from "@/app/(sanity)/lib/client";
import { Metadata } from "next";
import ListBlogPosts from "./_components/list-blog-posts";

export const metadata: Metadata = {
  title: "Blog › TofuPilot",
  description:
    "Thoughts on the future of hardware testing, from the people and teams creating it.",
};

export default async function Page() {
  const posts = await getAllPosts();
  return (
    <main role="main" className="flex flex-col overflow-hidden">
      <ContainerLanding
        page="Blog"
        title="Insights and updates from across the team"
        description={metadata.description}
      />
      <div className="mb-64 py-12 sm:py-20">
        <ListBlogPosts posts={posts} />
      </div>
    </main>
  );
}

export const revalidate = 60;
