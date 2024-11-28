import { Template } from "@/app/(sanity)/schemas/template";
import { TemplateCard } from "./TemplateCard";

export async function TemplateGrid({ templates }: { templates: Template[] }) {
  return (
    <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {templates.map((template) => (
        <TemplateCard key={template.slug.current} template={template} />
      ))}
    </dl>
  );
}
