import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900'
// })
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900'
// })

const roboto = Roboto({
  subsets: ['vietnamese'],
  weight: ['300', '700']
})

export const metadata: Metadata = {
  title: 'NextJS App',
  description: 'Build a messenger app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  )
}
