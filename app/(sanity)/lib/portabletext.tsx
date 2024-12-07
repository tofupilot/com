import {
  PortableText as PortableTextComponent,
  PortableTextComponents,
  toPlainText,
} from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

import CopyButton from "@/app/components/shiki/CopyButton";
import { getHighlighter } from "@/app/components/shiki/highlighter";
import { InformationCircleIcon } from "@heroicons/react/16/solid";
import {
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { BundledLanguage } from "shiki";
import { User } from "../schemas/user";
import { urlForImage } from "./image";

import slugify from "slugify";

// Barebones lazy-loaded image component
const ImageComponent = ({
  value,
}: {
  value: {
    src: string;
    alt?: string;
  };
}) => {
  return (
    // we keep in "prose" for automatic margin calculation
    <figure>
      <Image
        src={urlForImage(value)}
        alt={value.alt || "Image"}
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

const TestimonialComponent = ({
  value,
}: {
  value: {
    text: string;
    user: User;
  };
}) => {
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

const GithubComponent = async ({
  value,
}: {
  value: {
    url: string;
  };
}) => {
  try {
    // Fetch the raw file content server-side
    const response = await fetch(value.url, { next: { revalidate: 10 } }); // Use revalidate for ISR
    if (!response.ok) {
      throw new Error(`Failed to fetch the file: ${response.statusText}`);
    }
    const code = await response.text();

    // Extract the file name from the URL
    const fileName = value.url.split("/").pop() || "Unknown file";

    // Detect the language based on the file extension
    const fileExtension = value.url.split(".").pop()?.toLowerCase() || "";
    const languageMap: { [key: string]: BundledLanguage } = {
      c: "c",
      cpp: "cpp",
      py: "python",
      ts: "typescript",
      sh: "bash",
    };
    const lang = languageMap[fileExtension] || "plaintext";

    // Generate html with shiki
    const highlighter = await getHighlighter();
    const html = await highlighter.codeToHtml(code, {
      lang,
      theme: "custom-tailwind-theme",
      transformers: [
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
      ],
    });

    return (
      <div className="not-prose text-xs my-6 overflow-hidden rounded-lg bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
        <h3 className="px-4 py-4 border-b border-zinc-700 bg-zinc-800 text-xs font-semibold text-white">
          {fileName}
        </h3>
        <div className="relative group">
          <div
            className="text-xs p-0 overflow-x-auto [&>pre]:w-full [&>pre]:overflow-x-auto [&>pre]:!py-4 [&>pre]:px-4 [&>pre]:leading-snug
                 [&_.highlighted]:block [&_.highlighted]:w-full [&_.highlighted]:bg-lime-500/40
                 [&_.highlighted-word]:inline [&_.highlighted-word]:bg-lime-500/40"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <CopyButton code={code} />
        </div>
      </div>
    );
  } catch (error: any) {
    return (
      <div className="text-red-600 dark:text-red-400">
        <p>Error loading code: {error.message}</p>
      </div>
    );
  }
};

interface MarkProps {
  children: React.ReactNode;
  value?: any; // Define a more specific type if possible
}

const components: PortableTextComponents = {
  types: {
    image: ImageComponent,
    testimonial: TestimonialComponent,
    github: GithubComponent,
  },
  marks: {
    center: (props: MarkProps) => (
      <div className="text-center">{props.children}</div>
    ),
    highlight: (props: MarkProps) => (
      <span className="font-bold text-lime-500">{props.children}</span>
    ),
    link: ({ children, value }: any) => {
      const isExternal = value.href.startsWith("/");
      return (
        <Link
          href={value.href ?? "#"}
          rel={isExternal ? undefined : "noopener noreferrer"}
          target={isExternal ? undefined : "_blank"}
        >
          {children}
        </Link>
      );
    },
    internalLink: ({ children, value }: any) => (
      <Link href={`/post/${value.slug?.current}`}>{children}</Link>
    ),
  },
  block: {
    h1: ({ children, value }) => {
      const slug = slugify(toPlainText(value), { lower: true, strict: true });
      return (
        <h1 id={slug} className="scroll-mt-24">
          {children}
        </h1>
      );
    },
    h2: ({ children, value }) => {
      const slug = slugify(toPlainText(value), { lower: true, strict: true });
      return (
        <h2 id={slug} className="scroll-mt-24">
          {children}
        </h2>
      );
    },
  },
};

// Set up Portable Text serialization
export const PortableText = (props: { value: any }) => (
  <PortableTextComponent components={components} {...props} />
);
