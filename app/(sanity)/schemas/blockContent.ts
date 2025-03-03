import { defineArrayMember, defineType } from "sanity";

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export default defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        // { title: "H1", value: "h1" }, // disabled not to cause duplicates with <h1> from html
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          {title: 'Code', value: 'code'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          description:
            "Visible caption providing context or additional details about the image.",
          validation: (Rule) =>
            Rule.required()
              .min(10)
              .error(
                "A caption is required and should be at least 10 characters long."
              ),
          placeholder: "The Eiffel Tower at sunset in Paris.",
        },
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description:
            "Accessible description for screen readers or when the image doesn't load.",
          validation: (Rule) =>
            Rule.required()
              .max(150)
              .error(
                "Alternative text is required and should not exceed 150 characters."
              ),
          placeholder: "A photo of the Eiffel Tower taken during sunset.",
        },
      ],
    }),
    defineArrayMember({
      type: "object",
      name: "testimonial",
      title: "Testimonial",
      fields: [
        {
          name: "text",
          type: "text",
          title: "Text",
        },
        {
          name: "user",
          title: "User",
          type: "reference",
          to: [{ type: "user" }],
        },
      ],
    }),
    defineArrayMember({
      type: "object",
      name: "github",
      title: "GitHub File",
      fields: [
        {
          name: "url",
          type: "url",
          title: "Url",
          validation: (Rule) =>
            Rule.custom((url) => {
              if (typeof url !== "string") {
                return "A file URL must be a string.";
              }
              // GitHub raw URL validation regex
              const githubRawRegex =
                /^https:\/\/raw\.githubusercontent\.com\/[^/]+\/[^/]+\/[^/]+\/.+$/;
              if (!githubRawRegex.test(url)) {
                return "The URL must match the GitHub raw file format (https://raw.githubusercontent.com/owner/repo/branch/path/to/file).";
              }
              // Branch validation
              const branchMatch = url.match(
                /^https:\/\/raw\.githubusercontent\.com\/[^/]+\/[^/]+\/(?:refs\/heads\/)?([^/]+)\//
              );
              const branch = branchMatch ? branchMatch[1] : null;
              if (branch && branch !== "main") {
                return "Warning: The branch is not 'main'.";
              }
              return true;
            }),
        },
      ],
      preview: {
        select: {
          url: "url",
        },
        prepare({ url }) {
          if (!url) {
            return { title: "No file URL provided" };
          }

          // Extract repository name and file name
          const parts = url.split("/");
          const repoName = parts[4]; // The 4th segment is the repo name
          const fileName = parts.pop(); // The last segment is the file name

          return {
            title: repoName
              ? `${repoName} / … / ${fileName}`
              : fileName || "Unnamed file",
          };
        },
      },
    }),
    defineArrayMember({
      type: "object",
      name: "ctaButton",
      title: "CTA Button",
      fields: [
        {
          name: "text",
          type: "string",
          title: "Button Text",
          validation: (Rule) => Rule.required().min(2).max(50),
          description: "The text displayed on the button.",
          placeholder: "Get Started",
        },
        {
          name: "url",
          type: "url",
          title: "Button URL",
          validation: (Rule) => Rule.required().uri({ allowRelative: true }),
          description: "The URL the button links to.",
          placeholder: "https://example.com",
        },
        {
          name: "newTab",
          type: "boolean",
          title: "Open in New Tab",
          initialValue: false,
          description: "If checked, the link will open in a new tab.",
        },
      ],
    }),
  ],
});
