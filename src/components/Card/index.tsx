'use client'

import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'
import type { Product } from '@/payload-types'
import { Media } from '../Media'

export type CardPostData = Pick<Product, 'title' | 'heroImage' | 'meta' | 'categories'> & {
  slug?: string
}

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'products'
  showCategories?: boolean
  title?: string
  heroImage?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { doc, relationTo, showCategories, title: titleFromProps, heroImage: prodImage } = props

  const { slug, title, heroImage, categories, meta } = doc || {}
  const { description, image: metaImage } = meta || {}
  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  console.log(hasCategories)
  const titleToUse = titleFromProps || title
  const productImage = prodImage || heroImage

  const sanitizedDescription = description?.replace(/\s/g, ' ')
  const href = `/${relationTo}/${slug}`

  return (
    <article
      className="border border-border rounded-lg overflow-hidden bg-card hover:cursor-pointer bg-black"
      ref={card.ref}
    >
      <div className="relative p-12 flex justify-center items-center object-contain sm:h-56 overflow-hidden bg-gray-400">
        {!metaImage && !productImage && <div className="bg-red-400">No image</div>}
        {metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} />}
        {!metaImage && productImage && typeof productImage !== 'string' && (
          <Media resource={productImage} />
        )}
      </div>
      <div className="p-4 bg-blue-400">
        {showCategories && hasCategories && (
          <div className="uppercase text-sm mb-4">
            {showCategories && hasCategories && (
              <div>
                {categories?.map((category, index) => {
                  if (typeof category === 'object') {
                    const { title: titleFromCategory } = category

                    const categoryTitle = titleFromCategory || 'Untitled category'

                    const isLast = index === categories.length - 1

                    return (
                      <Fragment key={index}>
                        {categoryTitle}
                        {!isLast && <Fragment>, &nbsp;</Fragment>}
                      </Fragment>
                    )
                  }

                  return null
                })}
              </div>
            )}
          </div>
        )}
        {titleToUse && (
          <div className="prose">
            <h3>
              <Link className="not-prose" href={href} ref={link.ref}>
                {titleToUse}
              </Link>
            </h3>
          </div>
        )}
        {description && <div className="mt-2">{description && <p>{sanitizedDescription}</p>}</div>}
      </div>
    </article>
  )
}
