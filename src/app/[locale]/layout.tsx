import type { Metadata } from 'next'
import { ThemeProvider } from '@/hooks/theme-provider'
import { Montserrat } from 'next/font/google'
import '../globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/header'
import ScrollToTopButton from '@/components/scroll-to-top-button'
import { ActiveSectionContextProvider } from '@/hooks/active-section-provider'
import Footer from '@/components/footer'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type { Languages } from '@/lib/types/languages'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
      <body className={cn('max-w-screen overflow-x-hidden antialiased', montserrat.className)}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ActiveSectionContextProvider>
              <Header />

              {children}

              <Footer />
            </ActiveSectionContextProvider>

            <ScrollToTopButton />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
