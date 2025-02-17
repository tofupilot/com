import { urlForImage } from "@/app/(sanity)/lib/image";
import { siteConfig } from "@/app/siteConfig";
import Link from "next/link";

export default function NewsletterHighlight({
  newsletter,
}: {
  newsletter: any;
}) {
  return (
    <Link
      href={siteConfig.baseLinks.blog + `/${newsletter.slug.current}`}
      key={newsletter.id}
      className="relative isolate flex flex-col gap-8 lg:flex-row border border-zinc-900/5 hover:border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
    >
      <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-video lg:h-64 lg:shrink-0">
        <img
          alt=""
          src={urlForImage(newsletter.mainImage)}
          className="absolute inset-0 size-full rounded-lg bg-zinc-50 object-cover"
        />
        <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-zinc-900/10" />
      </div>
      <div>
        <div className="flex items-center gap-x-4 text-sm">
          <time dateTime={newsletter.datetime} className="text-zinc-500">
            {new Date(newsletter.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-2xl/6 font-bold text-zinc-900 dark:text-white">
            <a href={newsletter.href}>
              <span className="absolute inset-0" />
              {newsletter.title}
            </a>
          </h3>
          <p className="mt-5 text-base/6 text-zinc-600 dark:text-zinc-400">
            {newsletter.summary}
          </p>
        </div>
        <div className="mt-6 flex pt-6">
          <div className="relative flex items-center gap-x-4">
            <img
              alt=""
              src={urlForImage(newsletter.author.image)}
              className="size-12 rounded-full bg-zinc-50"
            />
            <div className="text-base/6">
              <p className="font-semibold text-zinc-900 dark:text-white">
                <span className="absolute inset-0" />
                {newsletter.author.name}
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                {newsletter.author.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
