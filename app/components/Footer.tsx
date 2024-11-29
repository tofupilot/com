import { siteConfig } from "@/app/siteConfig";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import CompanyLogo from "./CompanyLogo";
import ThemeSwitch from "./ThemeSwitch";

const navigation = {
  product: [
    {
      name: "Changelog",
      href: siteConfig.baseLinks.changelog,
      external: false,
    },
    {
      name: "Status",
      href: "https://tofupilot.betteruptime.com/",
      external: true,
    },
  ],
  resources: [
    { name: "Docs", href: siteConfig.baseLinks.docs, external: false },
    // {
    //   name: "Templates",
    //   href: siteConfig.baseLinks.templates,
    //   external: false,
    // },
    // { name: "Plugs", href: siteConfig.baseLinks.plugs, external: false },
    { name: "GitHub", href: "https://github.com/tofupilot", external: true },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCLig2QTsAwTHjLoUGZNm3uQ",
      external: true,
    },
  ],
  company: [
    { name: "About", href: siteConfig.baseLinks.about, external: false },
    { name: "Blog", href: siteConfig.baseLinks.blog, external: false },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/tofupilot",
      external: true,
    },
    {
      name: "Careers",
      href: "https://www.linkedin.com/company/tofupilot/jobs/",
      external: true,
    },
  ],
  legal: [
    {
      name: "Privacy",
      href: "/docs/legal/privacy-policy",
      external: false,
    },
    {
      name: "Terms",
      href: "/docs/legal/terms-conditions",
      external: false,
    },
  ],
};

export default function Footer() {
  return (
    <footer id="footer">
      <div className="mx-auto max-w-6xl px-3 pb-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-20">
          <div className="space-y-8">
            <CompanyLogo />
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Plug-and-play manufacturing test analytics. <br /> Built in
              Switzerland, made for the world.
            </p>
            <div className="flex space-x-6">
              <ThemeSwitch />
            </div>
            <div></div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-14 sm:gap-8 md:grid-cols-2 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h1 className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50">
                  Product
                </h1>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Product"
                >
                  {navigation.product.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-zinc-100 p-px dark:bg-zinc-500/20">
                            <ArrowUpRightIcon
                              aria-hidden="true"
                              className="size-full shrink-0 text-zinc-900 dark:text-zinc-300"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50">
                  Resources
                </h1>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Social"
                >
                  {navigation.resources.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-zinc-100 p-px dark:bg-zinc-500/20">
                            <ArrowUpRightIcon
                              aria-hidden="true"
                              className="size-full shrink-0 text-zinc-900 dark:text-zinc-300"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h1 className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50">
                  Company
                </h1>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Company"
                >
                  {navigation.company.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-0.5 aspect-square size-3 rounded-full bg-zinc-100 p-px dark:bg-zinc-500/20">
                            <ArrowUpRightIcon
                              aria-hidden="true"
                              className="size-full shrink-0 text-zinc-900 dark:text-zinc-300"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50">
                  Legal
                </h1>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Legal"
                >
                  {navigation.legal.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-zinc-100 p-px dark:bg-zinc-500/20">
                            <ArrowUpRightIcon
                              aria-hidden="true"
                              className="size-full shrink-0 text-zinc-900 dark:text-zinc-300"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 sm:mt-20 sm:flex-row lg:mt-24 dark:border-zinc-800">
          <p className="text-sm leading-5 text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} TofuPilot SA. All rights reserved.
          </p>
          <Link
            href="https://tofupilot.betteruptime.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="rounded-full border border-zinc-200 py-1 pl-1 pr-2 dark:border-zinc-800"
          >
            <div className="flex items-center gap-1.5">
              <div className="relative size-4 shrink-0">
                <div className="absolute inset-[1px] rounded-full bg-lime-500/20 dark:bg-lime-600/20" />
                <div className="absolute inset-1 rounded-full bg-lime-600 dark:bg-lime-500" />
              </div>
              <span className="text-xs text-zinc-700 dark:text-zinc-50">
                All systems operational
              </span>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
