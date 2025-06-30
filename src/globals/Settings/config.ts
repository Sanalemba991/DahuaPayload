import { authenticated } from '@/access/authenticated'
import { GlobalConfig } from 'payload'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'
export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: authenticated,
    update: authenticated,
  },
  fields: [
    {
      name: 'site-name',
      label: 'Site Name',
      type: 'text',
      required: true,
    },

    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'siteImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'Telephone',
      type: 'text',
      required: true,
    },
    {
      name: 'Email',
      type: 'text',
      required: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validate: (value: any) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) {
          return 'Please enter a valid email address'
        }
        return true
      },
    },
    {
      name: 'favicon',
      label: 'Favicon',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            {
              type: 'text',
              name: 'canonicalUrl',
              label: 'Canonical URL',
              hooks: {
                beforeChange: [
                  async ({ data, value }) =>
                    !value ? `http:localohost:3002/products/${data?.slug}` : value,
                ],
              },
            },
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
          ],
        },
      ],
    },
    ...slugField(),
    {
      name: 'socials',
      label: 'Socials',
      type: 'array',
      fields: [
        {
          name: 'platform',
          label: 'Platform',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
