'use client';

import React from 'react';

import { useUIConfig } from '~/context/UIConfigProvider';
import Image from '~/components/templates/components/image';
import Button from '~/components/templates/components/button';
import Rating from '~/components/templates/components/rating';

export default function HeroSection() {
  const { heroSection } = useUIConfig();

  if (!heroSection) return null;

  return (
    <div id='hero' className='w-full bg-alice-blue py-[60px] lg:pb-[200px] lg:pt-[120px]'>
      <div className='mx-[10px] max-w-7xl xl:mx-auto'>
        <div className='flex flex-col items-center gap-[56px] lg:flex-row'>
          <div className='flex flex-1 flex-col items-center lg:items-start'>
            <span className='w-fit rounded-full bg-blue/15 px-4 py-2 text-[12px] font-semibold leading-[16px] text-blue lg:text-[15px] lg:leading-[20px] xl:text-[18.6px] xl:leading-[28px]'>
              {heroSection?.label ?? 'Your Top Choice for Quality and Reliability!'}
            </span>
            <h1 className='mt-4 max-w-3xl text-center text-[40px] font-[700] leading-[50px] md:text-[50px] md:leading-[70px] lg:text-start xl:text-[60px] xl:leading-[90px]'>
              {heroSection?.heading ?? 'Tree Cutting Service Services in New york'}
            </h1>
            <span className='mt-4 text-[20px] leading-[30px] text-black/70 lg:mt-6 lg:text-[32px] lg:leading-[44px]'>
              {heroSection?.subheading ?? '24/7 Emergency Service In New york'}
            </span>

            {heroSection.callToAction && (
              <Button className='mt-5 capitalize sm:uppercase'>
                {heroSection?.callToAction?.label ?? 'Get Started'}
              </Button>
            )}
          </div>
          <div className='relative w-full flex-1 lg:max-w-[540px]'>
            <Image
              src={heroSection?.heroImage?.src ?? '/images/hero.jpg'}
              width={540}
              height={540}
              alt={heroSection?.heroImage?.alt ?? 'hero image'}
              className='max-h-[540px] w-full rounded object-cover'
            />
            {heroSection.rating && (
              <article className='absolute bottom-0 left-[50%] flex w-fit -translate-x-[50%] translate-y-[50%] flex-col space-y-1 rounded-[8px] bg-white p-3 lg:left-0 lg:space-y-3 lg:p-5'>
                <span className='whitespace-nowrap text-center text-[16px] font-[500] leading-[20px] text-blue lg:text-[24px] lg:leading-[28px]'>
                  {heroSection?.rating?.title ?? '500+ Satisfied Customers'}
                </span>
                <div className='flex items-center justify-between gap-4'>
                  {heroSection.rating.users?.length && (
                    <div className='flex space-x-[-10px] lg:space-x-[-15px]'>
                      {heroSection.rating.users.map((item, index) => (
                        <Image
                          key={index}
                          src={item}
                          width={150}
                          height={150}
                          alt='user'
                          className='h-[30px] w-[30px] rounded-full border-[2px] border-white object-cover lg:h-[48px] lg:w-[48px]'
                        />
                      ))}
                    </div>
                  )}
                  <div className='flex'>
                    <Rating
                      rating={heroSection.rating.stars ?? 4.5}
                      filledColor='fill-[#ff6e2e]'
                      halfFilledColor='fill-[#ff6e2e]'
                    />
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
