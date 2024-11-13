export function ContainerLanding({
  page,
  title = "",
  description,
}: {
  page?: string;
  title?: string | undefined | null;
  description?: string | undefined | null;
}) {
  return (
    <div className="relative isolate pt-14">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-zinc-200 dark:stroke-zinc-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>

      <div className="sm:py-26 mt-20 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-zinc-600 dark:text-zinc-400">
            {page}
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200 sm:text-6xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
