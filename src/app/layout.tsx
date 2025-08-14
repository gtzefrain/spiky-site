import '../styles/globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import SpikyHeader from './components/header'
import Footer from './components/footer'
import AnimatePage from './components/animatePage'

export const metadata: Metadata = {
  title: 'Spiky Site',
  description: 'A minimalist black-and-white design with spikes!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SpikyHeader />
        <AnimatePage>{children}</AnimatePage>
        <Footer />

      </body>
    </html>
  )
}