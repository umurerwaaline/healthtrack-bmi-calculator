import { Saira } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const saira = Saira({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata = {
  title: 'BMI',
  description: 'Calculate your BMI and track your health journey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
