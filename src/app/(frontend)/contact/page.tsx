export const dynamic = 'force-dynamic'
import { ContactClient } from './ContactClient'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
export default async function ContactPage() {
  const payload = await getPayload({ config: configPromise })
  const contactPageRes = await payload.find({
    collection: 'contactpage',
    overrideAccess: false,
    pagination: false,
    depth: 3,
  })

  const contactPage = contactPageRes.docs?.[0]
  if (!contactPage) {
    return <div className="text-white p-10">Contact page data not found.</div>
  }
  const telephone = contactPage?.Telephone ?? ''
  const email = contactPage?.Email ?? ''
  const schemaMarkup = contactPage?.schemaMarkup ? JSON.stringify(contactPage.schemaMarkup) : ''
  return <ContactClient telephone={telephone} email={email} schemaMarkup={schemaMarkup} />
}
