'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface HeaderProps {
  logo: {
    url: string
    alt?: string
  }
  email?: string
  telephone?: string
}

interface ReloadLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

const ReloadLink = ({ href, children, ...props }: ReloadLinkProps) => {
  return (
    <a
      href={href}
      onClick={() => {
        window.location.href = href
      }}
      {...props}
    >
      {children}
    </a>
  )
}

const HeaderClient = ({
  logo,
  email = 'sales@example.com',
  telephone = '+1234567890',
}: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileSubMenu, setMobileSubMenu] = useState<null | string>(null)
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isPathActive = (currentPath: string, targetPath: string) => {
    if (targetPath === '/') {
      return currentPath === targetPath
    }
    return currentPath.startsWith(targetPath)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    {
      href: '/technologies',
      label: 'Technologies',
      submenu: [
        { href: '/technologies/wizsense', label: 'WizSense', desc: 'AI-powered video analytics' },
        { href: '/technologies/wizmind', label: 'WizMind', desc: 'Intelligent monitoring system' },
        {
          href: '/technologies/full-color',
          label: 'Full-color',
          desc: '24/7 colorful surveillance',
        },
        {
          href: '/technologies/auto-tracking',
          label: 'Auto Tracking 3.0',
          desc: 'Smart object tracking',
        },
        {
          href: '/technologies/hdcvi-ten',
          label: 'HDCVI TEN Technology',
          desc: 'High-definition transmission',
        },
        {
          href: '/technologies/predictive-focus',
          label: 'Predictive Focus Algorithm',
          desc: 'Advanced focus algorithm',
        },
      ],
    },
    {
      href: '/solutions',
      label: 'Solutions',
      submenu: [
        { href: '/solutions/building', label: 'Building', desc: 'Commercial security solutions' },
        { href: '/solutions/banking', label: 'Banking', desc: 'Financial institution security' },
        { href: '/solutions/retail', label: 'Retail', desc: 'Store monitoring & analytics' },
        {
          href: '/solutions/transportation',
          label: 'Transportation',
          desc: 'Traffic & transit security',
        },
        { href: '/solutions/government', label: 'Government', desc: 'Public safety solutions' },
      ],
    },
    { href: '/sira', label: 'Sira' },
    { href: '/about-us', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white text-black shadow-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Mobile/tablet menu button and logo */}
          <div className="flex w-full lg:hidden items-center justify-between">
            <Link href="/" className="block">
              <Image
                src={logo?.url || '/images/dahualogo-removebg-preview.png.png'}
                alt={logo?.alt || 'Logo'}
                width={100}
                height={30}
                className="h-10 object-contain"
              />
            </Link>

            <button
              className="flex items-center z-[100000] relative p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                <div
                  className={`w-5 h-0.5 bg-red-600 rounded-full transition-all duration-300 ease-in-out absolute ${
                    mobileOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                  }`}
                />
                <div
                  className={`w-5 h-0.5 bg-red-600 rounded-full transition-all duration-300 ease-in-out absolute ${
                    mobileOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <div
                  className={`w-5 h-0.5 bg-red-600 rounded-full transition-all duration-300 ease-in-out absolute ${
                    mobileOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Desktop logo */}
          <div className="hidden lg:flex items-center justify-start" style={{ width: '150px' }}>
            <Link href="/" className="block">
              <Image
                src={logo?.url || '/images/dahualogo-removebg-preview.png.png'}
                alt={logo?.alt || 'Logo'}
                width={140}
                height={40}
                className="object-contain transition-all duration-300 hover:scale-105"
                style={{
                  filter: 'brightness(1.2) contrast(1.1)',
                }}
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center gap-8"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            {navLinks.map((item) => (
              <div key={item.href} className="relative">
                {item.submenu ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-3 py-2 group transition-colors duration-300 ${
                        isPathActive(pathname, item.href)
                          ? 'text-red-600'
                          : 'text-gray-800 hover:text-red-600'
                      }`}
                    >
                      <span className="relative">
                        {item.label}
                        <span
                          className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                            isPathActive(pathname, item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                        ></span>
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.href ? 'rotate-180' : 'rotate-0'
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>

                    {activeDropdown === item.href && (
                      <div
                        className="fixed left-0 right-0 w-full bg-white shadow-lg py-1 z-10 mt-0 animate-fadeIn"
                        style={{
                          top: '64px',
                          borderTop: '1px solid #e5e7eb',
                        }}
                        onMouseEnter={() => setActiveDropdown(item.href)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="container mx-auto px-4 py-6">
                          <div className="flex">
                            <div className="flex-1 pr-8">
                              <h3 className="text-lg font-semibold border-b-2 border-red-600 pb-2 inline-block mb-6">
                                {item.label}
                              </h3>
                              <div className="grid grid-cols-2 gap-4">
                                {item.submenu.map((subItem) => (
                                  <ReloadLink
                                    key={subItem.href}
                                    href={subItem.href}
                                    className={`block p-4 rounded-lg border transition-all duration-300 ${
                                      isPathActive(pathname, subItem.href)
                                        ? 'border-red-600 bg-red-50 text-red-600'
                                        : 'border-gray-100 bg-gray-50 hover:border-red-600 text-gray-800'
                                    }`}
                                  >
                                    <div className="font-medium">{subItem.label}</div>
                                    <div className="text-sm text-gray-500 mt-1">{subItem.desc}</div>
                                  </ReloadLink>
                                ))}
                              </div>
                            </div>
                            <div className="w-80 pl-8 border-l border-gray-200 flex flex-col items-center justify-center">
                              <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                                <Image
                                  src={
                                    item.href === '/technologies'
                                      ? '/images/wiz.png'
                                      : '/images/aboutus.png'
                                  }
                                  alt={item.label}
                                  width={280}
                                  height={200}
                                  className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                              </div>
                              <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md">
                                <h4 className="font-semibold mb-2">
                                  {item.href === '/technologies'
                                    ? 'Advanced Technology Solutions'
                                    : 'Industry Solutions'}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {item.href === '/technologies'
                                    ? 'Discover cutting-edge surveillance technologies'
                                    : 'Comprehensive security solutions'}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 group transition-colors duration-300 ${
                      isPathActive(pathname, item.href)
                        ? 'text-red-600'
                        : 'text-gray-800 hover:text-red-600'
                    }`}
                  >
                    <span className="relative">
                      {item.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                          isPathActive(pathname, item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop contact icons */}
          <div
            className="hidden lg:flex items-center gap-4"
            style={{ minWidth: '120px', justifyContent: 'flex-end' }}
          >
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-center text-black hover:text-red-600 transition-all duration-300"
              style={{
                backgroundColor: '#f8f9fa',
                padding: '8px',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
              }}
              title={email}
            >
              <svg
                className="w-6 h-6 transition-transform duration-300 hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>

            <a
              href={`tel:${telephone}`}
              className="flex items-center justify-center text-black hover:text-red-600 transition-all duration-300"
              style={{
                backgroundColor: '#f8f9fa',
                padding: '8px',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
              }}
              title={telephone}
            >
              <svg
                className="w-6 h-6 transition-transform duration-300 hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          mobileOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{
          top: '64px',
          height: 'calc(100vh - 64px)',
          backgroundColor: 'transparent',
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
        onClick={(e) => {
          if (e.target === mobileMenuRef.current) {
            setMobileOpen(false)
            setMobileSubMenu(null)
          }
        }}
      >
        <div
          className={`bg-white shadow-xl overflow-y-auto transition-all duration-300 ease-in-out ${
            mobileOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          style={{
            height: 'auto',
            maxHeight: 'calc(100vh - 64px)',
          }}
        >
          {!mobileSubMenu ? (
            <div className="flex flex-col">
              <nav className="px-4">
                {navLinks.map((item) => (
                  <div key={item.href} className="border-b border-gray-100 last:border-b-0">
                    {item.submenu ? (
                      <button
                        className={`w-full flex items-center justify-between py-4 px-2 text-base font-medium transition-colors duration-300 ${
                          isPathActive(pathname, item.href)
                            ? 'text-red-600 bg-red-50'
                            : 'text-gray-800 hover:text-red-600 hover:bg-red-50'
                        }`}
                        onClick={() => setMobileSubMenu(item.href)}
                      >
                        <span
                          className={`${isPathActive(pathname, item.href) ? 'font-semibold' : ''}`}
                        >
                          {item.label}
                        </span>
                        <svg
                          className={`w-5 h-5 transition-colors duration-300 ${
                            isPathActive(pathname, item.href) ? 'text-red-600' : 'text-gray-500'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => {
                          setMobileOpen(false)
                          setMobileSubMenu(null)
                        }}
                        className={`flex items-center py-4 px-2 text-base font-medium transition-colors duration-300 ${
                          isPathActive(pathname, item.href)
                            ? 'text-red-600 bg-red-50 font-semibold'
                            : 'text-gray-800 hover:text-red-600 hover:bg-red-50'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isPathActive(pathname, item.href) && (
                          <div className="ml-auto w-1 h-6 bg-red-600 rounded-full"></div>
                        )}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="p-4 border-t border-gray-200 bg-gray-50 mt-auto">
                <div className="space-y-3">
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center text-sm text-gray-600 hover:text-red-600 transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-gray-500 transition-transform duration-300 hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {email}
                  </a>
                  <a
                    href={`tel:${telephone}`}
                    className="flex items-center text-sm text-gray-600 hover:text-red-600 transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-gray-500 transition-transform duration-300 hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {telephone}
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col">
              <div className="p-4 border-b border-gray-200 flex items-center bg-red-50">
                <button
                  className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-300"
                  onClick={() => setMobileSubMenu(null)}
                >
                  <svg
                    className="w-5 h-5 mr-2 transition-transform duration-300 hover:-translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span className="font-medium">Back</span>
                </button>
                <span className="ml-2 font-semibold text-red-600">
                  {navLinks.find((item) => item.href === mobileSubMenu)?.label}
                </span>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="p-4">
                  <div className="space-y-2">
                    {navLinks
                      .find((item) => item.href === mobileSubMenu)
                      ?.submenu?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => {
                            setMobileOpen(false)
                            setMobileSubMenu(null)
                          }}
                          className={`block p-4 rounded-lg transition-all duration-300 border ${
                            isPathActive(pathname, subItem.href)
                              ? 'bg-red-50 text-red-600 border-red-200 shadow-sm'
                              : 'hover:bg-red-50 text-gray-900 hover:text-red-600 border-gray-100 hover:border-red-200'
                          }`}
                        >
                          <div
                            className={`font-medium ${
                              isPathActive(pathname, subItem.href) ? 'font-semibold' : ''
                            }`}
                          >
                            {subItem.label}
                            {isPathActive(pathname, subItem.href) && (
                              <span className="ml-2 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
                            )}
                          </div>
                          <div
                            className={`text-sm mt-1 ${
                              isPathActive(pathname, subItem.href)
                                ? 'text-red-500'
                                : 'text-gray-500'
                            }`}
                          >
                            {subItem.desc}
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  )
}

export default HeaderClient
