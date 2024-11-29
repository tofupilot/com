import { PortableText as PortableTextComponent } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

import { InformationCircleIcon } from '@heroicons/react/16/solid';
import { urlForImage } from './image';

// Barebones lazy-loaded image component
const ImageComponent = ({ value }: { value: any }) => {
  return (
    // we keep in "prose" for automatic margin calculation
    <figure>
      <Image
        src={urlForImage(value)}
        alt={value.alt || 'Image'}
        sizes="(max-width: 800px) 100vw, 800px"
        height={432}
        width={768}
        className="aspect-video rounded-xl bg-zinc-50 object-cover shadow-xl shadow-black/40 dark:bg-zinc-950 dark:shadow-lime-900/30"
      />
      <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-zinc-500 dark:text-zinc-300">
        <InformationCircleIcon
          className="mt-0.5 h-5 w-5 flex-none text-zinc-300 dark:text-zinc-500"
          aria-hidden="true"
        />
        {value.alt}
      </figcaption>
    </figure>
  );
};

const TestimonialComponent = ({ value }: { value: any }) => {
  return (
    <figure className="border-l border-lime-600 pl-9">
      <p className="font-semibold text-zinc-900 dark:text-zinc-100">
        “{value.text}”
      </p>
      <figcaption className="not-prose relative mt-4 flex items-center gap-x-4">
        <Image
          src={urlForImage(value.user.image)}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 rounded-full bg-zinc-50 dark:bg-zinc-950"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">
            <div>
              <span className="absolute inset-0" />
              {value.user.name}
            </div>
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            {value.user.role} at {value.user.company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
};

interface MarkProps {
  children: React.ReactNode;
  value?: any; // Define a more specific type if possible
}

const components = {
  types: {
    image: ImageComponent,
    testimonial: TestimonialComponent,
  },
  marks: {
    center: (props: MarkProps) => (
      <div className="text-center">{props.children}</div>
    ),
    highlight: (props: MarkProps) => (
      <span className="font-bold text-lime-500">{props.children}</span>
    ),
    link: ({ children, value }: any) => {
      const isExternal = value.href.startsWith('/');
      return (
        <a
          href={value.href ?? '#'}
          rel={isExternal ? undefined : 'noopener noreferrer'}
          target={isExternal ? undefined : '_blank'}
        >
          {children}
        </a>
      );
    },
    internalLink: ({ children, value }: any) => (
      <Link href={`/post/${value.slug?.current}`}>{children}</Link>
    ),
  },
};

// Set up Portable Text serialization
export const PortableText = (props: { value: any }) => (
  <PortableTextComponent components={components} {...props} />
);
