'use client';

import React from 'react';
import Link from 'next/link';

import { useUIConfig } from '~/context/UIConfigProvider';

import { InstagramLogoIcon } from '@radix-ui/react-icons';
import { PiPinterestLogoFill, PiTwitterLogoFill } from 'react-icons/pi';
import { RiFacebookCircleFill } from 'react-icons/ri';

const TopBar = () => {
  const { header } = useUIConfig();
  const topBar = header?.topBar;

  if (!topBar) return null;

  return (
    <div className='w-full bg-navy-blue'>
      <div className='mx-[10px] max-w-[1280px] xl:mx-auto'>
        <div className='flex justify-between py-3 md:py-5'>
          <span className='overflow-hidden text-ellipsis whitespace-nowrap text-[12px] font-[600] leading-[16px] text-white md:text-[14px] md:leading-[20px]'>
            {topBar?.heading ? topBar.heading : 'Tree Cutting Service'}
          </span>
          {topBar?.socialLinks && (
            <div className='hidden gap-5 md:flex'>
              {topBar?.socialLinks?.instagram && (
                <Link
                  href={topBar?.socialLinks?.instagram}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Instagram'
                >
                  <InstagramLogoIcon className='h-5 w-5 text-white transition-colors duration-300 hover:text-white/90' />
                </Link>
              )}

              {topBar?.socialLinks?.facebook && (
                <Link
                  href={topBar?.socialLinks?.facebook}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Facebook'
                >
                  <RiFacebookCircleFill className='h-5 w-5 text-white transition-colors duration-300 hover:text-white/90' />
                </Link>
              )}
              {topBar?.socialLinks?.twitter && (
                <Link
                  href={topBar?.socialLinks?.twitter}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Twitter'
                >
                  <PiTwitterLogoFill className='h-5 w-5 text-white transition-colors duration-300 hover:text-white/90' />
                </Link>
              )}

              {topBar?.socialLinks?.pinterest && (
                <Link
                  href={topBar?.socialLinks?.pinterest}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Pinterest'
                >
                  <PiPinterestLogoFill className='h-5 w-5 text-white transition-colors duration-300 hover:text-white/90' />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default TopBar;
