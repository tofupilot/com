"use client";

import { ArrowPathIcon } from "@heroicons/react/16/solid";
import { Button } from "./components/catalyst/button";
import { Text, TextLink } from "./components/catalyst/text";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main
      role="main"
      className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-zinc-950"
    >
      <div className="max-w-lg">
        <h1 className="mt-4 flex font-mono text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-200">
          {">"}
          <p className="ml-1">Exception detected</p>.
        </h1>
        <Text className="mt-6 max-w-md">
          We detected an exception and engineering has been notified. We
          apologize for the inconvenience. Don&apos;t hesitate to reach out to
          us if this problem persists:{" "}
          <TextLink href="mailto:support@tofupilot.com" target="_blank">
            support@tofupilot.com
          </TextLink>
        </Text>
        <div className="mt-10 flex items-center justify-between gap-x-3">
          <Button color="lime" className="w-full" onClick={reset}>
            <ArrowPathIcon />
            Reload TofuPilot
          </Button>
        </div>
      </div>
    </main>
  );
}
