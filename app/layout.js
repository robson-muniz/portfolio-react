import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import BackgroundEffects from './components/BackgroundEffects'
import BackToTop from './components/BackToTop'
import ErrorBoundary from './components/ErrorBoundary'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Robson Muniz | Creative Full Stack Developer & Designer',
  description: 'Portfolio of Robson Muniz - Creative Developer & Designer specializing in React, Node.js, and modern web technologies. Building exceptional digital experiences.',
  keywords: 'full stack developer, react developer, web designer, portfolio, javascript, typescript, node.js',
  authors: [{ name: 'Robson Muniz' }],
  creator: 'Robson Muniz',
  publisher: 'Robson Muniz',
  robots: 'index, follow',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://robsonmuniz.tech',
    title: 'Robson Muniz | Creative Full Stack Developer & Designer',
    description: 'Portfolio of Robson Muniz - Creative Developer & Designer specializing in React, Node.js, and modern web technologies.',
    siteName: 'Robson Muniz Portfolio',
    images: [
      {
        url: 'https://robsonmuniz.tech/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Robson Muniz Portfolio',
      },
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Robson Muniz | Creative Full Stack Developer & Designer',
    description: 'Portfolio of Robson Muniz - Creative Developer & Designer specializing in React, Node.js, and modern web technologies.',
    images: ['https://robsonmuniz.tech/twitter-image.png'],
  },

  // Icons
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export const viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P6S1SJ9G7X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-P6S1SJ9G7X', { send_page_view: false });
                    `}
        </Script>
      </head>
      <body>
        <ErrorBoundary>
          <SmoothScroll>
            <BackgroundEffects />
            <div className="relative min-h-screen">
              <Navbar />
              <main className="relative z-10">
                {children}
              </main>
              <Footer />
              <BackToTop />
            </div>
          </SmoothScroll>
        </ErrorBoundary>
      </body>
    </html>
  )
}
