import { getCareerBySlug } from "@/app/(sanity)/lib/client";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const newsletter = await getCareerBySlug(params.slug);
  if (!newsletter?.slug) {
    notFound();
  }
  return {
    title: newsletter.title,
    description: newsletter.summary,
  };
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main role="main" className="">
      {children}
    </main>
  );
}
