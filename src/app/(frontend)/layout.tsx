import React from 'react'
import './styles.css'
import { Header } from '@/Header/Component'
import Footer from '@/components/Footer/Footer'

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="32x32" />
       
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
