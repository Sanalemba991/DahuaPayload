import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { Media } from '@/payload-types'
export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'categoryImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'products',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
    },
    {
      name: 'subcategories',
      type: 'relationship',
      relationTo: 'subcategories',
      hasMany: true,
    },
    {
      name: 'schemaMarkup',
      type: 'json',
      admin: {
        readOnly: true,
      },
    },
  ],

  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation === 'create' || operation === 'update') {
          const media = doc.heroImage as Media

          const price = doc.pricep
          const schema = {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: doc.title,
            description: doc.description,
            sku: doc.sku,
            image: media?.url || '',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'USD',
              price: price,
              availability: 'https://schema.org/InStock',
              itemCondition: 'https://schema.org/NewCondition',
              seller: {
                '@type': 'Organization',
                name: 'Your Company',
              },
            },
          }

          req.payload.update({
            collection: 'categories',
            id: doc.id,
            data: {
              schemaMarkup: schema,
            },
          })
          doc.schemaMarkup = schema
          return doc
        }
      },
    ],
  },
}
