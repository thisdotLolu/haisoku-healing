import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Quicksand} from 'next/font/google'
import Footer from '@/components/footer'
import { AuthContextProvider } from '@/contexts/AuthContext'
import { Toaster } from 'react-hot-toast'


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

        <AuthContextProvider>
        <Toaster
      toastOptions={{
        className: '',
        style: {
          marginTop:'100px',
          border: '1px solid #b5d9c7',
          backgroundColor:'#b5d9c7',
          padding: '16px',
          color: 'white',
          zIndex:'10000000000000000000000000000000000000000000000000000000000000'
        },
      }}
      />
        <Navbar/>
        {children}
        {/* <Footer/> */}
        <Footer/>
        
        </AuthContextProvider>
        </body>
    </html>
  )
}
