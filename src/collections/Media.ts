import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: '/media',
    imageSizes: [
      {
        name: 'ogImage',
        width: 1200,
        height: 600,
        fit: 'cover',
      },
      {
        name: 'thumbnail',
        width: 320,
        height: 240,
        fit: 'cover',
      },
    ],
    adminThumbnail: 'ogImage', // show this resized version in admin UI
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
