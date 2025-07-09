'use client'
import { motion } from 'framer-motion'

export default function Below() {
  return (
    <div className="bg-gray-100 text-black px-8 py-6">
      <ol className="list-decimal ml-6 space-y-2 text-sm">
        <li>
          The figure shown in the bytes shipped counter is an approximation based on Seagate&apos;s
          quarterly average runrate of exabytes shipped.
        </li>
        <li>
          Exos CORVAULT receives an overall customer rating of 5 out of 5 on Gartner Peer Insights
          as of May 2023. Distribution based on 5 ratings.
        </li>
      </ol>
      <p className="mt-3 text-xs italic text-gray-700">
        Gartner and Peer Insights™ are trademarks of Gartner, Inc. and/or its affiliates. All
        rights reserved. Gartner Peer Insights content consists of the opinions of individual end
        users based on their own experiences, and should not be construed as statements of fact, nor
        do they represent the views of Gartner or its affiliates. Gartner does not endorse any
        vendor, product or service depicted in this content nor makes any warranties, expressed or
        implied, with respect to this content, about its accuracy or completeness, including any
        warranties of merchantability or fitness for a particular purpose.
      </p>
    </div>
  )
}
