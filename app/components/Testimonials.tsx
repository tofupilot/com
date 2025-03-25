import Image from "next/image";
import Balancer from "react-wrap-balancer";

type TestimonialProps = {
  quote: string;
  name: string;
  position: string;
  imageSrc: string;
};

export default function Testimonial({
  quote,
  name,
  position,
  imageSrc,
}: TestimonialProps) {
  return (
    <section id="testimonial" aria-label="Testimonial" className="my-16 sm:my-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl lg:max-w-6xl">
          <figure className="mx-auto">
            <blockquote className="mx-auto max-w-2xl text-center text-xl font-semibold leading-8 text-zinc-900 sm:text-2xl sm:leading-9 dark:text-zinc-50">
              <p>
                <Balancer>"{quote}"</Balancer>
              </p>
            </blockquote>
            <figcaption className="mt-10 flex items-center justify-center gap-x-5">
              <Image
                className="h-11 w-11 rounded-full object-cover shadow-lg shadow-lime-500/50 ring-2 ring-white dark:ring-zinc-700"
                width={200}
                height={200}
                src={imageSrc}
                alt={`Image of ${name}`}
              />
              <div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                  {name}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {position}
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}