// @ts-nocheck

import {defineType, defineField} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {validateUrl} from '../../../utils/sanity/sanity.rules.js'

export default defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'menu'}),
    defineField({
      name: 'title',
      title: 'Title*',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Single Link',
      description: 'Add a single link for menu items with only one link.',
      type: 'object',
      fields: [
        defineField({
          name: 'url',
          title: 'URL*',
          validation: validateUrl,
          type: 'string',
        }),
      ],
      validation: (rule) =>
        rule.custom((field, context) => {
          const existingLinks = context.document && context.document.links

          // Check if existingLinks is an array and has a length property
          const areSubLinksFilled = Array.isArray(existingLinks) && existingLinks.length > 0

          return field && areSubLinksFilled
            ? 'Either Single Link or Sub menu Links must have a value, not both.'
            : true
        }),
    }),
    defineField({
      name: 'links',
      title: 'Sub menu Links',
      description: 'Add multiple links for menu items with more than one link.',
      type: 'array',
      validation: (rule) =>
        rule
          .min(2)
          .error(
            'Sub menu must have at least two links, use the "Single Link" field if you only have one.',
          )
          .custom((field, context) => {
            const existingLink = context.document && context.document.link

            // Check if existingLink is an array and has a length property
            const isSingleLinkFilled = Array.isArray(existingLink) && existingLink.length > 0

            return isSingleLinkFilled && field
              ? 'Either Single Link or Sub menu Links must have a value, not both.'
              : true
          }),
      of: [
        {
          name: 'menuLink',
          title: 'Menu Link',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title*',
              validation: (rule) => rule.required(),
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL*',
              validation: validateUrl,
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
})
