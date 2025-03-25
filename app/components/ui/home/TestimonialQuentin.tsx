import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default function TestimonialQuentin() {
  return (
    <section id="testimonial-quentin" aria-label="Testimonial by Quentin Lohri" className="mx-auto my-16 sm:my-24 w-full max-w-6xl px-3">
      <div className="mx-auto">
        <figure className="mx-auto">
          <blockquote className="mx-auto max-w-2xl text-center text-xl font-semibold leading-8 text-zinc-900 sm:text-2xl sm:leading-9 dark:text-zinc-50">
            <p>
              <Balancer>"It's clear, it's direct, it's simple. That's what I like about TofuPilot. I like things to be simple and pragmatic."</Balancer>
            </p>
          </blockquote>
          <figcaption className="mt-10 flex items-center justify-center gap-x-5">
            <Image
              className="h-11 w-11 rounded-full object-cover shadow-lg shadow-amber-500/50 ring-2 ring-white dark:ring-zinc-700"
              width={200}
              height={200}
              src="/testimonials/quentin-lohri-sicpa.jpg"
              alt="Quentin Lohri from SICPA"
            />
            <div>
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                Quentin Lohri
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Senior Embedded Software Engineer & R&D Sensor Lead, SICPA
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}