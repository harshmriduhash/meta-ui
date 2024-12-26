'use client';

import React from 'react';
import Link from 'next/link';

import ReactFocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import useKey from '~/hooks/useKey';
import { twMerge } from 'tailwind-merge';
import { IoCloseSharp } from 'react-icons/io5';

import { useUIConfig } from '~/context/UIConfigProvider';
import { MENU_LIST } from '~/lib/constants';

export default function Sidebar({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
}) {
  const handleClose = () => setShowSidebar(!showSidebar);

  // This will close the sidebar when user pres Escape key
  useKey('Escape', handleClose);

  const { header } = useUIConfig();
  const navbar = header?.navbar;

  const navList = navbar?.navItems ? navbar.navItems : MENU_LIST;

  return (
    <ReactFocusLock returnFocus disabled={!showSidebar}>
      <RemoveScroll enabled={showSidebar}>
        <div
          onClick={handleClose}
          className={twMerge(
            'fixed left-0 top-0 z-[100] flex h-screen w-full bg-black bg-opacity-70 transition-all duration-300 lg:hidden',
            showSidebar ? 'visible opacity-100' : 'invisible opacity-0'
          )}
        />
        <div
          className={twMerge(
            'small:py-4 fixed top-0 z-[101] flex h-full w-full flex-col justify-between space-y-12 overflow-y-auto bg-white px-6 py-12 duration-300 sm:w-[320px] lg:hidden',
            showSidebar ? 'right-0' : '-right-full' // Change to right positioning
          )}
        >
          <div className='space-y-12'>
            <div className='flex items-center justify-between'>
              <div className='leading-1 flex flex-col'>
                <span className='text-xl font-[900] uppercase leading-[28px] md:text-[26px]'>
                  {header?.navbar?.companyName ?? 'Tree Jaws'}
                </span>
              </div>
              <button onClick={handleClose}>
                <IoCloseSharp size={30} className='cursor-pointer' />
              </button>
            </div>
            <ul className='space-y-8'>
              {navList.map((item, index) => (
                <li key={`mobile_menu_list_${index}`}>
                  <Link
                    href={item.link}
                    onClick={handleClose}
                    className='relative flex w-fit cursor-pointer items-center transition-colors duration-300 hover:text-blue'
                  >
                    <span className='text-[18px] font-bold uppercase'>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RemoveScroll>
    </ReactFocusLock>
  );
}
