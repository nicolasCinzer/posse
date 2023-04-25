import Link from 'next/link';

import { Navbar } from '../../interfaces';

const NavbarItem = ({ label }: Navbar) => {
  return (
    <Link
      href={label}
      className='font-bold text-lg text-slate-800'
    >
      {label}
    </Link>
  );
};

export { NavbarItem };
