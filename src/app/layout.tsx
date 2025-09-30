import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Pleasure Real Estate - Premium Real Estate Services',
  description: 'Discover luxury properties and exceptional real estate services with The Pleasure Real Estate. Your trusted partner in finding the perfect home.',
  keywords: 'real estate, luxury properties, home buying, property management, real estate agent',
  authors: [{ name: 'The Pleasure Real Estate' }],
  openGraph: {
    title: 'The Pleasure Real Estate - Premium Real Estate Services',
    description: 'Discover luxury properties and exceptional real estate services with The Pleasure Real Estate.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}