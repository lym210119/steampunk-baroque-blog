import type { Metadata } from 'next'
import { Cinzel, Cormorant_Garamond, Special_Elite } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const cinzel = Cinzel({ 
  subsets: ['latin'], 
  variable: '--font-cinzel',
  display: 'swap',
})
const cormorant = Cormorant_Garamond({ 
  weight: ['400', '700'],
  subsets: ['latin'], 
  variable: '--font-cormorant',
  display: 'swap',
})
const specialElite = Special_Elite({ 
  weight: '400',
  subsets: ['latin'], 
  variable: '--font-special-elite',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '蒸汽朋克巴洛克博客',
  description: '齿轮与黄金的时代',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" className={`${cinzel.variable} ${cormorant.variable} ${specialElite.variable}`} suppressHydrationWarning>
      <body className="bg-metal-dark text-parchment font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
