import Link from 'next/link';

interface Label {
  label: string;
}

const NavbarItem = ({ label }: Label) => {
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
