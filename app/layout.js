import './globals.css';
import { Lexend } from 'next/font/google';
import Header from '@/components/header';
import Providers from './providers';
import classNames from 'classnames';
import { AOSInit } from '@/components/AOSInit';
import SocialMenu from '@/components/ContactMenu/SocialMenu';
import EmailManu from '@/components/ContactMenu/EmailManu';
import Loader from './loader';
import { GoogleAnalytics } from '@next/third-parties/google'

const lexend = Lexend({ subsets: ['latin'] });

export const viewport = {
  themeColor: '#111827',
}

export const metadata = {
  metadataBase: new URL('https://nikhilvishwakarma.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  title: 'Nikhil Vishwakarma',
  description: 'Experienced software engineer dedicated to building, researching, and getting things done.',
  icons: {
    icon: 'https://ik.imagekit.io/vishwakarmanikhil/portfolio-v2/favicon/favicon-16x16.png',
    shortcut: 'https://ik.imagekit.io/vishwakarmanikhil/portfolio-v2/favicon/favicon-32x32.png',
    apple: 'https://ik.imagekit.io/vishwakarmanikhil/portfolio-v2/favicon/apple-touch-icon.png',
    other: {
      rel: 'mask-icon',
      url: 'https://ik.imagekit.io/vishwakarmanikhil/portfolio-v2/favicon/safari-pinned-tab.svg',
      color: '#1BA5E9',
    },
  },
  manifest: '/site.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: 'Nikhil Vishwakarma',
    description: 'Experienced software engineer dedicated to building, researching, and getting things done.',
    creator: '@vishwakarmanikhil',
    images: ['https://ik.imagekit.io/vishwakarmanikhil/portfolio-v2/og.png'],
  },
  og: {
    card: 'summary_large_image',
    title: 'Nikhil Vishwakarma',
    description: 'Experienced software engineer dedicated to building, researching, and getting things done.',
    creator: '@vishwakarmanikhil',
    images: ['https://ik.imagekit.io/vishwakarmanikhil/portfolio-v2/og.png'],
  },
  openGraph: {
    title: 'Nikhil Vishwakarma',
    description: 'Experienced software engineer dedicated to building, researching, and getting things done.',
    url: 'nikhilvishwakarma.com',
    siteName: 'Nikhil Vishwakarma',
    images: ['https://ik.imagekit.io/vishwakarmanikhil/portfolio-v2/og.png'],
    locale: 'en_US',
    type: 'website',
  },
  other: {
    author: 'Nikhil Vishwakarma',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="dark">
      <body suppressHydrationWarning={true} className={classNames(lexend.className, "dark:bg-gray-800")}>
        <div className='bg__overlay'></div>
        <AOSInit />
        <Providers>
          <Loader>
            <Header />
            <SocialMenu
              source='sideMenu'
            />
            <main className={classNames('main__wrapper', 'bg-white dark:bg-gray-900')}>
              {children}
            </main>
            <EmailManu />
          </Loader>
        </Providers>
        <GoogleAnalytics gaId="G-MLXN9M48Q2" />
      </body>
    </html>
  )
}
