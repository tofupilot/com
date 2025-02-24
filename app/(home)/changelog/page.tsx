import {
  getFromToReleases,
  getNumberReleases,
} from "@/app/(sanity)/lib/client";
import { Release, ReleaseHighlight } from "@/app/(sanity)/schemas/release";
import { ContainerLanding } from "../../components/ContainerLanding";
import { CardRelease } from "../../components/ui/changelog/CardRelease";
import { CardReleaseHighlight } from "../../components/ui/changelog/CardReleaseHighlight";
import { PaginationTheme } from "../../components/ui/changelog/Pagination";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const numberReleaseByPage = 5;
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const releases = await getFromToReleases(
    { start: (currentPage - 1) * numberReleaseByPage },
    { numberReleaseByPage }
  );
  const numberAllRelease = await getNumberReleases();
  const totalPages = Math.round(numberAllRelease / numberReleaseByPage) + 1;
  return (
    <ContainerLanding
      title="Changelog"
      description="Keep yourself informed about the most recent additions and improvements we&rsquo;ve made to TofuPilot."
    >
      <div className="px-6 py-12 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-xl flex-col divide-y divide-zinc-200 pb-64 dark:divide-zinc-800">
          {releases &&
            releases.map((release: Release) => (
              <div key={release._id} className="last:divide-0">
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
          <PaginationTheme totalPages={totalPages} />
        </div>
      </div>
    </ContainerLanding>
  );
}

export const revalidate = 60;
