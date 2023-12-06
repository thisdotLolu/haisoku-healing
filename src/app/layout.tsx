import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Quicksand} from 'next/font/google'
import Footer from '@/components/footer'


const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Remedium Health | Home',
  description: 'Healing service in Germany',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Navbar/>
        {children}
        {/* <Footer/> */}
        <Footer/>
        </body>
    </html>
  )
}
