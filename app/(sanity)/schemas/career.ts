import { Id, Image, Slug, TypedObject, defineField, defineType } from "sanity";
import { Author } from "./author";

export default defineType({
  name: "career",
  title: "Career",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required."),
    }),
    {
      name: "employmentType",
      title: "Employment Type",
      type: "string",
      options: {
        list: [
          { title: "Full-time", value: "Full-time" },
          { title: "Part-time", value: "Part-time" },
          { title: "Contract", value: "Contract" },
          { title: "Internship", value: "Internship" },
        ],
      },
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      options: {
        list: [
          { title: "Remote", value: "Remote" },
          { title: "On-site", value: "On-site" },
          { title: "Hybrid", value: "Hybrid" },
        ],
      },
    },
    {
      name: "salaryRange",
      title: "Salary Range",
      type: "string",
      description: "Example: $120k – $140k",
    },
    {
      name: "publishedDate",
      title: "Publication Date",
      type: "date",
    },
    defineField({
      name: "preview",
      title: "Preview",
      type: "text",
      validation: (Rule) => Rule.required().error("Preview is required."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Slug is required."),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule) =>
        Rule.required().error("Publication date is required."),
    }),
    defineField({
      name: "who",
      title: "Who we're looking for",
      type: "blockContent",
      validation: (Rule) => Rule.required().error("Who content is required."),
    }),
    defineField({
      name: "what",
      title: "What you'll be doing",
      type: "blockContent",
      validation: (Rule) => Rule.required().error("What content is required."),
    }),
    defineField({
      name: "requirements",
      title: "Requirements",
      type: "blockContent",
      validation: (Rule) =>
        Rule.required().error("Requirements content is required."),
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

export interface Newsletter {
  _id: Id;
  slug: Slug;
  title: string;
  author: Author;
  mainImage: Image;
  publishedAt: string; // ISO 8601 date string
  body: TypedObject[];
}
