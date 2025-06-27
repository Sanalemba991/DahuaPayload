'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info - Column 1 */}
          <div>
            <div className="flex items-center mb-3">
              <Image
                src="/images/dahualogo-removebg-preview.png.png"
                alt="Dahua Technology"
                width={70}
                height={22}
                className="mr-2"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              <div className="border-l border-gray-300 pl-2">
                <div className="text-sm font-bold text-gray-900">DAHUA</div>
                <div className="text-xs text-gray-600">TECHNOLOGY</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3 max-w-xs">
              Dahua-Dubai Is The largest Distributor Of All kind Of Dahua Products In The
              Surveillance Market of Dubai UAE & Middle East. Follow Us On Social Medias To Get to
              Know About Our Latest Product Line.
            </p>
            <div className="flex space-x-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links - Column 2 - SAME STYLE AS GET IN TOUCH */}
          <div>
            <h3 className="text-base font-semibold text-black mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm text-black">
              <div className="flex items-start space-x-2">
                <svg
                  className="w-4 h-4 text-red-600 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                <Link href="/technologies" className="hover:text-blue-600">
                  Technologies
                </Link>
              </div>
              <div className="flex items-start space-x-2">
                <svg
                  className="w-4 h-4 text-red-600 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact Us
                </Link>
              </div>
              <div className="flex items-start space-x-2">
                <svg
                  className="w-4 h-4 text-red-600 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                <Link href="/sira" className="hover:text-blue-600">
                  Sira
                </Link>
              </div>
            </div>
          </div>

          {/* Get In Touch - Column 3 */}
          <div>
            <h3 className="text-base font-semibold text-black mb-4">Get In Touch</h3>
            <div className="space-y-2 text-sm text-black">
              <div className="flex items-start space-x-2">
                <svg
                  className="w-4 h-4 text-red-600 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:sales@dahua-dubai.com" className="hover:text-blue-600">
                  sales@dahua-dubai.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <svg
                  className="w-4 h-4 text-red-600 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+971552929644" className="hover:text-blue-600">
                  +971 55 2929644
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <svg
                  className="w-4 h-4 text-red-600 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+971509664956" className="hover:text-blue-600">
                  +971 50 9664956
                </a>
              </div>
            </div>
          </div>

          {/* Our Location - Column 4 - ORIGINAL MAP */}
          <div>
            <h3 className="text-base font-semibold text-black mb-4">Our Location</h3>
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
              Visit us at our Dubai office for all your surveillance and security needs.
            </p>
            <div className="h-32 bg-gray-100 rounded-lg overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.8990405983854!2d55.27181241501168!3d25.199314483891485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4359cb942e8f%3A0xeecf2b2e4e5b1ad3!2sAl%20Barsha%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1718880112345!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dubai Office Location"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">Copyright © 2025 Dahua Technology. All rights reserved.</p>
          <p className="text-xs mt-1">
            <span className="text-white py-2 font-medium">Power By: Lovosis Technology</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
