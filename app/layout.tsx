import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AeroSun Energy | Hybrid Solar Wind Energy Solutions India',
  description:
    'AeroSun Energy provides hybrid solar wind energy systems for homes, roads, parks, and commercial spaces across India. 24/7 clean power generation with smart IoT monitoring.',
  keywords: [
    'hybrid solar wind energy',
    'renewable energy solutions India',
    'solar wind hybrid system for homes',
    'green energy infrastructure',
    'smart energy systems',
    'AeroSun Energy',
    'wind turbine installation India',
    'solar panel installation India',
    'clean energy India',
    'sustainable energy infrastructure',
  ],
  metadataBase: new URL('https://aerosunenergy.in'),
  openGraph: {
    title: 'AeroSun Energy | Hybrid Solar Wind Energy Solutions India',
    description:
      'Hybrid solar wind energy systems that power homes, highways, parks, and commercial spaces across India — day and night.',
    url: 'https://aerosunenergy.in',
    siteName: 'AeroSun Energy',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}
