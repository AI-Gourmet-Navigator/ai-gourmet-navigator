import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import '@/styles/globals.css'
import { Hind } from 'next/font/google'
import NextAuthProvider from '@/providers/nextAuthProvider'
import { ThemeProvider } from '@/components/themeProvider'

const hind = Hind({
  weight: ['400', '500', '700'],
  style: 'normal',
  subsets: ['latin'],
})

export const metadata = {
  title: 'AI Gourmet Navigator',
  description:
    'AI Gourmet Navigator that allows users to search for restaurants based on their current mood.',
  icons: [{ rel: 'icon', url: 'ai-gourmet-navigator/ico' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={hind.className} suppressHydrationWarning={true}>
      <body>
        <NextAuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main
              style={{ minHeight: 'calc(100vh - 120px)' }}
              className="mx-auto max-w-7xl"
            >
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
