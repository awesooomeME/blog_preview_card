import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'

const fontstyle = Figtree({ subsets: ['latin'], weight: ['600', '800'] })

export const metadata: Metadata = {
  title: 'Blog Preview Card',
  description: 'This next app is a solution for the frontendmentor challenge- https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS/hub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontstyle.className}>{children}</body>
    </html>
  )
}
