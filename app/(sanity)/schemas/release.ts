import { Id, Image, TypedObject, defineField, defineType } from 'sanity'
import { ReleaseHighlightCategory } from './releaseHighlightCategory'

export default defineType({
  name: 'release',
  title: 'Release',
  type: 'document',
  fields: [
    defineField({
      name: 'releasedAt',
      title: 'Released at',
      type: 'datetime'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'mainImage',
              title: 'Main image',
              type: 'image',
              options: {
                hotspot: true
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text'
                }
              ]
            },
            {
              name: 'body',
              title: 'Body',
              type: 'blockContent'
            },
            {
              name: 'categories',
              title: 'Categories',
              type: 'array',
              of: [
                { type: 'reference', to: { type: 'releaseHighlightCategory' } }
              ],
              validation: Rule =>
                Rule.required()
                  .min(1)
                  .error('At least one category is required')
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    })
  ]
})

export interface ReleaseHighlight {
  title: string
  mainImage?: Image
  body: TypedObject[]
  categories: ReleaseHighlightCategory[]
}

export interface Release {
  _id: Id
  title: string
  releasedAt: string // ISO 8601 date string
  body: TypedObject[]
  highlights: ReleaseHighlight[]
}
