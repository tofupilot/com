import React from "react";
import { HeaderBadge } from "./HeaderBadge";

const stats = [
  {
    name: "Internal development savings",
    value: "+$100k",
  },
  {
    name: "First-pass yield increase",
    value: "+5%",
  },
  {
    name: "Faster test cycle time",
    value: "+20%",
  },
];

export default function Benefits() {
  return (
    <section
      aria-labelledby="features-title"
      className="mx-auto mt-44 w-full max-w-6xl px-3"
    >
      <HeaderBadge>Benefits</HeaderBadge>
      <h2
        id="features-title"
        className="mt-2 inline-block bg-gradient-to-br from-zinc-900 to-zinc-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-zinc-50 dark:to-zinc-300"
      >
        Test smarter, ship faster
      </h2>
      <p className="mt-6 max-w-3xl text-lg leading-7 text-zinc-600 dark:text-zinc-400">
        TofuPilot&apos;s plug-and-play architecture lets your test team focus on
        what matters most: increasing test coverage, optimizing performance, and
        improving product quality.
      </p>
      <dl className="mt-12 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:border-y md:border-zinc-200 md:py-14 dark:border-zinc-800">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="border-l-2 border-lime-100 pl-6 md:border-l md:text-center lg:border-zinc-200 lg:first:border-none dark:border-lime-900 lg:dark:border-zinc-800">
              <dd className="inline-block bg-gradient-to-t from-lime-900 to-lime-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent lg:text-6xl dark:from-lime-700 dark:to-lime-400">
                {stat.value}
              </dd>
              <dt className="mt-1 text-zinc-600 dark:text-zinc-400">
                {stat.name}
              </dt>
            </div>
          </React.Fragment>
        ))}
      </dl>
    </section>
  );
}
