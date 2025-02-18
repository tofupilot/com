import { notFound } from "next/navigation";

import {
  AcademicCapIcon,
  ArrowLeftIcon,
  BanknotesIcon,
  BellSlashIcon,
  ChevronRightIcon,
  FaceSmileIcon,
  GlobeEuropeAfricaIcon,
  HomeIcon,
  HomeModernIcon,
  MagnifyingGlassIcon,
  SunIcon,
  TrophyIcon,
  UserGroupIcon
} from "@heroicons/react/16/solid";

import { PortableText } from "@/app/(sanity)/lib/portabletext";
import Link from "next/link";

import { Button } from "@/app/components/catalyst/button";
import { cx } from "@/app/lib/utils";
import { siteConfig } from "@/app/siteConfig";
import Image from "next/image";

const values = [
  {
    name: "Open-source & community.",
    description:
      "We believe a strong community around a free-for-life product is key to our strategy.",
    icon: UserGroupIcon,
  },
  {
    name: "Long-term relationships.",
    description:
      "Our founders worked together for eight years before TofuPilot. We aim to build lasting relationships with our customers and team.",
    icon: FaceSmileIcon,
  },
  {
    name: "Solving big problems.",
    description:
      "Our defining feature is still ahead of us. We move fast, talk to users, and iterate constantly.",
    icon: TrophyIcon,
  },
  {
    name: "Attention to detail.",
    description:
      "Our Swiss engineering background makes us relentless about the quality of our products and obsessed with the details.",
    icon: MagnifyingGlassIcon,
  },
];

const benefits = [
  {
    name: "Transparent compensation & equity",
    icon: BanknotesIcon,
  },
  {
    name: "Two meeting-free days per week",
    icon: BellSlashIcon,
  },
  {
    name: "Home office with co-working credit",
    icon: HomeModernIcon,
  },
  {
    name: "On-site for Swiss/EU citizens at our Swiss HQ",
    icon: GlobeEuropeAfricaIcon,
  },
  {
    name: "Training budget",
    icon: AcademicCapIcon,
  },
  {
    name: "4 weeks of holidays per year",
    icon: SunIcon,
  },
];

const steps = [
  {
    name: "Application",
    subtitle: "You are here",
    description:
      "Our team will review your application. We're looking to see how your skills and experience align with our needs.",
  },
  {
    name: "Culture interview",
    subtitle: "30-min video call",
    description:
      "Our goal is to explore your motivations to join our team, learn why you’d be a great fit, and answer questions about us.",
  },
  {
    name: "Technical interview",
    subtitle: "1 hour",
    description:
      "You'll meet the hiring team who will evaluate skills needed to be successful in your role. No live coding.",
  },
  {
    name: "TofuPilot Day",
    subtitle: "1 day",
    description:
      "You'll meet more team members and work on an independent project - it's challenging but fun! We’ll cover your accommodation, provide lunch, and you'll leave with some goodies.",
  },
  {
    name: "Offer",
    subtitle: "yo",
    description:
      "If everyone’s happy, we’ll make you an offer to join us - yay! Pop the champagne (after you sign).",
  },
];

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
                    href={siteConfig.baseLinks.careers}
                    className="ml-4 text-sm font-medium text-zinc-500 hover:text-zinc-700 hover:dark:text-zinc-300"
                  >
                    Careers
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            {post.title}
          </h1>

          {/* About TofuPilot */}
          <div className="mt-16 max-w-2xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              About TofuPilot
            </h2>
            <p className="mt-6">
              TofuPilot helps hardware teams build successful products by
              providing a suite of developer tools for automating, deploying,
              observing, and optimizing manufacturing tests. We offer an
              open-source library for faster test development, a plug-and-play
              data pipeline, automatic unit traceability, and performance
              analytics... and there&apos;s plenty more to come.
            </p>
            <p className="mt-8">
              TofuPilot was founded in 2024 by two robotics engineers who wanted
              to help hardware teams bring innovation to market faster. Since
              then, over 200 companies worldwide have installed TofuPilot,
              we&apos;ve won multiple startup awards in Switzerland, are backed
              by the Swiss Innovation Agency, and are experiencing strong
              product-led growth driven by word of mouth.
            </p>
            <p className="mt-8">
              We&apos;re growing quickly but sustainably. We are default alive,
              staying focused on building an awesome product for our users. We
              are now hiring a few exceptional team members to help us push
              things forward.
            </p>
          </div>

          {/* What we value */}
          <div className="mt-16 max-w-2xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              What we value
            </h2>
            <ul
              role="list"
              className="mt-8 space-y-8 text-zinc-600 dark:text-zinc-400"
            >
              {values.map((value) => (
                <li className="flex gap-x-3" key={value.name}>
                  <value.icon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-lime-600"
                  />
                  <span>
                    <strong className="font-semibold text-zinc-900 dark:text-white">
                      {value.name}
                    </strong>{" "}
                    {value.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 max-w-2xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              Who we&apos;re looking for
            </h2>
            <div className="mt-6 prose text-base leading-7 text-zinc-700 dark:prose-invert focus:outline-none dark:text-zinc-300 dark:prose-a:text-zinc-400">
              {post.body && <PortableText value={post.who} />}
            </div>
          </div>

          <div className="mt-16 max-w-2xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              What you&apos;ll be doing
            </h2>
            <div className="mt-6 prose text-base leading-7 text-zinc-700 dark:prose-invert focus:outline-none dark:text-zinc-300 dark:prose-a:text-zinc-400">
              {post.body && <PortableText value={post.what} />}
            </div>
          </div>

          <div className="mt-16 max-w-2xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              Requirements
            </h2>
            <div className="mt-6 prose text-base leading-7 text-zinc-700 dark:prose-invert focus:outline-none dark:text-zinc-300 dark:prose-a:text-zinc-400">
              {post.body && <PortableText value={post.requirements} />}
            </div>
          </div>

          {/* Summary */}
          <div className="mt-16 max-w-2xl">
            <p className="mt-6 text-xl leading-8">{post.summary}</p>
            <article className="mx-auto">
              <div className="prose-headings:font-display prose mx-auto my-3 mt-8 max-w-none overflow-x-auto text-base leading-7 text-zinc-700 dark:prose-invert focus:outline-none prose-h1:sm:text-5xl prose-h1:text-4xl prose-h1:font-semibold prose-h1:tracking-tight prose-h1:text-zinc-900 prose-a:text-zinc-600 dark:text-zinc-300 dark:prose-h1:text-zinc-100 dark:prose-a:text-zinc-400"></div>
            </article>
          </div>

          {/* Inclusion */}
          <figure className="mt-10 border-l border-lime-600 pl-9">
            <blockquote className="font-semibold text-zinc-900 dark:text-white">
              <p>
                “We believe people from diverse backgrounds, with different
                identities and experiences, make our product and our company
                better. No matter your background, we&apos;d love to hear from
                you! Alignment with our values is just as important as
                experience!”
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <Image
                alt=""
                src="/careers/charlottejulien.png"
                height={24}
                width={24}
                className="size-6 flex-none rounded-full bg-zinc-50"
              />
              <div className="text-sm/6">
                <strong className="font-semibold text-zinc-900 dark:text-white">
                  Charlotte and Julien
                </strong>{" "}
                – TofuPilot co-founders
              </div>
            </figcaption>
          </figure>
        </div>
      </article>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 md:mt-24">
        <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          Benefits
        </h2>
        <dl className="mt-10 max-w-xl space-y-6 text-base/7 text-gray-300 lg:max-w-none">
          {benefits.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline  text-white">
                <feature.icon
                  aria-hidden="true"
                  className="absolute left-1 top-1 size-5 text-lime-500"
                />
                {feature.name}
              </dt>
            </div>
          ))}
        </dl>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 md:mt-24">
        <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          Process
        </h2>
        <div className="mt-10 flex flex-col pb-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cx(
                "relative ml-3 border-l border-zinc-200 pl-9 dark:border-zinc-800",
                index < steps.length - 1 ? "pb-8" : "pb-0"
              )}
            >
              <div className="font-code absolute -left-4 flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 bg-zinc-100 text-xs font-medium dark:border-zinc-800 dark:bg-zinc-800">
                {index + 1}
              </div>
              <div className="pt-0.5 pl-1">
                <div className="flex">
                  <h4 className="mt-0 text-base/7 font-semibold text-zinc-900 dark:text-white">
                    {step.name}
                  </h4>
                  <p className="mt-0 ml-1 text-base/7 text-zinc-600 dark:text-zinc-400">
                    ({step.subtitle})
                  </p>
                </div>
                <p className=" dark:text-zinc-300 text-base text-zinc-800 mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-16 pb-64">
        <Button color="lime" href={siteConfig.baseLinks.careers}>
          <ArrowLeftIcon />
          View all open positions
        </Button>
      </div>
    </>
  );
}
