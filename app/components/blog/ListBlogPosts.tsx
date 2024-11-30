import { urlForImage } from "@/app/(sanity)/lib/image";
import { siteConfig } from "@/app/siteConfig";
import Image from "next/image";
import Link from "next/link";
import { BadgeBlogCategory } from "./BadgeBlogCategory";

export default function ListBlogPosts({ posts }: { posts: any }) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
          {posts &&
            posts.map((post: any) => (
              <article
                key={post.slug.current}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <Link
                  href={siteConfig.baseLinks.blog + `/${post.slug.current}`}
                  className="relative aspect-[16/9]  hover:opacity-75 sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0 "
                >
                  <Image
                    src={post?.mainImage ? urlForImage(post.mainImage) : ""}
                    width={672}
                    height={336}
                    quality={100}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-zinc-50 object-cover shadow-xl shadow-black/20 dark:shadow-lime-900/70"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/10" />
                </Link>
                <div className="w-full">
                  <div className="flex items-center gap-x-4 text-sm">
                    <time
                      dateTime={new Date(post.publishedAt).toISOString()}
                      className="text-zinc-500"
                    >
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <BadgeBlogCategory categories={post.categories} />
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-xl font-semibold leading-6 text-zinc-900 group-hover:text-zinc-600 dark:text-zinc-100 group-hover:dark:text-zinc-400">
                      <Link
                        href={
                          siteConfig.baseLinks.blog + `/${post.slug.current}`
                        }
                      >
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-normal mt-5 leading-6 text-zinc-600 dark:text-zinc-400">
                      {post.summary}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="mt-6 flex border-t border-zinc-900/5 pt-6 dark:border-zinc-100/20">
                    <div className="relative flex items-center gap-x-4">
                      <Image
                        src={urlForImage(post.author.image)}
                        width={40}
                        height={40}
                        alt=""
                        className="size-10 rounded-full bg-zinc-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </p>
                        <p className="text-zinc-600 dark:text-zinc-400">
                          {post.author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
}
