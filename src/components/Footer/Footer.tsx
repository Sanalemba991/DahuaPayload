'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info - Column 1 */}
          <div className="animate-slideUp">
            <div className="flex items-center mb-3">
              <div className="border-l border-gray-400 pl-2">
                <div className="text-sm font-semibold text-white">DAHUA</div>
                <div className="text-xs text-gray-300">TECHNOLOGY</div>
              </div>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed mb-3 max-w-xs">
              Dahua-Dubai Is The largest Distributor Of All kind Of Dahua Products In The
              Surveillance Market of Dubai UAE & Middle East. Follow Us On Social Medias To Get to
              Know About Our Latest Product Line.
            </p>
          </div>

          {/* Quick Links - Column 2 */}
          <div className="animate-slideUp animation-delay-200">
            <h3 className="text-sm font-semibold text-white mb-3">Quick Links</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-red-500 font-bold text-xs">▲</span>
                <Link
                  href="/technologies"
                  className="text-gray-300 hover:text-white transition-all duration-200 text-xs hover:translate-x-1"
                >
                  Technologies
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-500 font-bold text-xs">▲</span>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-all duration-200 text-xs hover:translate-x-1"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-500 font-bold text-xs">▲</span>
                <Link
                  href="/sira"
                  className="text-gray-300 hover:text-white transition-all duration-200 text-xs hover:translate-x-1"
                >
                  Sira
                </Link>
              </div>
            </div>
          </div>

          {/* Get In Touch - Column 3 */}
          <div className="animate-slideUp animation-delay-400">
            <h3 className="text-sm font-semibold text-white mb-3">Get In Touch</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-red-500 font-bold text-xs">✉</span>
                <Link
                  href="mailto:sales@dahua-dubai.com"
                  className="text-gray-300 hover:text-white transition-all duration-200 text-xs hover:translate-x-1"
                >
                  sales@dahua-dubai.com
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-500 font-bold text-xs">📞</span>
                <Link
                  href="tel:+971552929644"
                  className="text-gray-300 hover:text-white transition-all duration-200 text-xs hover:translate-x-1"
                >
                  +971 55 2929644
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-500 font-bold text-xs">📞</span>
                <Link
                  href="tel:+971509664956"
                  className="text-gray-300 hover:text-white transition-all duration-200 text-xs hover:translate-x-1"
                >
                  +971 50 9664956
                </Link>
              </div>
            </div>
          </div>

          {/* Our Location - Column 4 */}
          <div className="animate-slideUp animation-delay-600">
            <h3 className="text-sm font-semibold text-white mb-3">Our Location</h3>
            <p className="text-gray-300 text-xs mb-3 leading-relaxed">
              Visit us at our Dubai office for all your surveillance and security needs.
            </p>
            <div className="h-24 bg-gray-700 rounded-lg overflow-hidden shadow-lg">
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

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-3 mt-6 animate-slideUp animation-delay-800">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all transform hover:scale-110 hover:-translate-y-1 duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all transform hover:scale-110 hover:-translate-y-1 duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-all transform hover:scale-110 hover:-translate-y-1 duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
          <Link
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-all transform hover:scale-110 hover:-translate-y-1 duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom section - Copyright and Powered By centered vertically */}
      <div className="bg-gray-900 border-t border-gray-700 animate-fadeIn">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col items-center justify-center text-center space-y-1">
            {/* Copyright - First line */}
            <p className="text-gray-400 text-xs">© 2025 Dahua Technology. All rights reserved.</p>
            {/* Powered By - Second line */}
            <span className="text-gray-400 text-xs">
              Powered By:{' '}
              <a
                href="https://lovosis.in/"
                className="text-white font-bold transition-transform duration-200 hover:translate-x-1 cursor-pointer"
              >
                Lovosis Technology
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  )
}
