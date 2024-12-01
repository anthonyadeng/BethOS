import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Inter, Roboto_Mono, Afacad } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
const afacad = Afacad({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-afacad',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Bethany Hughes',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${roboto_mono.variable} ${afacad.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
