'use client'

import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="pt-[80px] bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center mb-10">
        <Image
          src="/images/about.webp" // <-- Replace with your hero image path
          alt="About Dahua Dubai"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Reduced overlay opacity and added gradient */}
        <div className="abso inselutet-0 bg-gradient-to-r from-black/20 via-black/30 to-black/20 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg mb-2" style={{ textShadow: '2px 2px 8px #000' }}>
            About Us
          </h1>
          <p className="text-white text-lg max-w-2xl mx-auto drop-shadow" style={{ textShadow: '1px 1px 6px #000' }}>
            Your trusted Dahua distributor and security solutions partner in Dubai.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Need Dahua Stuff in Dubai? <br />Check Dahua-Dubai
          </h2>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold text-black">All About Dahua-Dubai:</span> We’re your spot for Dahua tech in Dubai, part of Digital Link Tech. We set up cool, cost-effective security systems using Dahua’s cameras and NVRs. Plus, we’re officially approved by Sira to distribute Dahua gear here.
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold text-black">Dahua DVRs Are Cool:</span> Our Dahua DVRs catch all the action, store tons of data, and make watching security footage a breeze. We’ve got a bunch of Dahua products like DVRs and VRs—loads of perks for you.
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold text-black">Best Dahua Storage Solutions:</span> Being the authorized distributor, we get you top-notch Dahua storage setups. They’re high-performance, super scalable, and really easy to use.
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold text-black">What Else?</span> We’re not just about storage. We handle all kinds of standard storage gear that fits different software. Whatever your surveillance project needs, we’ve got the right stuff. Want awesome Dahua deals? Hit up Dahua-Dubai.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/aboutus.png"
            alt="Dahua Dubai"
            width={1024}
            height={880}
            className="rounded-2xl"
            priority
          />
        </div>
      </section>
    </div>
  )
}