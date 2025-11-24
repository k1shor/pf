import Header from '@/components/Header';
import './globals.css';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = {
  description: 'Modern Next.js site with Tailwind v4 and Outfit font',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more favicon sizes if needed */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className="bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300 transition-colors duration-300"
        style={{
          fontFamily: 'var(--font-outfit), system-ui, sans-serif',
          backgroundImage: "url('/images/bg-light.jpg')", 
          backgroundAttachment: "fixed",
        }}
      >
        {children}
      </body>
    </html>
  );
}
