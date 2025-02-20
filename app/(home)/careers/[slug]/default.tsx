import { notFound } from "next/navigation";

import {
  ArrowLeftIcon,
  BanknotesIcon,
  BriefcaseIcon,
  ChevronRightIcon,
  HomeIcon,
  MapPinIcon,
} from "@heroicons/react/16/solid";

import { PortableText } from "@/app/(sanity)/lib/portabletext";
import Link from "next/link";

import { Button } from "@/app/components/catalyst/button";
import { cx } from "@/app/lib/utils";
import { siteConfig } from "@/app/siteConfig";
import InclusionTestimonial from "../_components/InclusionTestimonial";
import ValuesList from "../_components/ValuesList";
import BenefitsList from "../_components/BenefitsList";

const steps = [
  {
    name: "Application",
    subtitle: "(You are here)",
    description:
      "Our team will review your application. We're looking to see how your skills and experience align with our needs.",
  },
  {
    name: "Culture interview",
    subtitle: "(30-min video call)",
    description:
      "Our goal is to explore your motivations to join our team, learn why you’d be a great fit, and answer questions about us.",
  },
  {
    name: "Technical interview",
    subtitle: "(1 hour)",
    description:
      "You'll meet the hiring team who will evaluate skills needed to be successful in your role. No live coding.",
  },
  {
    name: "TofuPilot Day",
    subtitle: "(1 day)",
    description:
      "You'll meet more team members and work on an independent project - it's challenging but fun! We’ll cover your accommodation, provide lunch, and you'll leave with some goodies.",
  },
  {
    name: "Offer",
    subtitle: "",
    description:
      "If everyone’s happy, we’ll make you an offer to join us - yay! Pop the champagne (after you sign).",
  },
];

export default function Career(props: any) {
  const { loading, post } = props;
  const slug = post?.slug;
  if (!loading && !slug) {
    notFound();
  }

  return (
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
        <div className="mt-2 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-8 gap-y-1">
          <div className="mt-1 flex items-center text-base/7 dark:text-zinc-400 text-zinc-500">
            <BanknotesIcon
              aria-hidden="true"
              className="mr-2 size-5 shrink-0  text-lime-500"
            />
            {post.salaryRange}
          </div>
          <div className="mt-1 flex items-center text-base/7 dark:text-zinc-400 text-zinc-500">
            <MapPinIcon
              aria-hidden="true"
              className="mr-2 size-5 shrink-0  text-lime-500"
            />
            {post.location}
          </div>
          <div className="mt-1 flex items-center text-base/7 dark:text-zinc-400 text-zinc-500">
            <BriefcaseIcon
              aria-hidden="true"
              className="mr-2 size-5 shrink-0  text-lime-500"
            />
            {post.employmentType}
          </div>
        </div>

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
            we&apos;ve won multiple startup awards in Switzerland, are backed by
            the Swiss Innovation Agency, and are experiencing strong product-led
            growth driven by word of mouth.
          </p>
          <p className="mt-8">
            We&apos;re growing quickly but sustainably. We are default alive,
            staying focused on building an awesome product for our users. We are
            now hiring a few exceptional team members to help us push things
            forward.
          </p>
        </div>

        <ValuesList />

        {/* Who we're looking for */}
        <div className="mt-16 max-w-2xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Who we&apos;re looking for
          </h2>
          <div className="mt-6 prose text-base leading-7 text-zinc-700 dark:prose-invert focus:outline-none dark:text-zinc-300 dark:prose-a:text-zinc-400">
            {post.who && <PortableText value={post.who} />}
          </div>
        </div>

        {/* What you'll be doing */}
        <div className="mt-16 max-w-2xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            What you&apos;ll be doing
          </h2>
          <div className="mt-6 prose text-base leading-7 text-zinc-700 dark:prose-invert focus:outline-none dark:text-zinc-300 dark:prose-a:text-zinc-400">
            {post.what && <PortableText value={post.what} />}
          </div>
        </div>

        {/* Requirements */}
        <div className="mt-16 max-w-2xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Requirements
          </h2>
          <div className="mt-6 prose text-base leading-7 text-zinc-700 dark:prose-invert focus:outline-none dark:text-zinc-300 dark:prose-a:text-zinc-400">
            {post.requirements && <PortableText value={post.requirements} />}
          </div>
        </div>

        <InclusionTestimonial />
        <BenefitsList />

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 md:mt-24">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Process
          </h2>
          <div className="mt-10 flex flex-col">
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
                      {step.subtitle}
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

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 md:mt-24">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Apply
          </h2>
          <Button
            color="lime"
            className="h-12 w-full mt-10"
            href={"mailto:careers@tofupilot.com"}
          >
            Apply by email
          </Button>
          {/* <ApplyForm /> */}
        </div>
      </div>

      <div className="flex justify-center mt-16 pb-64">
        <Button plain href={siteConfig.baseLinks.careers}>
          <ArrowLeftIcon />
          View all open positions
        </Button>
      </div>
    </article>
  );
}
