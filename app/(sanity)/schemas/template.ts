import { Id, Image, Slug, TypedObject, defineField, defineType } from "sanity";
import { Author } from "./author";
import { Framework } from "./framework";

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
      name: "framework",
      title: "Framework",
      type: "reference",
      to: { type: "framework" },
      validation: (Rule) => Rule.required().error("A framework is required"),
    }),
    defineField({
      name: "usecase",
      title: "Use Case",
      type: "string",
      options: {
        list: [
          { title: "Functional Testing", value: "Functional Testing" },
          { title: "In-Circuit Testing", value: "In-Circuit Testing" },
          {
            title: "Environmental Stress Testing",
            value: "Environmental Stress Testing",
          },
          { title: "Boundary Scan Testing", value: "Boundary Scan Testing" },
          { title: "Burn-In Testing", value: "Burn-In Testing" },
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

export interface Template {
  _id: Id;
  slug: Slug;
  title: string;
  summary: string;
  author: Author;
  mainImage: Image;
  framework: Framework;
  usecase: string;
  publishedAt: string; // ISO 8601 date string
  body: TypedObject[];
}
