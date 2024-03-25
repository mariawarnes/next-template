// @ts-nocheck

import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title*',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'separator',
      title: 'Site Title Separator*',
      description:
        'E.g. "-" or "|". This will appear after the Site Title and before the Page Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description*',
      description: 'Used for SEO, typically shows in Search Engine results',
      validation: (rule) => rule.required(),
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'Logo*',
      type: 'object',
      fields: [
        defineField({
          name: 'light',
          title: 'Light Mode Logo*',
          type: 'image',
          validation: (rule) => rule.required(),
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'dark',
          title: 'Dark Mode Logo*',
          type: 'image',
          validation: (rule) => rule.required(),
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'alt',
          title: 'Logo Alt Text*',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
})
