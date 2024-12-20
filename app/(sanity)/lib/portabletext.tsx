import {
  PortableText as PortableTextComponent,
  PortableTextComponents,
  toPlainText,
} from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

import CopyButton from "@/app/components/shiki/CopyButton";
import { getHighlighter } from "@/app/components/shiki/highlighter";
import {
  ArrowUpRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/16/solid";
import {
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { BundledLanguage } from "shiki";
import { User } from "../schemas/user";
import { urlForImage } from "./image";

import { Button } from "@/app/components/catalyst/button";
import slugify from "slugify";

// Barebones lazy-loaded image component
const ImageComponent = ({
  value,
}: {
  value: {
    src: string;
    alt: string;
    caption: string;
  };
}) => {
  return (
    // we keep in "prose" for automatic margin calculation
    <figure>
      <Image
        src={urlForImage(value)}
        alt={value.alt}
        sizes="(max-width: 800px) 100vw, 800px"
        height={432}
        width={768}
        className="aspect-video rounded-xl bg-zinc-50 object-cover"
      />
      <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-zinc-500 dark:text-zinc-300">
        <InformationCircleIcon
          className="mt-0.5 size-5 flex-none text-zinc-300 dark:text-zinc-500"
          aria-hidden="true"
        />
        {value.caption}
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
      theme: "tofupilot-theme",
      transformers: [
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
      ],
    });

    // Get GitHub public URL from raw one
    const publicUrl = value.url
      .replace("raw.githubusercontent.com", "github.com")
      .replace("/refs/heads/", "/blob/")
      .replace("/main/", "/main/");

    return (
      // Out of "prose" for <pre> custom styling
      <div className="not-prose text-sm my-6 overflow-hidden rounded-lg bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
        <div className="flex justify-between items-center pl-4 pr-2 border-b border-zinc-700 bg-zinc-800">
          <h3 className="text-xs font-semibold py-4 text-white">{fileName}</h3>
          <Button
            href={publicUrl}
            target="_blank"
            rel="noopener noreferrer"
            plain
            className="shrink-0"
          >
            <ArrowUpRightIcon />
          </Button>
        </div>
        <div className="relative group">
          <pre
            className="text-sm p-0 overflow-x-auto [&>pre]:w-full [&>pre]:overflow-x-auto [&>pre]:!py-4 [&>pre]:px-4 [&>pre]:leading-snug"
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
    link: ({ children, value }: MarkProps) => {
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
  },
};

// Set up Portable Text serialization
export const PortableText = (props: { value: any }) => (
  <PortableTextComponent components={components} {...props} />
);
