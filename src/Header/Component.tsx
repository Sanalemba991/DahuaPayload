import { HeaderClient } from './Component.client'
import React from 'react'
import type { Media } from '@/payload-types'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
export async function Header() {
  const payload = await getPayload({ config: configPromise })
  const settings = await payload.findGlobal({ slug: 'site-settings' })
  const logo = settings.logo as Media
  const telephone = settings.Telephone
  const favicon = settings.favicon as Media
  const email = settings.Email
  return <HeaderClient logo={logo} favicon={favicon} telephone={telephone} email={email} />
}
