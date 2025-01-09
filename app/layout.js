import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import "./globals.css"
import RootProvider from './providers/RootProvider'
import './styles/footer.css'

// Configure the fonts
const geistSans = GeistSans
const geistMono = GeistMono

export const metadata = {
  title: "Freightnaut",
  description: "Digital Freight Solutions",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  )
}