'use client';

import React from 'react';

import { useUIConfig } from '~/context/UIConfigProvider';
import Button from '~/components/templates/components/button';

export default function QuoteSection() {
  const { quoteSection } = useUIConfig();

  if (!quoteSection) return null;

  return (
    <div id='quote' className='w-full bg-[#3B82F6] py-[60px] lg:py-[120px]'>
      <div className='mx-[10px] max-w-[1280px] xl:mx-auto'>
        <div className='flex flex-col items-center space-y-4'>
          <span className='text-center text-[35px] font-[700] leading-[50px] text-white lg:text-[56px] lg:leading-[70px]'>
            {quoteSection?.heading ?? 'Get Your Free Tree-Jaws Quote'}
          </span>
          <p className='max-w-[530px] text-center text-[15px] leading-[20px] text-white lg:text-[18px] lg:leading-[28px]'>
            {quoteSection?.subheading ??
              'ust fill out your info and will get back to you right away and schedule a time to set up a meeting.'}
          </p>
          {quoteSection.callToAction && (
            <Button variant='outline' size='medium' className='mx-auto bg-white hover:border-white'>
              {quoteSection.callToAction?.label ?? 'Get Quote'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
