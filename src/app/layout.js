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
      <body
        className="bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300 transition-colors duration-300"
        style={{
          fontFamily: 'var(--font-outfit), system-ui, sans-serif',
          backgroundImage: "url('/images/bg-light.jpg')", 
          backgroundAttachment: "fixed"
        }}
        >

        {children}
      </body>

    </html>
  );
}
