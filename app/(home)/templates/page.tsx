import { getAllTemplates } from "@/app/(sanity)/lib/client";
import { ContainerLanding } from "@/app/components/ContainerLanding";
import { TemplateGrid } from "@/app/components/ui/TemplateGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Templates",
  description:
    "Jumpstart your app development process with pre-built solutions from TofuPilot and our community.",
};

export default async function Page() {
  const templates = await getAllTemplates();
  return (
    <ContainerLanding
      title="Find your Template"
      description="Jumpstart your test development process with pre-built solutions from TofuPilot and our community."
      wide
    >
      <div className="mb-64 py-12 sm:py-20">
        <TemplateGrid templates={templates} />
      </div>
    </ContainerLanding>
  );
}

export const revalidate = 60;
