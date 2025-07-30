import HeaderClient from './Component.client'
import React from 'react'
import type { Media } from '@/payload-types'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const dynamic = 'force-dynamic'

export interface HeaderProps {
  logo: {
    url: string
    alt?: string
  }
  telephone?: string
  email?: string
}

export async function Header() {
  const payload = await getPayload({ config: configPromise })

  try {
    const settings = await payload.findGlobal({ slug: 'site-settings' })

    if (!settings) {
      throw new Error('Site settings not found')
    }

    const logo = settings.logo as Media
    const telephone = settings.Telephone as string
    const email = settings.Email as string

    // Ensure logo has required properties
    const logoProps = {
      url: logo?.url || '',
      alt: logo?.alt || 'Site logo',
    }

    return <HeaderClient logo={logoProps} telephone={telephone} email={email} />
  } catch (error) {
    console.error('Error fetching header data:', error)
    // Fallback UI if data fetching fails
    return <HeaderClient logo={{ url: '', alt: 'Logo' }} telephone="" email="" />
  }
}
