import { urlForImage } from '@/app/(sanity)/lib/image';
import { ReleaseHighlightCategory } from '@/app/(sanity)/schemas/releaseHighlightCategory';
import { Badge } from '@/app/components/catalyst/badge';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export function CardReleaseHighlight({
  highlight,
  release,
}: {
  highlight: any;
  release: any;
}) {
  const mainImage = highlight?.mainImage
    ? urlForImage(highlight?.mainImage)
    : null;
  return (
    <article className="flex flex-col border-b border-zinc-200 py-16 dark:border-zinc-800">
      {/* Highlight category and release date*/}
      <div className="flex w-full items-center justify-between gap-x-4 text-xs">
        <div className="flex space-x-2">
          {highlight.categories.map(
            (category: ReleaseHighlightCategory, key: number) => (
              <Badge key={key} color={category.color}>
                {category.title}
              </Badge>
            )
          )}
        </div>
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

      {/* Highlight title and content */}
      <div className="prose-headings:font-display prose mx-auto my-3 mt-8 max-w-none overflow-x-auto text-base leading-7 text-zinc-700 dark:prose-invert focus:outline-none prose-h1:text-2xl prose-h1:font-bold prose-a:text-zinc-600 dark:text-zinc-300 prose-a:dark:text-zinc-400">
        <h1>{highlight.title}</h1>
        <PortableText value={highlight.body} />
      </div>

      {/* Highlight image */}
      <div className="relative mt-4 w-full">
        <Image
          src={mainImage || ''}
          alt={highlight.mainImage?.alt || 'Release Highlight'}
          quality={100}
          className="w-full rounded-2xl bg-zinc-100 object-cover shadow-xl shadow-black/5 dark:shadow-indigo-900/30"
          width={1152}
          height={768}
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/10" />
      </div>
    </article>
  );
}
