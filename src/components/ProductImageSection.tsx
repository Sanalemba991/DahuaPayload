'use client'
import { useState } from 'react'
import ZoomImage from '@/components/ZoomImage'
import FullScreenImageModal from '@/components/FullScreenImageModal'

type ProductImageSectionProps = {
  selectedImage: string
  productTitle: string
}

export default function ProductImageSection({
  selectedImage,
  productTitle,
}: ProductImageSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <div className="p-4 sm:p-6 bg-gray-50">
        <div className="relative h-72 sm:h-[400px] rounded-xl overflow-hidden border border-gray-100 shadow-lg bg-white group flex items-center justify-center">
          <ZoomImage
            src={selectedImage}
            alt={productTitle}
            width={500}
            height={384}
            onClick={openModal}
          />
          {/* Slider Navigation Arrows - visible on both mobile and desktop */}
        </div>
        <div className="grid grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6"></div>
      </div>

      <FullScreenImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        src={selectedImage}
        alt={productTitle}
      />
    </>
  )
}
