import { getAllTemplates } from "@/app/(sanity)/lib/client";
import { defaultKeywords, defaultOpenGraph } from "../metadata";
import { ContainerLanding } from "@/app/components/ContainerLanding";
import { TemplateGrid } from "@/app/components/ui/templates/TemplateGrid";
import { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Templates",
  description:
    "Jumpstart your app development process with pre-built templates from TofuPilot and our community.",
  keywords: [
    ...defaultKeywords,
    "TofuPilot Templates",
    "App Development",
    "Pre-built templates",
    "Software Templates",
  ],
  openGraph: {
    ...defaultOpenGraph,
    title: "Templates - Pre-built templates for App Development | TofuPilot",
    description:
      "Jumpstart your app development process with pre-built templates from TofuPilot and our community.",
  },
};

export default async function Page() {
  const templates = await getAllTemplates();
  return (
    <ContainerLanding
      title="Find your Template"
      description="Jumpstart your test development process with pre-built solutions from TofuPilot and our community."
      wide
    >
      <div className="py-12 sm:py-20">
        <TemplateGrid templates={templates} />
      </div>
    </ContainerLanding>
  );
}
