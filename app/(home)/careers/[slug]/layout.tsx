import { getCareerBySlug } from "@/app/(sanity)/lib/client";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const career = await getCareerBySlug(params.slug);
  if (!career?.slug) {
    notFound();
  }
  return {
    title: career.title,
    description: career.summary,
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
