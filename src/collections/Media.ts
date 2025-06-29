import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media',
    // optional: where files are stored
    // restrict to images
    imageSizes: [
      {
        name: 'ogImage',
        width: 1200,
        height: 600,
        fit: 'cover', // 'cover' crops to fit; 'contain' fits inside without cropping
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
