import './globals.css'
import type { Metadata } from 'next'
import { Prosto_One } from 'next/font/google'
import  Navbar  from '@/components/Navbar/Navbar'
import { Header } from '@/components/Header/Header'

const prosto = Prosto_One({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: "Yorgi'Soft",
  description: "Yorgi'Soft",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={prosto.className}>
        <Navbar />
        <Header />
        {children}  
      </body>
    </html>
  )
}
