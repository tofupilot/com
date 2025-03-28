import Image from "next/image";
import { notFound } from "next/navigation";

import {
  ArrowLeftIcon,
  ChevronRightIcon,
  HomeIcon,
} from "@heroicons/react/16/solid";

import { urlForImage } from "@/app/(sanity)/lib/image";
import { PortableText } from "@/app/(sanity)/lib/portabletext";
import Link from "next/link";

import { Button } from "@/app/components/catalyst/button";
import Cta from "@/app/components/Cta";
import { siteConfig } from "@/app/siteConfig";

export default function Newsletter(props: any) {
  const { loading, post } = props;
  const slug = post?.slug;
  if (!loading && !slug) {
    notFound();
  }

  return (
    <>
      <article className="px-6 pt-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
          {/* Navbar and title */}
          <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div>
                  <a
                    href={siteConfig.baseLinks.home}
                    className="text-zinc-400 hover:text-zinc-500 dark:text-zinc-600"
                  >
                    <HomeIcon
                      className="h-5 w-5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Home</span>
                  </a>
                </div>
              </li>
              <li key={"blog"}>
                <div className="flex items-center">
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0 text-zinc-400 dark:text-zinc-600"
                    aria-hidden="true"
                  />
                  <Link
                    href={siteConfig.baseLinks.newsletter}
                    className="ml-4 text-sm font-medium text-zinc-500 hover:text-zinc-700 hover:dark:text-zinc-300"
                  >
                    Newsletters
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            {post.title}
          </h1>

          {/* Summary */}
          <p className="mt-6 text-xl leading-8">{post.summary}</p>

          {/* Main Media */}
          <figure className="mt-10">
            <div className="relative z-0 mx-auto my-4 aspect-video max-w-screen-lg overflow-hidden rounded-lg shadow-xl shadow-black/40 dark:bg-zinc-950 dark:shadow-lime-900/30">
              <Image
                src={urlForImage(post.mainImage)}
                alt={post.mainImage?.alt || "Thumbnail"}
                loading="eager"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </figure>

          {/* Author */}
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href={post.author.href}>
                <span className="sr-only">{post.author.name}</span>
                <Image
                  src={urlForImage(post.author.image)}
                  alt=""
                  width={40}
                  height={40}
                  quality={100}
                  className="size-10 flex-none rounded-full bg-zinc-50 dark:bg-zinc-950"
                />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                <a href={post.author.href}>{post.author.name}</a>
              </p>
              <div className="flex space-x-1 text-sm text-zinc-500">
                <time dateTime={post.publishedAt} className="font-normal">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span aria-hidden="true">&middot;</span>
                <span>{post.estReadingTime || "5"} min read</span>
              </div>
            </div>
          </div>

          <article className="mx-auto">
            <div className="prose-headings:font-display prose mx-auto my-3 mt-8 max-w-none overflow-x-auto text-base leading-7 text-zinc-700 dark:prose-invert focus:outline-none prose-h1:text-2xl prose-h1:font-bold prose-h1:tracking-tight prose-h1:text-zinc-900 prose-a:text-zinc-600 dark:text-zinc-300 dark:prose-h1:text-zinc-100 dark:prose-a:text-zinc-400">
              {post.body && <PortableText value={post.body} />}
            </div>
          </article>
        </div>
      </article>

      <Cta />
      <div className="flex justify-center pb-64">
        <Button plain href={siteConfig.baseLinks.blog}>
          <ArrowLeftIcon />
          View all posts
        </Button>
      </div>
    </>
  );
}
