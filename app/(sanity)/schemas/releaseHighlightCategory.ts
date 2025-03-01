import { CatalystColor } from '@/app/components/catalyst/types'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'releaseHighlightCategory',
  title: 'Release Highlight Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          { title: 'Zinc', value: 'zinc' },
          { title: 'Red', value: 'red' },
          { title: 'Orange', value: 'orange' },
          { title: 'Amber', value: 'amber' },
          { title: 'Yellow', value: 'yellow' },
          { title: 'Lime', value: 'lime' },
          { title: 'Green', value: 'green' },
          { title: 'Emerald', value: 'emerald' },
          { title: 'Teal', value: 'teal' },
          { title: 'Cyan', value: 'cyan' },
          { title: 'Sky', value: 'sky' },
          { title: 'Blue', value: 'blue' },
          { title: 'Indigo', value: 'indigo' },
          { title: 'Violet', value: 'violet' },
          { title: 'Purple', value: 'purple' },
          { title: 'Fuchsia', value: 'fuchsia' },
          { title: 'Pink', value: 'pink' },
          { title: 'Rose', value: 'rose' }
        ]
      },
      validation: Rule => Rule.required().error('Color cannot be empty')
    })
  ]
})

export interface ReleaseHighlightCategory {
  _id: string
  title?: string
  color: CatalystColor
}
