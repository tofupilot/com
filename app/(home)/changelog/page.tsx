import { getLastFiveReleases } from "@/app/(sanity)/lib/client";
import { Release, ReleaseHighlight } from "@/app/(sanity)/schemas/release";
import { Metadata } from "next";
import { CardRelease } from "./_components/CardRelease";
import { CardReleaseHighlight } from "./_components/CardReleaseHighlight";
import { ContainerLanding } from "../components/ContainerLanding";

export const metadata: Metadata = {
  title: "Changelog › TofuPilot",
  description:
    "A rundown of the latest TofuPilot feature releases, product enhancements, design updates, and important bug fixes.",
};

export default async function Page() {
  const releases = await getLastFiveReleases();
  return (
    <ContainerLanding
      title="Changelog"
      description="Keep yourself informed about the most recent additions and improvements we&rsquo;ve made to TofuPilot."
    >
      <div className="px-6 py-12 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-xl flex-col divide-y divide-zinc-200 pb-64 dark:divide-zinc-800">
          {releases &&
            releases.map((release: Release) => (
              <div key={release._id}>
                {release.highlights &&
                  release.highlights.map((highlight: ReleaseHighlight) => (
                    <CardReleaseHighlight
                      key={highlight.title}
                      {...{ highlight, release }}
                    />
                  ))}
                <CardRelease key={release._id} {...{ release }} />
              </div>
            ))}
        </div>
      </div>
    </ContainerLanding>
  );
}

export const revalidate = 60;
