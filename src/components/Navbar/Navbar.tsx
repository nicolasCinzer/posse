import Image from 'next/image';

import { NavbarItem } from '../ui/home/NavbarItem';
import logo from '../../assets/svg/logo-no-background.svg';

const leftItems: string[] = ['PRs', 'Exercises'];
const rightItems: string[] = ['Rutines', 'Stats'];

const Navbar = (): JSX.Element => {
  return (
    <nav className='flex w-full justify-evenly border-b pb-2 border-slate-700'>
      {leftItems.map(item => (
        <NavbarItem
          key={item}
          label={item}
        />
      ))}
      <Image
        src={logo}
        alt='Posse Logo'
        className='dark:invert'
        width={100}
        height={24}
        priority
      />
      {rightItems.map(item => (
        <NavbarItem
          key={item}
          label={item}
        />
      ))}
    </nav>
  );
};

export { Navbar };
