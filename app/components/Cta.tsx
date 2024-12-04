"use client";

import { siteConfig } from "@/app/siteConfig";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "./catalyst/button";

export default function Cta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="mx-auto mb-20 mt-32 max-w-6xl p-1 px-2 sm:mt-56"
    >
      <div className="relative flex items-center justify-center">
        <div
          className="mask pointer-events-none absolute -z-10 select-none opacity-70"
          aria-hidden="true"
        >
          <div className="flex size-full flex-col gap-2">
            {Array.from({ length: 20 }, (_, idx) => (
              <div key={`outer-${idx}`}>
                <div className="flex size-full gap-2">
                  {Array.from({ length: 41 }, (_, idx2) => (
                    <div key={`inner-${idx}-${idx2}`}>
                      <div className="size-5 rounded-md shadow shadow-lime-500/20 ring-1 ring-black/5 dark:shadow-lime-500/20 dark:ring-white/5"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl">
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <h3
                id="cta-title"
                className="inline-block bg-gradient-to-t from-zinc-900 to-zinc-800 bg-clip-text p-2 text-4xl font-bold tracking-tighter text-transparent md:text-6xl dark:from-zinc-50 dark:to-zinc-300"
              >
                Ready to get started?
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-zinc-600 sm:text-lg dark:text-zinc-400">
                <Balancer>
                  Create a new workspace and start uploading your test data in
                  seconds.
                </Balancer>
              </p>
            </div>
            <div className="mt-10">
              <Button
                color="lime"
                href={siteConfig.baseLinks.signup}
                className="h-10"
              >
                Get started
              </Button>
            </div>
            <p className="mt-4 text-xs text-zinc-600 sm:text-sm dark:text-zinc-400">
              Not sure where to start?{" "}
              <Link
                href={siteConfig.baseLinks.contact}
                className="font-semibold text-lime-600 hover:text-lime-500 dark:text-lime-500 dark:hover:text-lime-400"
              >
                Talk to our team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
