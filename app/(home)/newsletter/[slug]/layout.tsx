import { getNewsletterBySlug, getPostBySlug } from "@/app/(sanity)/lib/client";
import { urlForImage } from "@/app/(sanity)/lib/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const newsletter = await getNewsletterBySlug(params.slug);
  if (!newsletter?.slug) {
    notFound();
  }
  return {
    title: newsletter.title,
    description: newsletter.summary,
    openGraph: {
      images: [urlForImage(newsletter.mainImage)],
    },
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
