'use client'

import Image from 'next/image'
import Link from 'next/link'

// const tabs = [
//   { label: 'IPC', key: 'ipc' },
//   { label: 'Analog Camera', key: 'analog' },
//   { label: 'NVR', key: 'nvr' },
//   { label: 'XVR', key: 'xvr' },
//   { label: 'NOC & Documents', key: 'noc' },
// ]

// Example data for brevity, replace with your full data as needed
// const ipcProducts = [
//   { cert: 'SIRA/2023/7/04722', name: 'IPC-HDW1431T1-S4' },
//   { cert: 'SIRA/2023/7/04721', name: 'IPC-HDW1431S-S4' },
//   // ...add all your IPC products here
// ]
// const analogProducts = [
//   { cert: 'SIRA/2023/7/03894', name: 'HAC-D3A21-VF' },
//   // ...add all your Analog products here
// ]
// const nvrProducts = [
//   {
//     cert: 'SIRA/2023/1/05544',
//     name: 'DHI-NVR608-64-4KS2',
//     firmware: 'V4.002.10FU003.0.R',
//     note: '2023 New',
//   },
//   // ...add all your NVR products here
// ]
// const xvrProducts = [
//   {
//     cert: 'SIRA/2022/1/05014',
//     name: 'DH-XVR5116HS-I3',
//     firmware: 'V4.001.19SX001.0',
//     note: '2022 New',
//   },
//   // ...add all your XVR products here
// ]
// const nocDocs = [
//   {
//     name: 'AUTHORIZATION LETTER_NOC (Please fill in the information and send it to Wanxia.Liu@dahuatech.com)',
//     link: '/downloads/AUTHORIZATION_LETTER_NOC.docx',
//     label: 'Download File',
//   },
//   {
//     name: 'UPS Integrates NVR for Safe Shutdown',
//     link: '/downloads/UPS_Integrates_NVR_for_Safe_Shutdown.pdf',
//     label: 'Download File',
//   },
// ]

// const products = {
//   ipc: ipcProducts,
//   analog: analogProducts,
//   nvr: nvrProducts,
//   xvr: xvrProducts,
//   noc: nocDocs,
// }

export default function SiraPage() {
  // const [activeTab, setActiveTab] = useState('ipc')

  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/siraa.jpg"
          alt="SIRA Hero"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </section>

      {/* Add your uploaded section here */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
          What is SIRA and SIRA certification?
        </h2>
        <p className="text-gray-700 mb-6">
          SIRA, the Security Industry Regulatory Agency, is a Dubai-based authority established in
          2016 by a decree from HH Sheikh Mohammed Bin Rashid Al Maktoum. It oversees
          security-related matters and licenses for guarding services, security system sales,
          installation, and consulting. Only SIRA-approved companies can engage in these activities.
          SIRA ensures safety and security by setting guidelines for best practices in security
          systems, services, and personnel. There are approximately 400 SIRA-certified CCTV
          companies and fewer than 2,000 certified providers for all security activities in Dubai.
          SIRA’s guidelines cover CCTV installation in different building types, requiring yearly
          audits, maintenance, certifications, and necessary upgrades.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-blue-800">
          Benefits of Choosing a SIRA-Approved Distributor
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border p-6 rounded-lg bg-white">
            <div className="text-4xl mb-2">⚛️</div>
            <h4 className="font-bold text-xl mb-2 text-blue-900">Enhanced Security</h4>
            <p className="text-gray-700">
              Certified companies ensure flawless safety systems, providing comprehensive protection
              against unauthorized access and intrusion.
            </p>
          </div>
          <div className="border p-6 rounded-lg bg-white">
            <div className="text-4xl mb-2">🛠️</div>
            <h4 className="font-bold text-xl mb-2 text-blue-900">Regular Maintenance</h4>
            <p className="text-gray-700">
              With a SIRA-approved provider, prioritizing regular maintenance throughout the year
              ensures the uninterrupted functionality of your CCTV system.
            </p>
          </div>
          <div className="border p-6 rounded-lg bg-white">
            <div className="text-4xl mb-2">⬆️</div>
            <h4 className="font-bold text-xl mb-2 text-blue-900">Up-to-Date Solutions</h4>
            <p className="text-gray-700">
              SIRA-approved services keep your security system current. Utilizing the latest models
              and equipment, they deliver an efficient surveillance solution for your premises.
            </p>
          </div>
          <div className="border p-6 rounded-lg bg-white">
            <div className="text-4xl mb-2">📜</div>
            <h4 className="font-bold text-xl mb-2 text-blue-900">Compliance Assurance</h4>
            <p className="text-gray-700">
              Choosing a SIRA-certified distributor guarantees that your security systems comply
              with all local regulations and standards, reducing legal and financial risks.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-700 to-blue-400 rounded-2xl p-10 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get Free Consultation</h2>
          <p className="text-white mb-6">
            Need help with SIRA compliance or security solutions? Our experts are ready to assist
            you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow transition hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-400"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
