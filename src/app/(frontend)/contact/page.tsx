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
  const telephone = contactPage.Email
  const email = contactPage.Telephone
  return (
    <ContactClient
      telephone={telephone}
      email={email}
      schemaMarkup={JSON.stringify(contactPage.schemaMarkup)}
    />
  )
}
