import { cx } from "@/app/lib/utils";
import {
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import type { BundledLanguage, BundledTheme } from "shiki";
import { codeToHtml } from "shiki";
import CopyToClipboard from "./CopyToClipboard";

type Props = {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  filename?: string;
  copy?: boolean;
  className?: string;
};

export default async function Code({
  code,
  lang = "typescript",
  copy = false,
  theme = "github-dark-high-contrast",
  className,
}: Props) {
  const html = await codeToHtml(code, {
    lang,
    theme,
    transformers: [
      transformerNotationHighlight(),
      transformerNotationWordHighlight(),
    ],
  });

  return (
    <div
      className={cx(
        "relative w-full overflow-auto rounded-xl bg-zinc-950 shadow-xl shadow-black/40 ring-1 ring-black dark:shadow-lime-900/30 dark:ring-white/5",
        className
      )}
    >
      {copy && (
        <div className="absolute right-0 h-full w-24">
          <div className="absolute right-3 top-3">
            <CopyToClipboard code={code} />
          </div>
        </div>
      )}

      <div
        className={cx(
          "text-sm [&>pre]:w-full [&>pre]:overflow-x-auto [&>pre]:!bg-zinc-950 [&>pre]:py-6 [&>pre]:px-4 [&>pre]:leading-snug [&>pre]:dark:!bg-zinc-950"
        )}
        dangerouslySetInnerHTML={{
          __html: `
            <style>
              pre.has-highlighted {
                position: relative;
              }
              .line.highlighted {
                display: inline-block;
                width: 100%;
                background-color: #84cc1666; // lime-500, 40% opacity
              }
              .highlighted-word {
                display: inline;
                background-color: #84cc1666; // lime-500, 40% opacity// lime-500, 40% opacity
              }
            </style>
            ${html}
          `,
        }}
      ></div>
    </div>
  );
}
