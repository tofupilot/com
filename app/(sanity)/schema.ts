import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import postCategory from "./schemas/postCategory";
import post from "./schemas/post";
import author from "./schemas/author";
import release from "./schemas/release";
import releaseCategory from "./schemas/releaseHighlightCategory";
import user from "./schemas/user";
import template from "./schemas/template";
import framework from "./schemas/framework";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // blog
    post,
    author,
    postCategory,
    blockContent,
    // changelog
    release,
    releaseCategory,
    // templates
    template,
    framework,

    // ?
    user,
  ],
};
