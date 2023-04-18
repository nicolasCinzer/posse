import { FC } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const NavbarItemVariants = cva('');

interface NavbarItemProps extends VariantProps<typeof NavbarItemVariants> {}

const NavbarItem: FC<NavbarItemProps> = ({}) => {
  return <div>Item</div>;
};

export { NavbarItem };
