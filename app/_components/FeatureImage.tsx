import { ThemedImage } from './ThemedImage';

export default async function FeatureImage({
  lightSrc,
  darkSrc,
}: {
  lightSrc: string;
  darkSrc: string;
}) {
  return (
    <div className="relative h-[28rem] w-full rounded-xl bg-zinc-50/40 p-3 shadow-xl shadow-black/5 ring-1 ring-inset ring-black ring-zinc-200/50 dark:bg-zinc-900/70 dark:bg-zinc-950 dark:shadow-indigo-900/40 dark:ring-white/5">
      <div className="h-full w-full rounded-xl bg-white ring-2 ring-zinc-900/5 dark:bg-zinc-950 dark:ring-white/15">
        <ThemedImage
          alt="Product screenshot"
          lightSrc={lightSrc}
          darkSrc={darkSrc}
          height={424}
          width={545}
          className="h-full w-full rounded-xl object-cover object-left-top"
        />
      </div>
    </div>
  );
}
