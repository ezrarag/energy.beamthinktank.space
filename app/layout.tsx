import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BEAM Energy - Renewable Energy Solutions',
  description: 'Leading the transition to sustainable energy with renewable projects, EV charging, and community-driven initiatives.',
  keywords: 'renewable energy, solar power, wind energy, EV charging, sustainable energy, green energy',
  authors: [{ name: 'BEAM Energy' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-beam-light to-green-50">
          {children}
        </div>
      </body>
    </html>
  )
}
