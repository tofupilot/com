import { Release } from '@/app/(sanity)/schemas/release';
import { Badge } from '@/app/components/catalyst/badge';
import { PortableText } from '@portabletext/react';

export function CardRelease({ release }: { release: Release }) {
  return (
    <article className="flex flex-col py-16">
      <div className="mb-4 flex w-full items-center justify-between gap-x-4 text-xs">
        <Badge color="zinc">Changelog</Badge>
        <time
          dateTime={new Date(release.releasedAt).toISOString()}
          className="font-mono text-zinc-500 dark:text-zinc-400"
        >
          {new Date(release.releasedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </div>
      <h1 className="mt-3 text-2xl font-bold leading-6 text-zinc-900 dark:text-zinc-100">
        {release.title}
      </h1>
      <div className="prose-headings:font-display prose mx-auto my-3 mt-8 max-w-none overflow-x-auto text-base leading-7 text-zinc-700 dark:prose-invert focus:outline-none prose-h1:text-2xl prose-h1:font-semibold prose-a:text-zinc-600 dark:text-zinc-300 prose-a:dark:text-zinc-400">
        <PortableText value={release.body} />
      </div>
    </article>
  );
}
