import Image from "next/image";

export default function InclusionTestimonial() {
  return (
    <figure className="mt-16 border-l border-lime-600 pl-9">
      <blockquote className="font-semibold text-zinc-900 dark:text-white">
        <p>
          “We believe people from diverse backgrounds, with different identities
          and experiences, make our product and our company better. No matter
          your background, we&apos;d love to hear from you! Alignment with our
          values is just as important as experience!”
        </p>
      </blockquote>
      <figcaption className="mt-6 flex gap-x-4">
        <Image
          alt=""
          src="/careers/charlottejulien.png"
          height={24}
          width={24}
          className="size-6 flex-none rounded-full bg-zinc-50"
        />
        <div className="text-sm/6">
          <strong className="font-semibold text-zinc-900 dark:text-white">
            Charlotte and Julien
          </strong>{" "}
          – TofuPilot co-founders
        </div>
      </figcaption>
    </figure>
  );
}
