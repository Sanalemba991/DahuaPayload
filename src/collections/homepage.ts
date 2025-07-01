import type { CollectionConfig } from 'payload'
export const HomePage: CollectionConfig = {
  slug: 'homepage',

  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'title',
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
      name: 'heroVideo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Upload an MP4 hero video for the homepage',
      },
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
            '@graph': [
              {
                '@type': 'WebSite',
                '@id': 'https://unv-dubai-uae.com/#website',
                url: 'https://unv-dubai-uae.com',
                name: 'UNV Dubai UAE',
                description: 'Leading provider of advanced security solutions in Dubai, UAE.',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: 'https://unv-dubai-uae.com/search?q={search_term_string}',
                  'query-input': 'required name=search_term_string',
                },
              },
              {
                '@type': 'Organization',
                '@id': 'https://unv-dubai-uae.com/#organization',
                name: 'UNV Dubai UAE',
                url: 'https://unv-dubai-uae.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://unv-dubai-uae.com/logo.png',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+971-123-4567',
                  contactType: 'customer service',
                  areaServed: 'AE',
                  availableLanguage: ['English', 'Arabic'],
                },
                sameAs: [
                  'https://www.facebook.com/unvdubai',
                  'https://www.instagram.com/unvdubai',
                  'https://www.linkedin.com/company/unvdubai',
                ],
              },
              {
                '@type': 'WebPage',
                '@id': 'https://unv-dubai-uae.com/#webpage',
                url: 'https://unv-dubai-uae.com',
                inLanguage: 'en',
                name: 'Home',
                description: 'Next-gen security solutions for homes and businesses in Dubai.',
                isPartOf: {
                  '@id': 'https://unv-dubai-uae.com/#website',
                },
                about: {
                  '@id': 'https://unv-dubai-uae.com/#organization',
                },
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://unv-dubai-uae.com/#breadcrumb',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://unv-dubai-uae.com',
                  },
                ],
              },
            ],
          }

          req.payload.update({
            collection: 'homepage',
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
