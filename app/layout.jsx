import '../styles/globals.css'
import { Inter } from 'next/font/google'
import ico from './icon.ico'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'dp_portfolio',
  description: 'developed by dp',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={ico.src} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
