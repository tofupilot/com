import Image from "next/image";

import { Button } from "@/app/(home)/components/catalyst/button";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

import { urlForImage } from "@/app/(sanity)/lib/image";
import { PortableText } from "@/app/(sanity)/lib/portabletext";

import { getAllTemplates } from "@/app/(sanity)/lib/client";
import { Template } from "@/app/(sanity)/schemas/template";
import { siteConfig } from "@/app/siteConfig";
import clsx from "clsx";
import { notFound } from "next/navigation";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "../../components/catalyst/description-list";
import Cta from "../../components/Cta";
import { TemplateGrid } from "../../components/ui/TemplateGrid";

export async function TemplatePage({
  loading,
  template,
}: {
  loading: boolean;
  template: Template;
}) {
  const slug = template?.slug;
  if (!loading && !slug) {
    notFound();
  }

  // TODO: move to template query with related field
  const templates = await getAllTemplates();

  const tabs = [
    { name: "Templates", href: siteConfig.baseLinks.templates, current: false },
    { name: "Plugs", href: siteConfig.baseLinks.plugs, current: false },
    { name: "Guides", href: siteConfig.baseLinks.guides, current: false },
    { name: "Blog", href: siteConfig.baseLinks.blog, current: true },
    { name: "Changelog", href: siteConfig.baseLinks.changelog, current: false },
  ];

  return (
    <>
      {/* Test tabs */}
      <div className="mt-24 mx-8">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            defaultValue={tabs.find((tab) => tab.current).name}
            className="block w-full rounded-md border-zinc-300 focus:border-indigo-500 focus:ring-indigo-500"
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-zinc-200">
            <nav aria-label="Tabs" className="-mb-px flex">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  aria-current={tab.current ? "page" : undefined}
                  className={clsx(
                    tab.current
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-700",
                    "w-1/4 border-b-2 px-1 py-4 text-center text-sm font-medium"
                  )}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div>
        <Button plain href={siteConfig.baseLinks.templates}>
          <ArrowLeftIcon />
          Back to Templates
        </Button>
      </div>

      {/* Page */}
      <div className="mb-64 y-12 sm:py-20">
        <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
            {/* Template details */}
            <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
              <div className="flex flex-col-reverse">
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

                  <h1 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
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

              <p className="mt-6 text-zinc-500 dark:text-zinc-300">
                {template.summary}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                <Button className="h-11">Deploy</Button>
                <Button outline>View Code</Button>
              </div>

              <div className="mt-8 border-zinc-200">
                <DescriptionList>
                  <DescriptionTerm>Use Case</DescriptionTerm>
                  <DescriptionDetails className="sm:text-right">
                    {template.usecase}
                  </DescriptionDetails>

                  <DescriptionTerm>Language</DescriptionTerm>
                  <DescriptionDetails className="sm:text-right">
                    {template.framework.language}
                  </DescriptionDetails>

                  <DescriptionTerm>Framework</DescriptionTerm>
                  <DescriptionDetails className="sm:text-right">
                    {template.framework.title}
                  </DescriptionDetails>
                </DescriptionList>
              </div>
            </div>

            {/* Template content */}
            <div className="lg:col-span-4 lg:row-end-1 hidden lg:block">
              <Image
                alt={template.mainImage.alt}
                src={urlForImage(template.mainImage)}
                height={611}
                width={814}
                className="aspect-[4/3] w-full rounded-lg bg-zinc-100 object-cover"
              />
            </div>

            <article className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none prose-headings:font-display prose my-3 overflow-x-auto text-base leading-7 text-zinc-700 dark:prose-invert focus:outline-none prose-h1:text-2xl prose-h1:font-bold prose-h1:tracking-tight prose-h1:text-zinc-900 prose-a:text-zinc-600 dark:text-zinc-300 dark:prose-h1:text-zinc-100 dark:prose-a:text-zinc-400">
              {template.body && <PortableText value={template.body} />}
            </article>
          </div>
        </div>

        {/* Related Templates */}
        <section aria-labelledby="related-templates-heading">
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
        </section>

        <Cta />
      </div>
    </>
  );
}
