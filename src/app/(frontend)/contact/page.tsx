import { ContactClient } from './ContactClient'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
export default async function ContactPage() {
  const payload = await getPayload({ config: configPromise })
  const settings = await payload.findGlobal({ slug: 'site-settings' })
  const telephone = settings.Telephone
  const email = settings.Email
  return <ContactClient telephone={telephone} email={email} />
}
