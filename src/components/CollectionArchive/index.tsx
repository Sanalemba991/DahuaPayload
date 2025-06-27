import React from 'react'

import { Card, CardPostData } from '@/components/Card'

export type Props = {
  products: CardPostData[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { products } = props

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 bg-blue-400">
      {products?.map((result, index) => {
        if (typeof result === 'object' && result !== null) {
          return (
            <div
              className=" rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group relative border-2 border-gray-100 hover:border-gray-200 bg-red-400"
              key={index}
            >
              <Card
                className="h-full bg-blue-400"
                doc={result}
                relationTo="products"
                showCategories
              />
            </div>
          )
        }

        return null
      })}
    </div>
  )
}
