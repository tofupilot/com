import { getAllPosts } from "@/app/(sanity)/lib/client";
import { Metadata } from "next";
import ListBlogPosts from "./_components/list-blog-posts";
import { ContainerLanding } from "../components/ContainerLanding";

export const metadata: Metadata = {
  title: "Blog › TofuPilot",
  description:
    "Thoughts on the future of hardware testing, from the people and teams creating it.",
};

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
