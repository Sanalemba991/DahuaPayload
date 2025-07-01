// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb' // database-adapter-import
import { seoPlugin } from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { Categories } from './collections/Categories'
import { HomePage } from './collections/homepage'
import { Media } from './collections/Media'
import { Products } from './collections/Products'
import { ServicePage } from './collections/services'
import { Subcategories } from './collections/Subcategories'
import { Users } from './collections/Users'
import { SiteSettings } from './globals/Settings/config'
import { ServicePage as ServicePageType } from './payload-types'
import sharp from 'sharp'
import { ContactPage } from './collections/ContactPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      graphics: {
        Logo: 'src/components/Logo.tsx#default',
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  sharp,
  collections: [
    Users,
    Media,
    ServicePage,
    Products,
    Categories,
    Subcategories,
    HomePage,
    ContactPage,
  ],
  editor: lexicalEditor(),
  globals: [SiteSettings],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  plugins: [
    seoPlugin({
      collections: ['ServicePage'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }: { doc: ServicePageType }) =>
        `Lovosis Technology L.L.C — ${doc.title}`,
    }),
  ],
})
