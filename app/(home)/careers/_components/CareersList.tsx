import { siteConfig } from "@/app/siteConfig";
import Link from "next/link";

export default function CareersList({ careers }: { careers: any }) {
  return (
    <div className="w-full lg:max-w-xl lg:flex-auto">
      <h3 className="sr-only">Job openings</h3>
      <ul className="-my-8 divide-y divide-zinc-100 dark:divide-zinc-700">
        {careers.map((career: any) => (
          <li key={career.slug} className="py-8">
            <Link
              href={siteConfig.baseLinks.careers + `/${career.slug.current}`}
            >
              <dl className="relative flex flex-wrap gap-x-3">
                <dt className="sr-only">Role</dt>
                <dd className="w-full flex-none text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                  {career.title}
                  <span aria-hidden="true" className="absolute inset-0" />
                </dd>
                <dt className="sr-only">Description</dt>
                <dd className="mt-2 w-full flex-none text-base/7 text-zinc-600 dark:text-zinc-400">
                  {career.preview}
                </dd>
                <dt className="sr-only">Salary</dt>
                <dd className="mt-4 text-base/7 font-semibold text-zinc-900 dark:text-white">
                  {career.salaryRange}
                </dd>
                <dt className="sr-only">Location</dt>
                <dd className="mt-4 flex items-center gap-x-3 text-base/7 text-zinc-500 dark:text-zinc-400">
                  <svg
                    viewBox="0 0 2 2"
                    aria-hidden="true"
                    className="size-0.5 flex-none fill-zinc-300"
                  >
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  {career.employmentType}
                </dd>
                <dt className="sr-only">Location</dt>
                <dd className="mt-4 flex items-center gap-x-3 text-base/7 text-zinc-500 dark:text-zinc-400">
                  <svg
                    viewBox="0 0 2 2"
                    aria-hidden="true"
                    className="size-0.5 flex-none fill-zinc-300"
                  >
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  {career.location}
                </dd>
                <dt className="sr-only">Location</dt>
                <dd className="mt-4 flex items-center gap-x-3 text-base/7 text-zinc-500 dark:text-zinc-400">
                  <svg
                    viewBox="0 0 2 2"
                    aria-hidden="true"
                    className="size-0.5 flex-none fill-zinc-300"
                  >
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  Published on {new Date(career.publishedDate).toLocaleDateString()}
                </dd>
              </dl>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
