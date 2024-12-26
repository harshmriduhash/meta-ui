'use client';

import React from 'react';

import Image from './image';
import Link from 'next/link';

import { useUIConfig } from '~/context/UIConfigProvider';

import { InstagramLogoIcon } from '@radix-ui/react-icons';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { PiPinterestLogoFill, PiTwitterLogoFill } from 'react-icons/pi';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { QUICK_LINKS } from '~/lib/constants';

export default function Footer() {
  const { footer } = useUIConfig();

  if (!footer) return null;

  const quickLinks = footer.quickLinks.length > 0 ? footer.quickLinks : QUICK_LINKS;

  return (
    <div className='relative w-full overflow-hidden bg-[#001A44E5] py-[60px] text-white lg:py-[120px]'>
      <Image
        src={footer.backgroundImage ?? '/images/footer.jpeg'}
        width={3839}
        height={2559}
        alt='footer'
        className='absolute left-[50%] top-[50%] z-[-1] h-[1000px] w-[1500px] -translate-x-[50%] -translate-y-[50%] object-cover lg:h-auto lg:min-w-[100%]'
      />
      <div className='mx-[10px] max-w-[1280px] xl:mx-auto'>
        <div className='flex flex-col gap-8 lg:flex-row lg:gap-6 xl:gap-12'>
          <div className='flex max-w-[300px] flex-1 flex-col gap-6'>
            <Link href='/' className='text-[30px] font-[900] uppercase leading-[30px]'>
              {footer.companyName ?? 'Tree jaws'}
            </Link>

            <p className='text-[16px] leading-[24px]'>
              {footer?.info ?? 'MESSAGE US. Get in touch below. Ask any question or get a free quote'}
            </p>
          </div>
          <div className='flex w-full flex-1 flex-col justify-between gap-8 sm:flex-row md:gap-10'>
            <div className='flex flex-col gap-6'>
              <span className='text-[18px] font-[600] leading-[28px]'>Quick Links</span>
              <ul className='flex flex-col gap-4 text-[16px] leading-[24px]'>
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.link} className='hover:underline'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {footer.companyInfo && (
              <div className='flex flex-col gap-6'>
                <span className='text-[18px] font-[600] leading-[28px]'>Contact Us</span>
                <div className='flex flex-col gap-4'>
                  <div className='flex items-center gap-2'>
                    <IoMdMail color='white' size={24} />
                    <span>{footer.companyInfo.email ?? 'info@treejaws.com'}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FaPhoneAlt color='white' size={24} />
                    <span>{footer.companyInfo.phone ?? '(123) 456-7890123'}</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <FaLocationDot color='white' size={24} />
                    <span>{footer.companyInfo.address ?? 'Treeaws St, New York'}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          {footer.socialLinks && (
            <div className='flex flex-col gap-6'>
              {Object.keys(footer.socialLinks).length > 0 && (
                <span className='text-[16px] font-[600] leading-[20px]'>Follow Us</span>
              )}

              <div className='flex gap-8'>
                {footer?.socialLinks?.instagram && (
                  <Link
                    href={footer?.socialLinks?.instagram}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex h-10 w-10 items-center justify-center rounded-md bg-white text-black transition-all duration-300 hover:bg-blue hover:text-white'
                    aria-label='Instagram'
                  >
                    <InstagramLogoIcon className='size-[18px]' />
                  </Link>
                )}

                {footer?.socialLinks?.facebook && (
                  <Link
                    href={footer?.socialLinks?.facebook}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex h-10 w-10 items-center justify-center rounded-md bg-white text-black transition-all duration-300 hover:bg-blue hover:text-white'
                    aria-label='Facebook'
                  >
                    <RiFacebookCircleFill className='size-[18px]' />
                  </Link>
                )}
                {footer?.socialLinks?.twitter && (
                  <Link
                    href={footer?.socialLinks?.twitter}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex h-10 w-10 items-center justify-center rounded-md bg-white text-black transition-all duration-300 hover:bg-blue hover:text-white'
                    aria-label='Twitter'
                  >
                    <PiTwitterLogoFill className='size-[18px]' />
                  </Link>
                )}

                {footer?.socialLinks?.pinterest && (
                  <Link
                    href={footer?.socialLinks?.pinterest}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex h-10 w-10 items-center justify-center rounded-md bg-white text-black transition-all duration-300 hover:bg-blue hover:text-white'
                    aria-label='Pinterest'
                  >
                    <PiPinterestLogoFill className='size-[18px]' />
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
