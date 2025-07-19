export const dynamic = 'force-dynamic'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Category } from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import CategorySection from './CategorySection'

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  // Await the params since they're now a Promise in newer Next.js versions
  const { category } = await params

  const payload = await getPayload({ config: configPromise })

  const categoryResult = await payload.find({
    collection: 'categories',
    depth: 2,
    limit: 1,
    where: {
      slug: {
        equals: category,
      },
    },
  })

  const categoryDoc = categoryResult.docs[0] as Category

  if (!categoryDoc) {
    return (
      <div className="pt-[90px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600">The category &ldquo;{category}&rdquo; could not be found.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-start overflow-hidden">
        <div className="w-full h-full">
          <Image
            src="/images/dahuactct.jpg"
            alt={`${categoryDoc.title} Products Banner`}
            fill
            priority
            className="object-cover animate-zoom-in"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center animate-fade-in">
          <div className="max-w-4xl px-10 space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              <span className="block opacity-0 animate-slide-in-left">{categoryDoc.title}</span>
              <span className="block text-red-500 opacity-0 animate-slide-in-right [animation-delay:1500ms]">
                Products
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Use the CategorySection component */}
      <CategorySection categoryDoc={categoryDoc} currentCategorySlug={category} />
    </div>
  )
}
