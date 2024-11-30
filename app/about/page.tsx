import Image from "next/image";
import Balancer from "react-wrap-balancer";

import { HeaderBadge } from "@/app/components/HeaderBadge";
import { Logos } from "@/app/components/LogosSupporters";
import { Button } from "@/app/components/catalyst/button";
import { siteConfig } from "@/app/siteConfig";
import profilePictureCharlotte from "@/public/about/charlotte-evequoz.jpeg";
import profilePictureFelix from "@/public/about/felix-berthier.png";
import profilePictureJulien from "@/public/about/julien-buteau.png";
import { ArrowUpRightIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const team = [
  {
    name: "Julien Buteau",
    role: "Co-Founder / CEO",
    imageUrl: profilePictureJulien,
    twitterUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/julienbuteau/",
  },
  {
    name: "Charlotte Evéquoz",
    role: "Co-Founder / CPO",
    imageUrl: profilePictureCharlotte,
    twitterUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/charlotte-evequoz/",
  },
  {
    name: "Félix Berthier",
    role: "Co-Founder / CTO",
    imageUrl: profilePictureFelix,
    twitterUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/f%C3%A9lix-berthier-21505128b/",
  },
];

export default async function About() {
  return (
    <div className="my-36 flex flex-col overflow-hidden px-3">
      <section
        aria-labelledby="about-overview"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <HeaderBadge>About Tofupilot</HeaderBadge>
        <h1
          id="about-overview"
          className="mt-2 inline-block bg-gradient-to-br from-zinc-900 to-zinc-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-zinc-50 dark:to-zinc-300"
        >
          <Balancer>
            We are test engineers, building
            <br />
            the analytics we always wanted
          </Balancer>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-700 dark:text-zinc-400">
          Our team met while developing manufacturing tests for professional
          drones. With no solution available, we had to build custom tools to
          track test data.
        </p>
        <p className="mt-2 max-w-4xl text-lg text-zinc-700 dark:text-zinc-400">
          We created TofuPilot so engineers can focus on building their products
          instead of internal tools.
        </p>
      </section>

      <section
        aria-labelledby="team-title"
        className="mt-12 flex flex-col items-center"
      >
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-36 gap-y-16 pt-6 text-center lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {team.map((person) => (
            <li key={person.name}>
              <Link href={person.linkedinUrl} target="_blank" rel="noreferrer">
                <Image
                  className="mx-auto h-36 w-36 rounded-full shadow-xl shadow-black/20 hover:opacity-75 dark:bg-zinc-950 dark:shadow-lime-900/70"
                  src={person.imageUrl}
                  width={224}
                  height={224}
                  quality={100}
                  alt={person.name}
                />
              </Link>
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-zinc-900 dark:text-zinc-100">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {person.role}
              </p>
              <ul role="list" className="mt-4 flex justify-center gap-x-6">
                {person.twitterUrl && (
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={person.twitterUrl}
                      className="text-zinc-400 hover:text-zinc-500"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="size-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                )}
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={person.linkedinUrl}
                    className="text-zinc-400 hover:text-zinc-500"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="size-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>

        <Button
          color="lime"
          href="https://www.linkedin.com/company/tofupilot/jobs/"
          target="_blank"
          className="mx-auto mt-20 h-10 w-full max-w-2xl shadow-xl shadow-lime-500/20"
        >
          View Open Roles
          <ArrowUpRightIcon />
        </Button>
      </section>

      <div className="relative isolate -z-10 mt-32">
        <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg
            className="h-[40rem] w-[80rem] flex-none stroke-zinc-100 dark:stroke-zinc-800"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                width={200}
                height={200}
                x="50%"
                y="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(-100 0)"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg
              x="50%"
              y="50%"
              className="overflow-visible fill-zinc-50 dark:fill-lime-900/30"
            >
              <path
                d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-xl font-semibold leading-8 text-zinc-900 dark:text-zinc-100">
            We&apos;re supported by the best Swiss start-up programs
          </h2>
          <div className="mx-auto my-12 grid max-w-sm grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-sm sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <Logos.VentureKick className="col-span-2 max-h-14 w-full object-contain lg:col-span-1" />
            <Logos.Innosuisse className="col-span-2 max-h-14 w-full object-contain lg:col-span-1" />
          </div>
          <h2 className="mt-20 text-center text-xl font-semibold leading-8 text-zinc-900 dark:text-zinc-100">
            And backed by world-class hardware innovation hubs
          </h2>
          <div className="mx-auto my-12 grid max-w-sm grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-sm sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <Logos.EPFL className="col-span-2 max-h-14 w-full object-contain lg:col-span-1" />
            <Logos.LaForge className="col-span-2 max-h-14 w-full object-contain lg:col-span-1" />
          </div>
        </div>
      </div>

      <section
        aria-labelledby="vision-title"
        className="mx-auto mt-16 flex flex-col items-center"
      >
        <Button
          outline
          href={siteConfig.baseLinks.blog}
          className="h-10 w-full max-w-xl"
        >
          See latest news
          <ChevronRightIcon />
        </Button>
      </section>
    </div>
  );
}
