import Image from "next/image";
import { HeaderBadge } from "./HeaderBadge";
import Balancer from "react-wrap-balancer";

interface Card {
  id: number;
  category: string;
  title: JSX.Element | string;
  staticSrc: string;
}

const cards: Card[] = [
  {
    id: 1,
    category: "Enchanted Tools",
    title: (
      <>
        Creating <br /> next-generation <br /> robotic characters
      </>
    ),
    staticSrc: "/home/card-enchanted-tools.png",
  },
  {
    id: 2,
    category: "Enlightra",
    title: (
      <>
        Enabling <br /> extreme bandwidth <br /> data transmission
      </>
    ),
    staticSrc: "/home/card-enlightra.png",
  },
  {
    id: 3,
    category: "Involi",
    title: (
      <>
        Providing <br />
        real-time drone <br /> traffic surveillance
      </>
    ),
    staticSrc: "/home/card-involi.png",
  },
];

export default function UserStories() {
  return (
    <section
      aria-labelledby="community-title"
      className="mx-auto mt-44 w-full max-w-6xl px-3"
    >
      <HeaderBadge>Community</HeaderBadge>
      <h2
        id="features-title"
        className="mt-2 inline-block bg-gradient-to-br from-zinc-900 to-zinc-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-zinc-50 dark:to-zinc-300"
      >
        <Balancer>Trusted by fast-moving engineering teams</Balancer>
      </h2>
      <p className="mt-6 max-w-3xl text-lg leading-7 text-zinc-600 dark:text-zinc-400">
        TofuPilot helps engineering teams worldwide build tests faster for
        drones, medical devices, photonic sensors, and more.
      </p>
      <div className="mx-auto mt-12 grid max-w-2xl auto-rows-fr grid-cols-1 gap-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {cards.map((post) => (
          <article
            key={post.id}
            className="relative isolate flex flex-col items-start justify-start overflow-hidden rounded-3xl bg-zinc-900 px-8 pb-[26rem] pt-8 shadow-xl shadow-black/40 backdrop-blur-sm sm:pb-48 lg:pb-[26rem] dark:shadow-lime-900/30"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/80 via-transparent to-transparent" />
            <div className="relative z-40">
              <div className="text-left font-sans text-sm font-medium text-white md:text-base">
                {post.category}
              </div>
              <div className="mt-2 max-w-xs text-left font-sans text-xl font-semibold text-white [text-wrap:balance] md:text-3xl">
                {post.title}
              </div>
            </div>
            {/* Image */}
            <Image
              quality={100}
              alt={post.category}
              width={1200}
              height={800}
              src={post.staticSrc}
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
