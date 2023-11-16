import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import ClinentLayout from './clinentLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Animation Demo',
  description: 'アニメーションの調査デモです',
}

export default function RootLayout(  
  props: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header/>
        <ClinentLayout>
          {props.children}
        </ClinentLayout>
      </body>
    </html>
  )
}
