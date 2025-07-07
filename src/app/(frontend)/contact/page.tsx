export const dynamic = 'force-dynamic'
import { ContactClient } from './ContactClient'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
export default async function ContactPage() {
  const payload = await getPayload({ config: configPromise })

  try {
    const contactPageRes = await payload.find({
      collection: 'contactpage',
      overrideAccess: false,
      pagination: false,
      depth: 3,
    })

    const contactPage = contactPageRes.docs?.[0]

    // Use default values if no data is found
    const telephone = contactPage?.Telephone ?? '+1 (555) 123-4567'
    const email = contactPage?.Email ?? 'contact@example.com'
    const schemaMarkup = contactPage?.schemaMarkup ? JSON.stringify(contactPage.schemaMarkup) : ''

    return <ContactClient telephone={telephone} email={email} schemaMarkup={schemaMarkup} />
  } catch (error) {
    console.error('ContactPage: Error fetching contact page data:', error)

    // Fallback to default values if there's an error
    const telephone = '+1 (555) 123-4567'
    const email = 'contact@example.com'
    const schemaMarkup = ''

    return <ContactClient telephone={telephone} email={email} schemaMarkup={schemaMarkup} />
  }
}
