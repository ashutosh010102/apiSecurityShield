import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Analytics} from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Rohit's Portfolio`,
  description: 'Portfolio of an aspiring software developer: Rohit Pansari',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/Images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Images/favicon-16x16.png"/>
      </head>
      <body className={inter.className}>{children} <Analytics/></body>
    </html>
  );
}
