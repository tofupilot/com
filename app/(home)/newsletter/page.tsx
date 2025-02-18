import { getAllNewsletters } from "@/app/(sanity)/lib/client";
import { ContainerLanding } from "@/app/components/ContainerLanding";
import NewsletterGrid from "./_components/NewsletterGrid";
import NewsletterHighlight from "./_components/NewsletterHighlight";
import NewsletterSubscribeCard from "./_components/NewsletterSubscribeCard";

export default async function Page() {
  const newsletters = await getAllNewsletters();
  return (
    <ContainerLanding
      title="Newsletter"
      description="Subscribe to get low-frequency updates on TofuPilot."
      wide
    >
      <div className="mt-8 flex flex-col">
        <NewsletterHighlight newsletter={newsletters[0]} />
        <NewsletterGrid newsletters={newsletters.slice(1)} />
      </div>
    </ContainerLanding>
  );
}

export const revalidate = 60;
