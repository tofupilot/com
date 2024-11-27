import { getAllTemplates } from "@/app/(sanity)/lib/client";
import { ContainerLanding } from "@/app/(home)/components/container-landing";
import { Metadata } from "next";
import TemplateList from "./components/template-list";

export const metadata: Metadata = {
  title: "Templates › TofuPilot",
  description:
    "Jumpstart your app development process with pre-built solutions from Vercel and our community.",
};

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "All New Arrivals" },
      { value: "tees", label: "Tees" },
      { value: "crewnecks", label: "Crewnecks" },
      { value: "sweatshirts", label: "Sweatshirts" },
      { value: "pants-shorts", label: "Pants & Shorts" },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    options: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "2xl", label: "2XL" },
    ],
  },
];

export default async function Page() {
  // get frameworks
  // get languages
  // get products
  const templates = await getAllTemplates();
  return (
    <main role="main" className="flex flex-col overflow-hidden">
      <ContainerLanding
        page="Templates"
        title="Find your Template"
        description={metadata.description}
      />
      <div className="mb-64 py-12 sm:py-20 max-w-7xl mx-auto">
        {/* Add filter list, disabled for now */}
        <TemplateList templates={templates} />
      </div>
    </main>
  );
}

export const revalidate = 60;
