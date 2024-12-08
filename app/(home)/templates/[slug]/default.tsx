import { urlForImage } from "@/app/(sanity)/lib/image";
import { PortableText } from "@/app/(sanity)/lib/portabletext";
import { Button } from "@/app/components/catalyst/button";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/app/components/catalyst/description-list";
import Cta from "@/app/components/Cta";
import { TableOfContents } from "@/app/components/ui/templates/TableOfContent";
import { siteConfig } from "@/app/siteConfig";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function TemplatePage(props: any) {
  const { loading, template } = props;
  const slug = template?.slug;
  if (!loading && !slug) {
    notFound();
  }
  // TODO: move to template query with related field
  // const templates = await getAllTemplates();

  return (
    <div>
      {/* Two column main content */}
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-12">
        <div className="lg:grid lg:grid-cols-7 lg:gap-x-12 xl:gap-x-16">
          {/* Left Column: Fixed Sidebar */}
          <div className="lg:sticky lg:top-0 pt-24 lg:h-[calc(100vh)] mx-auto max-w-2xl lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:max-w-none">
            {/* Header */}
            <Link
              href={siteConfig.baseLinks.templates}
              className="text-zinc-500 dark:hover:text-white hover:text-zinc-700 text-sm tracking-tight"
            >
              ← Back to Templates
            </Link>
            <div className="mt-4 flex flex-col-reverse">
              <div className="mt-4">
                {/* Author */}
                <div className="mt-10 lg:mt-0 flex items-center gap-x-1.5 text-zinc-700 dark:text-zinc-400">
                  <p>By</p>
                  <div className="item-center flex -space-x-1 overflow-hidden">
                    <Image
                      className="inline-block size-5 rounded-full ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"
                      src={urlForImage(template.author.image)}
                      alt={template.author.name}
                      width={20}
                      height={20}
                    />
                  </div>
                  <p>{template.author.name}</p>
                </div>

                <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
                  {template.title}
                </h1>
              </div>

              <div className="lg:col-span-4 lg:row-end-1 lg:hidden">
                <Image
                  alt={template.mainImage.alt}
                  src={urlForImage(template.mainImage)}
                  height={611}
                  width={814}
                  className="aspect-[4/3] w-full rounded-lg bg-zinc-100 object-cover"
                />
              </div>
            </div>
            {/* Summary */}
            <p className="mt-6 text-zinc-500 dark:text-zinc-300">
              {template.summary}
            </p>
            {/* Buttons */}
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-1">
              {/* <Button className="h-11">Deploy</Button> */}
              <Button
                outline
                href={template.githubProject}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10"
              >
                View on GitHub
              </Button>
            </div>
            {/* Properties */}
            <div className="mt-6">
              <DescriptionList>
                <DescriptionTerm>Use Case</DescriptionTerm>
                <DescriptionDetails className="sm:text-right">
                  {template.usecase}
                </DescriptionDetails>
                <DescriptionTerm>Language</DescriptionTerm>
                <DescriptionDetails className="sm:text-right">
                  {template.language}
                </DescriptionDetails>
                {template.framework && (
                  <>
                    <DescriptionTerm>Framework</DescriptionTerm>
                    <DescriptionDetails className="sm:text-right">
                      {template.framework}
                    </DescriptionDetails>
                  </>
                )}
              </DescriptionList>
            </div>
            {/* TOC */}
            <TableOfContents headings={template.headings} />
          </div>

          {/* Right Column: Scrollable Content */}
          <div className="mt-36 overflow-y-auto lg:col-span-4 lg:row-end-1 hidden lg:block">
            <Image
              alt={template.mainImage.alt}
              src={urlForImage(template.mainImage)}
              height={611}
              width={814}
              className="aspect-[4/3] w-full rounded-lg bg-zinc-100 object-cover"
            />
          </div>

          <article className="mx-auto mt-16 w-full max-w-2xl text-justify lg:col-span-4 lg:mt-8 lg:max-w-none prose-headings:font-display prose my-3 overflow-x-auto text-base leading-7 text-zinc-700 dark:prose-invert focus:outline-none prose-h1:text-2xl prose-h1:font-bold prose-h1:tracking-tight prose-h1:text-zinc-900 prose-a:text-zinc-600 dark:text-zinc-300 dark:prose-h1:text-zinc-100 dark:prose-a:text-zinc-400">
            {template.body && <PortableText value={template.body} />}
          </article>
        </div>
      </div>

      {/* Related Templates */}
      {/* <section aria-labelledby="related-templates-heading">
        <div className="mx-auto px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2
            id="related-products-heading"
            className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white"
          >
            Related Templates
          </h2>

          <div className="mt-6">
            <TemplateGrid templates={templates} />
          </div>
        </div>
      </section> */}
      <Cta />
    </div>
  );
}
