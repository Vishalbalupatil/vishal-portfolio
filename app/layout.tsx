import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import AnalyticsConsent from '@/components/analytics-consent'

export const metadata: Metadata = {
  title: 'Vishal Patil | QA Engineer',
  description: 'Portfolio of Vishal Patil, Lead QA Engineer and SDET.',
  openGraph: {
    title: 'Vishal Patil',
    description: 'Lead QA Engineer and Automation Specialist',
    url: 'https://vishalpatil.dev',
    siteName: 'Vishal Patil',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishal Patil',
    description: 'Lead QA Engineer and Automation Specialist',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="container mx-auto max-w-4xl px-4">
            <a href="#main" className="sr-only focus:not-sr-only">
              Skip to content
            </a>
            <Nav />
            <main id="main">{children}</main>
            <Footer />
          </div>
          <AnalyticsConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
