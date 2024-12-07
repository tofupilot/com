"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import slugify from "slugify";

type Heading = {
  text: string;
  level: string; // "h1", "h2", etc.
};

export function TableOfContents({ headings }: { headings: Array<Heading> }) {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const headingElements = headings
      .map((heading) => {
        const id = slugify(String(heading.text), { lower: true, strict: true });
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
    <div className="hidden xl:sticky xl:top-[4.75rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-8 xl:pr-6 ">
      <nav aria-labelledby="on-this-page-title" className="w-56">
        {headings.length > 0 && (
          <>
            <h2
              id="on-this-page-title"
              className="font-display text-sm font-medium text-zinc-900 dark:text-white"
            >
              On this page
            </h2>
            <ol role="list" className="mt-4 space-y-3 text-sm">
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
                          : "font-normal text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
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
    </div>
  );
}
