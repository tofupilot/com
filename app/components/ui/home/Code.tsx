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
        className="text-sm [&>pre]:w-full [&>pre]:overflow-x-auto [&>pre]:!bg-zinc-950 [&>pre]:py-6 [&>pre]:px-4 [&>pre]:leading-snug [&>pre]:dark:!bg-zinc-950 
             [&_.highlighted]:inline-block [&_.highlighted]:w-full [&_.highlighted]:bg-lime-500/40 
             [&_.highlighted-word]:inline [&_.highlighted-word]:bg-lime-500/40"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
