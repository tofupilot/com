import { type SchemaTypeDefinition } from "sanity";

import author from "./schemas/author";
import blockContent from "./schemas/blockContent";
import post from "./schemas/post";
import postCategory from "./schemas/postCategory";
import release from "./schemas/release";
import releaseCategory from "./schemas/releaseHighlightCategory";
import template from "./schemas/template";
import user from "./schemas/user";
import newsletter from "./schemas/newsletter";
import career from "./schemas/career";
import roadmap from "./schemas/roadmap";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    postCategory,
    blockContent,
    user,
    career,
    newsletter,
    release,
    releaseCategory,
    template,
    roadmap,
  ],
};
