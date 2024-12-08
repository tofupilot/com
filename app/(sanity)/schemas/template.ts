import { Id, Slug, TypedObject, defineField, defineType } from "sanity";
import { Author } from "./author";

export default defineType({
  name: "template",
  title: "Template",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("A title is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("A slug is required"),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .max(70)
          .error("Summary should not exceed 70 characters."),
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required().error("An author is required"),
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
      validation: (Rule) => Rule.required().error("A main image is required"),
    }),
    defineField({
      name: "githubProject",
      title: "GitHub Project",
      type: "url",
      validation: (Rule) =>
        Rule.required().error("GitHub project URL is mandatory."),
    }),
    defineField({
      name: "usecase",
      title: "Use Case",
      type: "string",
      options: {
        list: [
          { title: "Functional Testing", value: "Functional Testing" },
          { title: "Factory Calibration", value: "Factory Calibration" },
        ],
      },
      validation: (Rule) => Rule.required().error("USe case is mandatory"),
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "Python", value: "Python" },
          { title: "Matlab", value: "Matlab" },
        ],
      },
      validation: (Rule) => Rule.required().error("Language is mandatory"),
    }),
    defineField({
      name: "framework",
      title: "Framework",
      type: "string",
      options: {
        list: [
          { title: "Pytest", value: "PyTest" },
          { title: "OpenHTF", value: "OpenHTF" },
        ],
      },
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});

export type Heading = {
  text: string;
  level: string; // "h1", "h2", etc.
};

export type Template = {
  _id: Id;
  slug: Slug;
  title: string;
  summary: string;
  author: Author;
  mainImage: {
    alt: string;
    url: string;
  };
  githubProject: string;
  usecase: string;
  language: string;
  framework?: string;
  publishedAt: string; // ISO 8601 date string
  body: TypedObject[];
  headings?: Array<Heading>;
  keywords: string[];
};
