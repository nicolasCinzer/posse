import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Posse',
  description: 'Powerlifting Program'
}

const font = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${font.className} flex flex-col h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
