import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IAMS - Asset Management System',
  description: '情報資産管理システム (Information Asset Management System)',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
