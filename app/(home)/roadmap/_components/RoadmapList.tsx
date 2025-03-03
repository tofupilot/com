import {
  IconCircleCheckFilled,
  IconCircleDashed,
  IconCircleXFilled,
  IconProgress,
} from "@tabler/icons-react";
import { PortableText } from "next-sanity";

const statusIcons: Record<string, JSX.Element> = {
  planned: (
    <IconCircleDashed
      aria-hidden="true"
      stroke={2}
      className="size-6 text-zinc-400"
    />
  ),
  in_progress: (
    <IconProgress
      aria-hidden="true"
      stroke={2}
      className="size-6 text-yellow-500"
    />
  ),
  done: (
    <IconCircleCheckFilled
      aria-hidden="true"
      stroke={2}
      className="size-6 text-lime-500"
    />
  ),
  cancelled: (
    <IconCircleXFilled
      aria-hidden="true"
      stroke={2}
      className="size-6 text-pink-500"
    />
  ),
};

export default function RoadmapList({ roadmaps }: { roadmaps: any }) {
  return (
    <div className="mt-16 w-full lg:max-w-2xl lg:flex-auto">
      <ul className="mt-8">
        {roadmaps.map((roadmap: any) => (
          <li key={roadmap._id} className="group relative flex gap-x-5">
            <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-zinc-200 dark:after:bg-zinc-700">
              <div className="relative z-10 size-6 flex justify-center items-center">
                {statusIcons[roadmap.status] || statusIcons.planned}
              </div>
            </div>

            <div className="grow pb-8 group-last:pb-0">
              <h3 className="mb-1 text-xs text-zinc-600 dark:text-zinc-400">
                Target: {roadmap.target}
              </h3>

              <p className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">
                {roadmap.title}
              </p>

              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 prose dark:prose-invert prose-strong:font-semibold">
                {roadmap.description && (
                  <PortableText value={roadmap.description} />
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
