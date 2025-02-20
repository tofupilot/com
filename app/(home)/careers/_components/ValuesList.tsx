import {
  FaceSmileIcon,
  MagnifyingGlassIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";

const values = [
  {
    name: "Open-source & community.",
    description:
      "We believe a strong community around a free-for-life product is key to our strategy.",
    icon: UserGroupIcon,
  },
  {
    name: "Long-term relationships.",
    description:
      "Our founders worked together for eight years before TofuPilot. We aim to build lasting relationships with our customers and team.",
    icon: FaceSmileIcon,
  },
  {
    name: "Solving big problems.",
    description:
      "Our defining feature is still ahead of us. We move fast, talk to users, and iterate constantly.",
    icon: TrophyIcon,
  },
  {
    name: "Attention to detail.",
    description:
      "Our Swiss engineering background makes us relentless about the quality of our products and obsessed with the details.",
    icon: MagnifyingGlassIcon,
  },
];
export default function ValuesList() {
  return (
    <div className="mt-16 max-w-2xl">
      <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
        What we value
      </h2>
      <ul
        role="list"
        className="mt-8 space-y-8 text-zinc-600 dark:text-zinc-400"
      >
        {values.map((value) => (
          <li className="flex gap-x-3" key={value.name}>
            <value.icon
              aria-hidden="true"
              className="mt-1 size-5 flex-none text-lime-500"
            />
            <span>
              <strong className="font-semibold text-zinc-900 dark:text-white">
                {value.name}
              </strong>{" "}
              {value.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
