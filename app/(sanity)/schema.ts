import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import postCategory from './schemas/postCategory'
import post from './schemas/post'
import author from './schemas/author'
import release from './schemas/release'
import releaseCategory from './schemas/releaseHighlightCategory'
import user from './schemas/user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    postCategory,
    blockContent,
    release,
    releaseCategory,
    user
  ]
}
