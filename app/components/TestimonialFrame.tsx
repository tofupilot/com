import Image from "next/image";
import Balancer from "react-wrap-balancer";

type TestimonialFrameProps = {
  quote: string;
  name: string;
  position: string;
  company: string;
  imageSrc: string;
  glowColor: "amber" | "lime";
};

export default function TestimonialFrame({
  quote,
  name,
  position,
  company,
  imageSrc,
  glowColor,
}: TestimonialFrameProps) {
  return (
    <section
      id={`testimonial-${name.toLowerCase().replace(/\s+/g, "-")}`}
      aria-label={`Testimonial by ${name}`}
      className="mx-auto my-16 sm:my-24 w-full max-w-6xl px-3"
    >
      <div className="mx-auto">
        <figure className="mx-auto">
          <blockquote className="mx-auto max-w-2xl text-center text-xl font-semibold leading-8 text-zinc-900 sm:text-2xl sm:leading-9 dark:text-zinc-50">
            <p>
              <Balancer>"{quote}"</Balancer>
            </p>
          </blockquote>
          <figcaption className="mt-10 flex items-center justify-center gap-x-5">
            <Image
              className={`h-11 w-11 rounded-full object-cover shadow-lg shadow-${glowColor}-500/50 ring-2 ring-white dark:ring-zinc-700`}
              width={200}
              height={200}
              src={imageSrc}
              alt={`${name} from ${company}`}
            />
            <div>
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                {name}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {position}, {company}
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}