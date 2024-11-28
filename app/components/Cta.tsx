"use client";

import { siteConfig } from "@/app/siteConfig";
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
                      <div className="size-5 rounded-md shadow shadow-indigo-500/20 ring-1 ring-black/5 dark:shadow-indigo-500/20 dark:ring-white/5"></div>
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
                className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text p-2 text-4xl font-bold tracking-tighter text-transparent md:text-6xl dark:from-gray-50 dark:to-gray-300"
              >
                Ready to get started?
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600 sm:text-lg dark:text-gray-400">
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
            <p className="mt-4 text-xs text-gray-600 sm:text-sm dark:text-gray-400">
              Not sure where to start?{" "}
              <a
                target="_blank"
                href="https://outlook.office.com/bookwithme/user/b07c0ff908f44c3bb2e1f33eef07fc64@tofupilot.com?anonymous&ep=plink"
                className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400"
              >
                Talk to sales
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
