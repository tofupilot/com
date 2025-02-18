import { urlForImage } from "@/app/(sanity)/lib/image";
import { siteConfig } from "@/app/siteConfig";
import Link from "next/link";

const jobOpenings = [
  {
    id: 1,
    role: "Full-time designer",
    href: "#",
    description:
      "Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.",
    salary: "$75,000 USD",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    role: "Laravel developer",
    href: "#",
    description:
      "Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.",
    salary: "$125,000 USD",
    location: "San Francisco, CA",
  },
  {
    id: 3,
    role: "React Native developer",
    href: "#",
    description:
      "Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.",
    salary: "$105,000 USD",
    location: "San Francisco, CA",
  },
];

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
                  {/* {career.salary} */}
                  CHF 70-100k
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
                  {/* {career.location} */}
                  Lausanne, Switzerland (Hybrid)
                </dd>
              </dl>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
