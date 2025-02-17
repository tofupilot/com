import { getAllPosts } from "@/app/(sanity)/lib/client";
import { ContainerLanding } from "@/app/components/ContainerLanding";
import NewsletterHighlight from "./_components/NewsletterHighlight";
import NewsletterList from "./_components/NewsletterGrid";
import NewsletterSubscribeCard from "./_components/NewsletterSubscribeCard";
import NewsletterGrid from "./_components/NewsletterGrid";

export default async function Page() {
  const posts = await getAllPosts();
  return (
    <ContainerLanding
      title="Newsletter"
      description="Insights and updates from across the team."
      wide
    >
      <div className="mt-8 flex flex-col">
        <NewsletterHighlight newsletter={posts[0]} />
        <NewsletterSubscribeCard />
        <NewsletterGrid newsletters={posts.slice(1)} />
      </div>
    </ContainerLanding>
  );
}

export const revalidate = 60;
