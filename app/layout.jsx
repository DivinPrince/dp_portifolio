import '../styles/globals.css'
import ico from './icon.ico'


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
      <body>
        {children}
      </body>
    </html>
  )
}
