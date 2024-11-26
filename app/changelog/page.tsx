import { getLastFiveReleases } from '@/app/(sanity)/lib/client';
import { Release, ReleaseHighlight } from '@/app/(sanity)/schemas/release';
import { Metadata } from 'next';
import Balancer from 'react-wrap-balancer';
import { CardRelease } from './_components/CardRelease';
import { CardReleaseHighlight } from './_components/CardReleaseHighlight';

export const metadata: Metadata = {
  title: "Changelog › TofuPilot",
  description:
    'A rundown of the latest TofuPilot feature releases, product enhancements, design updates, and important bug fixes.',
};

export default async function Page() {
  const releases = await getLastFiveReleases();
  return (
    <main
      role="main"
      className="mx-auto mt-36 max-w-3xl animate-slide-up-fade px-3"
      style={{
        animationDuration: '600ms',
        animationFillMode: 'backwards',
      }}
    >
      <div className="text-center">
        <h1 className="inline-block bg-gradient-to-t from-zinc-900 to-zinc-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl dark:from-zinc-50 dark:to-zinc-300">
          Changelog
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          <Balancer>
            Keep yourself informed about the most recent additions and
            improvements we&rsquo;ve made to TofuPilot.
          </Balancer>
        </p>
      </div>
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
    </main>
  );
}

export const revalidate = 60;
