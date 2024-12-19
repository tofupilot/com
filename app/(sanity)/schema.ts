import { type SchemaTypeDefinition } from "sanity";

import author from "./schemas/author";
import blockContent from "./schemas/blockContent";
import post from "./schemas/post";
import postCategory from "./schemas/postCategory";
import release from "./schemas/release";
import releaseCategory from "./schemas/releaseHighlightCategory";
import template from "./schemas/template";
import user from "./schemas/user";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // blog
    post,
    author,
    postCategory,
    blockContent,
    user,
    // changelog
    release,
    releaseCategory,
    // templates
    template,
  ],
};
