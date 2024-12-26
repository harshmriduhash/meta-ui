'use client';

import React from 'react';
import Link from 'next/link';

import { useUIConfig } from '~/context/UIConfigProvider';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import TopBar from './topbar';
import { MENU_LIST } from '~/lib/constants';

export default function Navbar({ setShowSidebar }: { setShowSidebar: (value: boolean) => void }) {
  const { header } = useUIConfig();

  const navbar = header?.navbar;

  const navList = navbar?.navItems ? navbar.navItems : MENU_LIST;

  return (
    <>
      <TopBar />

      <div className='w-full bg-alice-blue pt-5 lg:py-10'>
        <div className='relative mx-[10px] max-w-[1280px] xl:mx-auto'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='text-center text-xl font-[900] uppercase leading-[28px] sm:text-[26px]'>
              {header?.navbar?.companyName ?? 'Tree Jaws'}
            </Link>

            <ul className='hidden gap-10 min-[1080px]:flex xl:gap-12'>
              {navList.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`${item.link.toLowerCase()}`}
                    className='cursor-pointer text-[18px] font-[500] uppercase leading-[28px] text-black transition-all hover:text-blue'
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='flex items-center gap-5'>
              {navbar?.contactButton && (
                <Link
                  href={navbar?.contactButton.link ?? '/'}
                  className='hidden rounded-full border-[1px] border-blue px-5 py-4 text-[18px] font-[500] uppercase leading-[20px] text-blue transition-colors duration-300 hover:bg-blue hover:text-white lg:flex'
                >
                  {navbar?.contactButton.label ?? 'Contact'}
                </Link>
              )}
              <button
                className='flex h-10 w-10 items-center justify-center min-[1080px]:hidden'
                onClick={() => setShowSidebar(true)}
              >
                <HamburgerMenuIcon className='h-6 w-6' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
