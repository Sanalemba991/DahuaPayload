'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

type ZoomImageProps = {
  src: string
  alt: string
  width: number
  height: number
}

export default function ZoomImage({ src, alt, width, height }: ZoomImageProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="w-full h-full object-contain p-4 sm:p-4"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-contain pointer-events-none"
      />
    </motion.div>
  )
}
