import { Id, Slug, TypedObject, defineField, defineType } from "sanity";

export default defineType({
  name: "roadmap",
  title: "Roadmap",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required."),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Planned", value: "planned" },
          { title: "In Progress", value: "in_progress" },
          { title: "Done", value: "done" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
      validation: (Rule) => Rule.required().error("Status is required."),
    }),
    defineField({
      name: "target",
      title: "Target",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required."),
    }),
    defineField({
      name: "votes",
      title: "Votes",
      type: "number",
      validation: (Rule) => Rule.required().error("Votes are required."),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
      validation: (Rule) => Rule.required().error("Description is required."),
    }),
    defineField({
      name: "githubUrl",
      title: "Github issue URL",
      type: "string",
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

// TODO
export interface Roadmap {
  _id: Id;
  slug: Slug;
  title: string;
  description: TypedObject[];
}
