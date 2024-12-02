"use client";

import { siteConfig } from "@/app/siteConfig";
import {
  Bars3Icon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

import useScroll from "@/app/lib/use-scroll";
import { cx } from "@/app/lib/utils";
import { Button } from "./catalyst/button";
import CompanyLogo from "./CompanyLogo";

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
        open === true ? "h-[252px]" : "h-auto",
        scrolled || open === true
          ? "backdrop-blur-nav max-w-3xl border-zinc-100 bg-white/95 shadow-xl shadow-black/5 dark:border-white/15 dark:bg-black/95"
          : "bg-white/0 dark:bg-zinc-950/0"
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          {/* TofuPilot Logo */}
          <Link
            href={siteConfig.baseLinks.home}
            aria-label="TofuPilot Company Logo"
            className="flex"
          >
            <span className="sr-only">TofuPilot Logo</span>
            <CompanyLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              <Link
                className="px-2 py-1 text-zinc-900 dark:text-zinc-50"
                href={siteConfig.baseLinks.about}
              >
                About
              </Link>
              <a
                className="px-2 py-1 text-zinc-900 dark:text-zinc-50"
                href="/docs"
              >
                Docs
              </a>
              <Link
                className="px-2 py-1 text-zinc-900 dark:text-zinc-50"
                href={siteConfig.baseLinks.pricing}
              >
                Pricing
              </Link>
            </div>
          </nav>

          {/* Desktop Navigation */}
          <div className="hidden gap-3 md:flex">
            <Button outline href={siteConfig.baseLinks.login} className="h-10">
              Log in
            </Button>
            <Button
              color="lime"
              href={siteConfig.baseLinks.signup}
              className="h-10"
            >
              Sign up
              <ChevronRightIcon />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex gap-x-3 md:hidden">
            <Button color="lime" href={siteConfig.baseLinks.signup}>
              Sign up
              <ChevronRightIcon />
            </Button>
            <Button
              onClick={() => setOpen(!open)}
              color="light"
              className="aspect-square"
            >
              {open ? (
                <XMarkIcon />
              ) : (
                <Bars3Icon />
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
              <Link href={siteConfig.baseLinks.pricing}>Pricing</Link>
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
