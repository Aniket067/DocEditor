
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header flex items-center", className)}>
      <Link href='/' className='flex items-center md:flex-1'>
        <Image
          src="/assets/icons/logo-icon.svg"
          alt='Logo with name'
          width={35}
          height={32}
          className='hidden md:block'
        />
        <span className='ml-2 font-bold hidden md:inline'>DocuVerse</span>

        <Image
          src="/assets/icons/logo-icon.svg"
          alt='Logo'
          width={32}
          height={32}
          className='mr-2 md:hidden'
        />
        <span className='font-bold md:hidden'>DocuVerse</span>
      </Link>
      {children}
    </div>
  );
}

export default Header;
