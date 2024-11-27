import { Id, defineField, defineType } from "sanity";

export default defineType({
  name: "framework",
  title: "Framework",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "Python", value: "Python" },
          { title: "MATLAB", value: "MATLAB" },
        ],
      },
    }),
  ],
});

export interface Framework {
  _id: Id;
  title: string;
  language: string;
}
