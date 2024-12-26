'use client';

import React, { useState } from 'react';

import { useUIConfig } from '~/context/UIConfigProvider';

import Image from '~/components/templates/components/image';
import Button from '~/components/templates/components/button';
import Link from 'next/link';
import { cn } from '~/lib/utils';
import { Service } from '~/lib/types';
import { SERVICES } from '~/lib/constants';

export default function FeatureSection() {
  const { servicesSection } = useUIConfig();

  const services = servicesSection?.services || SERVICES;

  const [feature, setFeature] = useState<Service | undefined>(services[2]);

  if (!servicesSection) return null;

  const handleFeature = (data: Service) => {
    setFeature(data);
  };

  return (
    <div className='w-full bg-white py-[60px] lg:py-[120px]'>
      <div id='services' className='mx-[10px] max-w-[1280px] xl:mx-auto'>
        <div className='flex flex-col-reverse items-center gap-8 lg:flex-row'>
          <div className='w-full flex-1 lg:max-w-[640px]'>
            <Image
              src={feature?.image ?? ''}
              width={1024}
              height={1024}
              key={feature?.id}
              alt={feature?.title ?? ''}
              className='h-full max-h-[750px] w-full rounded-[8px] object-cover fade-in lg:h-[750px]'
            />
          </div>

          <div className='flex flex-1 flex-col space-y-6 lg:space-y-12'>
            <div className='flex flex-col space-y-3 lg:space-y-4'>
              <span className='text-[15px] font-[500] leading-[30px] text-[#3B82F6] lg:text-[20px]'>
                {servicesSection?.label}
              </span>
              <span className='text-[36px] font-[700] leading-[40px] text-[#02050B] lg:text-[48px] lg:leading-[60px]'>
                {servicesSection?.heading}
              </span>
              <div className='flex flex-col space-y-2 lg:flex-row lg:space-x-4 lg:space-y-0'>
                <button
                  onClick={() => handleFeature(services[0] as Service)}
                  className={cn(
                    'flex-1 cursor-pointer rounded-full border-[1px] border-[#02050B] px-5 py-2 text-center text-[16px] font-[500] leading-[28px] text-[#02050B] transition-all hover:border-blue hover:bg-blue hover:text-white lg:py-[14px]',
                    feature?.id === services[0]?.id ? 'border-blue bg-blue text-white' : ''
                  )}
                >
                  {services[0]?.title}
                </button>

                <button
                  onClick={() => handleFeature(services[1] as Service)}
                  className={cn(
                    'flex-1 cursor-pointer rounded-full border-[1px] border-[#02050B] px-5 py-2 text-center text-[16px] font-[500] leading-[28px] text-[#02050B] transition-all hover:border-blue hover:bg-blue hover:text-white lg:py-[14px]',
                    feature?.id === services[1]?.id ? 'border-blue bg-blue text-white' : ''
                  )}
                >
                  {services[1]?.title}
                </button>
              </div>

              <button
                onClick={() => handleFeature(services[2] as Service)}
                className={cn(
                  'flex-1 cursor-pointer rounded-full border-[1px] border-[#02050B] px-5 py-2 text-center text-[16px] font-[500] leading-[28px] text-[#02050B] transition-all hover:border-blue hover:bg-blue hover:text-white lg:py-[14px]',
                  feature?.id === services[2]?.id ? 'border-blue bg-blue text-white' : ''
                )}
              >
                {services[2]?.title}
              </button>
            </div>

            <div key={feature?.id} className='slide-up flex flex-col space-y-2 lg:space-y-4'>
              <span className='text-[15px] font-[500] leading-[30px] text-[#3B82F6] fade-in lg:text-[20px]'>
                {feature?.subtitle}
              </span>
              <div className='flex flex-col space-y-3 lg:space-y-6'>
                <span className='text-[25px] font-[700] leading-[35px] text-[#02050B] lg:text-[32px] lg:leading-[44px]'>
                  {feature?.title}
                </span>
                <p className='text-[16px] leading-[24px] text-[#02050BB2]'>{feature?.description}</p>
                <Link href='#contact'>
                  <Button size='medium' className='w-fit'>
                    {servicesSection?.callToAction?.label || 'Call Today!'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
