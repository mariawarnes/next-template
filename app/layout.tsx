import './globals.css';

import type { Metadata } from 'next';

import { Footer, Header, SkipLink, ThemeProvider } from '@/components';
import { companyName, primaryColor } from '@/constants';
export const metadata: Metadata = {
  title: companyName,
  description: '',
  icons: {
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: primaryColor,
      },
    ],
  },
};

export const viewport = {
  themeColor: primaryColor,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-custom-bg-light text-custom-text-light dark:bg-custom-bg-dark dark:text-custom-text-dark">
        <ThemeProvider attribute="class" enableSystem>
          <SkipLink />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
