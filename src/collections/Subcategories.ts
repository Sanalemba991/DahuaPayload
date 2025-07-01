import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Subcategories: CollectionConfig = {
  slug: 'subcategories',
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
      name: 'SubcategoryImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'products',
      type: 'relationship',
      relationTo: 'products',
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
          const schema = {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: doc.title,
            description: doc.description,
            url: 'https://dubai-hikvision.com/productsnew',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: doc.products.map((product: string, index: number) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: doc.title,
                url: 'https://dubai-hikvision.com' + product,
              })),
            },
          }

          req.payload.update({
            collection: 'subcategories',
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
