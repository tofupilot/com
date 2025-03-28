"use client";

import { Heading } from "@/app/(sanity)/schemas/template";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import slugify from "slugify";

export function TableOfContents({
  headings,
}: {
  headings: Array<Heading> | undefined;
}) {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!headings || headings.length === 0) return;

    const headingElements = headings
      .map((heading) => {
        const id = slugify(String(heading.text), {
          lower: true,
          strict: true,
        });
        const el = document.getElementById(id);
        if (!el) return null;

        const style = window.getComputedStyle(el);
        const scrollMt = parseFloat(style.scrollMarginTop);

        const top = window.scrollY + el.getBoundingClientRect().top - scrollMt;
        return { id, top };
      })
      .filter((x): x is { id: string; top: number } => x !== null);

    const onScroll = () => {
      const scrollPosition = window.scrollY;
      let activeSection = headingElements[0]?.id || null;
      for (const heading of headingElements) {
        if (scrollPosition >= heading.top - 96) {
          activeSection = heading.id;
        } else {
          break;
        }
      }
      setCurrentSection(activeSection);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [headings]);

  const handleNavigation = (id: string) => {
    router.replace(`#${id}`);
  };

  return (
    <nav aria-labelledby="on-this-page-title" className="mt-6">
      {headings && headings.length > 0 && (
        <>
          <h2
            id="on-this-page-title"
            className="font-display font-medium text-zinc-900 dark:text-white sm:text-sm/6 text-base/6"
          >
            On this page
          </h2>
          <ol role="list" className="mt-4 space-y-3 sm:text-sm/6 text-base/6">
            {headings.map((heading, index) => {
              const id = slugify(String(heading.text), {
                lower: true,
                strict: true,
              });
              return (
                <li
                  key={index}
                  style={{
                    marginLeft: heading.level === "h2" ? "20px" : "0",
                  }}
                >
                  <a
                    href={`#${id}`}
                    onClick={() => handleNavigation(id)}
                    className={clsx(
                      currentSection === id
                        ? "text-lime-500"
                        : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
                    )}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ol>
        </>
      )}
    </nav>
  );
}
