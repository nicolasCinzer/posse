import './globals.css';
import { Advent_Pro } from 'next/font/google';

import { Navbar } from '../components/Navbar/Navbar';
export const metadata = {
  title: 'Posse',
  description: 'Powerlifting Program',
};

const font = Advent_Pro({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${font.className} flex flex-col h-screen p-4`}>
        {' '}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
