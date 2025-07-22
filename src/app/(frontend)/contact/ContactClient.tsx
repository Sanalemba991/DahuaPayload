'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Star,
  Sparkles,
  MessageCircle,
  Clock,
} from 'lucide-react'

interface ContactClientProps {
  telephone: string
  email: string
  schemaMarkup: string
}

export const ContactClient: React.FC<ContactClientProps> = ({ telephone, email, schemaMarkup }) => {
  // Form state
  const [isVisible, setIsVisible] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    setHeroVisible(true)
  }, [])

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })

  // Banner animations
  const bannerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  }

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '6rem',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.4,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  }

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  // Form validation state
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  // Handle input blur for validation
  const handleBlur = (name: string) => {
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }))
    validateField(name, formData[name as keyof typeof formData])
  }

  // Validate individual field
  const validateField = (name: string, value: string) => {
    let error = ''

    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) {
          error = `${name === 'firstName' ? 'First' : 'Last'} name is required`
        }
        break
      case 'email':
        if (!value) {
          error = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Please enter a valid email address'
        }
        break
      case 'subject':
        if (!value) {
          error = 'Please select a subject'
        }
        break
      case 'message':
        if (!value.trim()) {
          error = 'Message is required'
        }
        break
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }))

    return !error
  }

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Validate all fields
    let isValid = true
    const requiredFields = ['firstName', 'lastName', 'email', 'subject', 'message']

    requiredFields.forEach((field) => {
      const fieldIsValid = validateField(field, formData[field as keyof typeof formData])
      if (!fieldIsValid) isValid = false
    })

    if (!isValid) {
      setIsSubmitting(false)
      return
    }

    try {
      // Add your API call here
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulated API call

      setSubmitStatus('success')
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      })
      setTouched({})
      setErrors({})
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Helper to check if field has error
  const hasError = (fieldName: string): boolean => {
    return touched[fieldName] && Boolean(errors[fieldName])
  }

  // Helper to get error message
  const getErrorMessage = (fieldName: string): string => {
    return touched[fieldName] ? errors[fieldName] || '' : ''
  }

  return (
    <>
      {schemaMarkup && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaMarkup }} />
      )}

      {/* Hero Banner Section */}
      <section className="relative w-full h-screen flex items-center justify-start overflow-hidden">
        <style jsx global>{`
          html,
          body {
            overflow-x: hidden;
            max-width: 100%;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={bannerVariants}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/red.jpg"
            alt="Contact Hero"
            fill
            className="object-cover w-full h-full"
            priority
            quality={100}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/30 to-black/20 flex flex-col items-center justify-center text-center"
        >
          <motion.h1
            custom={0}
            variants={textVariants}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg mb-4"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
          >
            Contact Us
          </motion.h1>

          <motion.div variants={lineVariants} className="h-1 bg-red-600 mx-auto my-4" />

          <motion.p
            custom={1}
            variants={textVariants}
            className="text-white text-lg md:text-xl max-w-2xl mx-auto px-4"
            style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}
          >
            Ready to discuss your project? Fill out the form below and we will respond within 24
            hours with a personalized consultation.
          </motion.p>

          <motion.div custom={2} variants={textVariants} className="mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-7 py-3 border-2 border-white text-white bg-transparent hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 font-semibold group text-base"
              onClick={() => {
                const formSection = document.getElementById('contact-form')
                formSection?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get Started
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white" id="contact-form">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-3 py-1.5 bg-red-100 text-slate-800 rounded-full text-sm font-medium mb-4"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Get in Touch
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
              >
                Let&apos;s Talk
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl text-slate-600 mb-6"
              >
                Drop us a message. We&apos;d love to help!
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-slate-200"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-slate-900 mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('firstName')}
                      className={`w-full px-3 py-2.5 border ${
                        hasError('firstName')
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-300 focus:ring-teal-500'
                      } rounded-lg focus:ring-2 transition-all duration-300 bg-white text-slate-900`}
                      placeholder="Enter your first name"
                      required
                    />
                    {hasError('firstName') && (
                      <p className="mt-1 text-sm text-red-600">{getErrorMessage('firstName')}</p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-slate-900 mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className={`w-full px-3 py-2.5 border ${
                        hasError('lastName')
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-300 focus:ring-teal-500'
                      } rounded-lg focus:ring-2 transition-all duration-300 bg-white text-slate-900`}
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('lastName')}
                    />
                    {getErrorMessage('lastName') && (
                      <p className="mt-2 text-sm text-red-600">{getErrorMessage('lastName')}</p>
                    )}
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-900 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={`w-full px-3 py-2.5 border ${
                        hasError('email')
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-300 focus:ring-teal-500'
                      } rounded-lg focus:ring-2 transition-all duration-300 bg-white text-slate-900`}
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('email')}
                    />
                    {getErrorMessage('email') && (
                      <p className="mt-2 text-sm text-red-600">{getErrorMessage('email')}</p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-900 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 bg-white text-slate-900 hover:border-teal-300"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-slate-900 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 bg-white text-slate-900 hover:border-teal-300"
                      placeholder="Your Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-900 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className={`w-full px-3 py-2.5 border ${
                        hasError('subject')
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-300 focus:ring-teal-500'
                      } rounded-lg focus:ring-2 transition-all duration-300 bg-white text-slate-900`}
                      value={formData.subject}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('subject')}
                    >
                      <option value="">Select inquiry type</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="general">General Question</option>
                    </select>
                    {getErrorMessage('subject') && (
                      <p className="mt-2 text-sm text-red-600">{getErrorMessage('subject')}</p>
                    )}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-900 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={`w-full px-3 py-2.5 border ${
                      hasError('message')
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-300 focus:ring-teal-500'
                    } rounded-lg focus:ring-2 transition-all duration-300 bg-white text-slate-900 resize-y`}
                    placeholder="Please describe your project requirements, questions, or how we can help you achieve your goals..."
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('message')}
                  ></textarea>
                  {getErrorMessage('message') && (
                    <p className="mt-2 text-sm text-red-600">{getErrorMessage('message')}</p>
                  )}
                </motion.div>

                <div className="flex flex-col items-center justify-center gap-6 pt-2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center text-sm text-slate-600"
                  >
                    <div className="flex items-center space-x-2 bg-green-50 px-3 py-1.5 rounded-full border border-red-200">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="font-medium">We will respond within 24 hours</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center gap-3 px-7 py-3 border-2 ${
                        isSubmitting
                          ? 'bg-gray-400 border-gray-400 cursor-not-allowed text-white'
                          : 'border-black text-black bg-transparent hover:bg-red-600 hover:border-red-600 hover:text-white'
                      } transition-all duration-300 font-semibold group text-base`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.div>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-3 py-1.5 bg-red-100 text-black rounded-full text-sm font-medium mb-4"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Multiple Ways to Connect
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
            >
              Talk to Our Team
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-slate-600 mb-6"
            >
              Choose your preferred method to get in touch with us
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Email Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center border border-slate-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Email Us</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Have questions about our services? Our team is ready to provide detailed information
                and guidance.
              </p>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium text-sm rounded-lg transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center border border-slate-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Call Us</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Ready to get started? Connect with our team for personalized solutions tailored to
                your needs.
              </p>
              <a
                href={`tel:${telephone}`}
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-medium text-sm rounded-lg transition-all duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </motion.div>

            {/* Support Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center border border-slate-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Live Support</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Need immediate assistance? Our expert support team is available to help resolve any
                issues.
              </p>
              <a
                href="https://wa.me/+971528796664?text=Hello%20PrimoTech!%20I%20would%20like%20to%20get%20in%20touch."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium text-sm rounded-lg transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-[450px] w-full relative"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.7732175705256!2d55.290111!3d25.262528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE1JzQ1LjEiTiA1NcKwMTcnMjQuNCJF!5e0!3m2!1sen!2sae!4v1625641411784!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location Map"
        />
      </motion.div>
    </>
  )
}
