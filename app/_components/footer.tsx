import { siteConfig } from "@/app/siteConfig";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import CompanyLogo from "./company-logo";
import ThemeSwitch from "./theme-switch";

const navigation = {
  product: [
    { name: "Docs", href: "https://docs.tofupilot.com", external: false },
    { name: "Changelog", href: siteConfig.baseLinks.blog, external: false },
    {
      name: "Status",
      href: "https://tofupilot.betteruptime.com/",
      external: true,
    },
  ],
  company: [
    { name: "About", href: siteConfig.baseLinks.about, external: false },
    { name: "Blog", href: siteConfig.baseLinks.blog, external: false },
    {
      name: "Careers",
      href: "https://www.linkedin.com/company/tofupilot/jobs/",
      external: true,
    },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/tofupilot", external: true },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/tofupilot",
      external: true,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCLig2QTsAwTHjLoUGZNm3uQ",
      external: true,
    },
  ],
  legal: [
    {
      name: "Privacy",
      href: "https://docs.tofupilot.com/legal/privacy-policy",
      external: false,
    },
    {
      name: "Terms",
      href: "https://docs.tofupilot.com/legal/terms-conditions",
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
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
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
                <h1 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
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
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                            <ArrowUpRightIcon
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900 dark:text-gray-300"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
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
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-0.5 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                            <ArrowUpRightIcon
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900 dark:text-gray-300"
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
                <h1 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Social
                </h1>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Social"
                >
                  {navigation.social.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                            <ArrowUpRightIcon
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900 dark:text-gray-300"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
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
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                            <ArrowUpRightIcon
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900 dark:text-gray-300"
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
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:mt-20 sm:flex-row lg:mt-24 dark:border-gray-800">
          <p className="text-sm leading-5 text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} TofuPilot SA. All rights reserved.
          </p>
          <Link
            href="https://tofupilot.betteruptime.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="rounded-full border border-gray-200 py-1 pl-1 pr-2 dark:border-gray-800"
          >
            <div className="flex items-center gap-1.5">
              <div className="relative size-4 shrink-0">
                <div className="absolute inset-[1px] rounded-full bg-emerald-500/20 dark:bg-emerald-600/20" />
                <div className="absolute inset-1 rounded-full bg-emerald-600 dark:bg-emerald-500" />
              </div>
              <span className="text-xs text-gray-700 dark:text-gray-50">
                All systems operational
              </span>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
