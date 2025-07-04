import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import { Product } from '@/payload-types'
import { RichText } from '@/components/RichText'

export default async function ProductDetails({ product }: { product: Product }) {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })
  const productS = (
    await payload.find({
      collection: 'products',
      draft,
      limit: 1,
      overrideAccess: false,
      pagination: false,
    })
  ).docs[0]
  return (
    <div
      className="product-details p-6 bg-white border-l border-gray-100"
      data-scroll="fade-left"
      data-scroll-delay="800"
    >
      <h2 className="text-2xl font-normal text-gray-900 mb-3">{productS.title}</h2>
      <div className="description mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-red-500">
        <p className="text-gray-700 leading-relaxed text-sm">{productS.description}</p>
      </div>
      <div className="features-section mb-6 rounded-lg border-l-4 border-red-500 pl-6 ">
        <h3 className="text-lg font-semibold m-4 flex items-center text-gray-900">
          <i className="fas fa-star text-amber-500 mr-2" /> Key Features
        </h3>
        <ul className="space-y-3 text-black">
          <RichText data={product.content} />

          <i className="fas fa-check-circle text-green-500 text-base mt-0.5 flex-shrink-0" />
        </ul>
      </div>
      <div className="action-section space-y-3 mb-6" data-scroll="fade-up" data-scroll-delay="200">
        <a
          href="/contact"
          className="contact-us-btn w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] shadow-sm hover:shadow-md inline-flex items-center justify-center"
        >
          <i className="fas fa-phone mr-2" /> Contact Us for Pricing
        </a>
      </div>
    </div>
  )
}
