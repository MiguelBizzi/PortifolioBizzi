import type { Metadata } from 'next'
import { ThemeProvider } from '@/hooks/theme-provider'
import { Inter, Inter_Tight, JetBrains_Mono } from 'next/font/google'
import '../globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/header'
import ScrollToTopButton from '@/components/scroll-to-top-button'
import { ActiveSectionContextProvider } from '@/hooks/active-section-provider'
import Footer from '@/components/footer'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type { Languages } from '@/lib/types/languages'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Miguel Bizzi | Full Stack Software Engineer',
  description:
    'Senior full stack software engineer with 5+ years of experience building scalable products from scratch for global teams, across healthcare, education, SaaS and e-commerce.',
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: Languages }
}>) {
  const messages = await getMessages()

  return (
    <html lang={locale} className="!scroll-smooth">
      <body className={cn(
          'max-w-screen overflow-x-hidden font-sans antialiased',
          inter.variable,
          interTight.variable,
          jetbrainsMono.variable,
        )}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ActiveSectionContextProvider>
              <Header />

              {children}

              <Footer />
            </ActiveSectionContextProvider>

            <Toaster />

            <ScrollToTopButton />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
