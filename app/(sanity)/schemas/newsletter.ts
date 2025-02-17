import { Id, Image, Slug, TypedObject, defineField, defineType } from "sanity";
import { Author } from "./author";

export default defineType({
  name: "newsletter",
  title: "Newsletter",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required."),
    }),
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
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required().error("Author is required."),
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
          validation: (Rule) => Rule.required().error("Alternative text is required."),
        },
      ],
      validation: (Rule) => Rule.required().error("Main image is required."),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule) => Rule.required().error("Publication date is required."),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (Rule) => Rule.required().error("Body content is required."),
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
