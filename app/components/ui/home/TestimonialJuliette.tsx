import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default function TestimonialJuliette() {
  return (
    <section id="testimonial-juliette" aria-label="Testimonial by Juliette Lansoy" className="mx-auto my-16 sm:my-24 w-full max-w-6xl px-3">
      <div className="mx-auto">
        <figure className="mx-auto">
          <blockquote className="mx-auto max-w-2xl text-center text-xl font-semibold leading-8 text-zinc-900 sm:text-2xl sm:leading-9 dark:text-zinc-50">
            <p>
              <Balancer>"TofuPilot offers a great overview of our testing results, in a clean and well structured way. New features are regularly added to enhance the data analysis opportunities that are brought to us seamlessly"</Balancer>
            </p>
          </blockquote>
          <figcaption className="mt-10 flex items-center justify-center gap-x-5">
            <Image
              className="h-11 w-11 rounded-full object-cover shadow-lg shadow-lime-500/50 ring-2 ring-white dark:ring-zinc-700"
              width={200}
              height={200}
              src="/testimonials/juliette-lansoy-enchanted-tools.png"
              alt="Juliette Lansoy from Enchanted Tools"
            />
            <div>
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                Juliette Lansoy
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Integration Validation & Verification Manager, Enchanted Tools
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}