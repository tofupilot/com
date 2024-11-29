import { urlForImage } from "@/app/(sanity)/lib/image";
import { Template } from "@/app/(sanity)/schemas/template";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../tremor/Card";

export async function TemplateCard({ template }: { template: Template }) {
  return (
    <Link href={"/templates/" + template.slug.current}>
      <Card
        key={template.title}
        className="group flex flex-col justify-between p-0 hover:cursor-pointer"
      >
        <div>
          {/* Image */}
          <div className="aspect-h-1 aspect-w-1 lg:aspect-none h-44 w-full overflow-hidden rounded-t-md bg-zinc-200 object-cover group-hover:opacity-75">
            <Image
              key={"tofupilot-logo"}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              src={urlForImage(template.mainImage)}
              alt={template.title}
              height={200}
              width={600}
            />
          </div>

          {/* Title & summary */}
          <div className="px-4 pb-2 pt-4">
            <dt className="truncate font-bold text-zinc-900 dark:text-white">
              {template.title}
            </dt>
            <dd className="mt-2 text-sm text-zinc-700 dark:text-zinc-400 h-10 overflow-hidden">
              {template.summary}
            </dd>
          </div>
        </div>

        {/* Author */}
        <div className="mt-1 flex justify-between px-4 pb-4 pt-2">
          <div className="flex items-center gap-x-1 text-zinc-700 dark:text-zinc-400">
            <p>by</p>
            <div className="item-center flex -space-x-1 overflow-hidden ml-1">
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

          {/* Arrow */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-5 right-6 text-zinc-300 dark:text-zinc-400"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      </Card>
    </Link>
  );
}
