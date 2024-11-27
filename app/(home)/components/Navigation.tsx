"use client";

import { Button } from "@/app/(home)/components/catalyst/button";
import { siteConfig } from "@/app/siteConfig";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

import CompanyLogo from "./CompanyLogo";
import { cx } from "@/app/(home)/lib/utils";
import useScroll from "@/app/(home)/lib/use-scroll";

export function Navigation() {
  const scrolled = useScroll(15);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 768px)");
    const handleMediaQueryChange = () => {
      setOpen(false);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange();

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <header
      className={cx(
        "ease-[cubic-bezier(0.16,1,0.3,1.03)] fixed inset-x-3 top-4 z-50 mx-auto flex max-w-6xl transform-gpu animate-slide-down-fade justify-center overflow-hidden rounded-xl border border-transparent px-3 py-3 transition-all duration-300 will-change-transform",
        open === true ? "h-[252px]" : "h-16",
        scrolled || open === true
          ? "backdrop-blur-nav max-w-3xl border-gray-100 bg-white/95 shadow-xl shadow-black/5 dark:border-white/15 dark:bg-black/80"
          : "bg-white/0 dark:bg-gray-950/0"
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link
            href={siteConfig.baseLinks.home}
            aria-label="TofuPilot Company Logo"
            className="flex"
          >
            <span className="sr-only">Company logo</span>
            <CompanyLogo />
          </Link>
          <nav className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              <Link
                className="px-2 py-1 text-gray-900 dark:text-gray-50"
                href={siteConfig.baseLinks.about}
              >
                About
              </Link>
              <a
                className="px-2 py-1 text-gray-900 dark:text-gray-50"
                href="/docs"
              >
                Docs
              </a>
              <Link
                className="px-2 py-1 text-gray-900 dark:text-gray-50"
                href={siteConfig.baseLinks.changelog}
              >
                Changelog
              </Link>
            </div>
          </nav>
          <div className="hidden gap-3 md:flex">
            <Button outline href={siteConfig.baseLinks.login} className="h-10">
              Log in
            </Button>
            <Button
              color="indigo"
              href={siteConfig.baseLinks.signup}
              className="h-10"
            >
              Sign up
            </Button>
          </div>
          <div className="flex gap-x-2 md:hidden">
            <Button
              color="indigo"
              href={siteConfig.baseLinks.signup}
              className="h-10"
            >
              Sign up
            </Button>
            <Button
              onClick={() => setOpen(!open)}
              color="light"
              className="aspect-square p-2"
            >
              {open ? (
                <XMarkIcon aria-hidden="true" className="size-5" />
              ) : (
                <Bars3Icon aria-hidden="true" className="size-5" />
              )}
            </Button>
          </div>
        </div>
        <nav
          className={cx(
            "my-6 flex text-lg ease-in-out will-change-transform md:hidden",
            open ? "" : "hidden"
          )}
        >
          <ul className="space-y-4 font-medium">
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.about}>About</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <a href="/docs">Docs</a>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.changelog}>Changelog</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.login}>Log in</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
