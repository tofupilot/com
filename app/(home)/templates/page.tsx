import { getAllTemplates } from "@/app/(sanity)/lib/client";
import { Metadata } from "next";
import TemplateList from "../components/ListTemplate";
import { ContainerLanding } from "../components/ContainerLanding";

export const metadata: Metadata = {
  title: "Templates › TofuPilot",
  description:
    "Jumpstart your app development process with pre-built solutions from Vercel and our community.",
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
        <TemplateList templates={templates} />
      </div>
    </ContainerLanding>
  );
}

export const revalidate = 60;
