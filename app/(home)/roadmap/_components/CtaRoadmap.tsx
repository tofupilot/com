import { Button } from "@/app/components/catalyst/button";
import { siteConfig } from "@/app/siteConfig";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

export default function CtaRoadmap() {
  return (
    <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          Help shape TofuPilot.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg/8 text-zinc-600 dark:text-zinc-400">
          Tell us what’s missing, what to improve, and what you need.
        </p>
        <div className="mt-8 flex items-center justify-center gap-x-3">
          <Button color="lime" href={siteConfig.baseLinks.discord}>
            Join our Discord
          </Button>
          <Button plain href={siteConfig.baseLinks.support}>
            Contact support
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
