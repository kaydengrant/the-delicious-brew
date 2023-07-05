import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {
  href: string;
  exact?: boolean;
  children?: ReactNode;
  className?: string;
};

const NavLink: React.FC<Props> = ({ href, exact, children, ...props }) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`${isActive ? 'underline underline-offset-4' : 'none'}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
