import { urlForImage } from "@/app/(sanity)/lib/image";
import { siteConfig } from "@/app/siteConfig";
import Link from "next/link";

export default function NewsletterGrid({ newsletters }: { newsletters: any }) {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {newsletters.map((newsletter: any) => (
        <Link
          key={newsletter.slug.current}
          href={siteConfig.baseLinks.newsletter + `/${newsletter.slug.current}`}
          className="flex flex-col items-start justify-between border border-transparent hover:border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
        >
          <div className="relative w-full">
            <img
              alt=""
              src={urlForImage(newsletter.mainImage)}
              className="aspect-video w-full rounded-2xl bg-zinc-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/10" />
          </div>
          <div className="flex flex-col flex-1 max-w-xl">
            <div className="mt-8 flex items-center gap-x-4 text-sm">
              <time dateTime={newsletter.publishedAt} className="text-zinc-500">
                {new Date(newsletter.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-xl/6 font-bold text-zinc-900 dark:text-white line-clamp-2">
                <span className="absolute inset-0 " />
                {newsletter.title}
              </h3>
              <p className="mt-5 flex-1 line-clamp-3 text-base/6 dark:text-zinc-400 text-zinc-600">
                {newsletter.preview}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
