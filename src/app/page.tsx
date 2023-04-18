import Image from 'next/image';
import { Inter } from 'next/font/google';
import logo from '../assets/svg/logo-no-background.svg';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-4'>
      <Image
        src={logo}
        alt='Vercel Logo'
        className='dark:invert'
        width={100}
        height={24}
        priority
      />
    </main>
  );
}
