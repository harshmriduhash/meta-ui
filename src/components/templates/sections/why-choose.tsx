'use client';

import React from 'react';

import { useUIConfig } from '~/context/UIConfigProvider';
import Image from '~/components/templates/components/image';
import Button from '~/components/templates/components/button';

export default function WhyChooseSection() {
  const { aboutSection } = useUIConfig();

  if (!aboutSection) return null;

  return (
    <div id='about' className='w-full bg-white py-[60px] lg:py-[120px]'>
      <div className='mx-[10px] max-w-[1280px] xl:mx-auto'>
        <div className='flex flex-col-reverse items-center gap-8 lg:flex-row'>
          {aboutSection.aboutImage && (
            <div className='w-full flex-1 lg:max-w-[640px]'>
              <Image
                src={aboutSection.aboutImage?.src ?? '/images/about-us.jpg'}
                width={1024}
                height={1024}
                alt={aboutSection.aboutImage?.alt ?? 'about us'}
                className='h-[420px] w-full rounded-[8px] object-cover'
              />
            </div>
          )}
          <div className='flex flex-1 flex-col space-y-6 lg:space-y-12'>
            <div className='flex flex-col space-y-2 lg:space-y-4'>
              <span className='text-[15px] font-[500] leading-[30px] text-[#3B82F6] lg:text-[20px]'>
                {aboutSection?.label ?? 'About Us'}
              </span>
              <div className='flex flex-col space-y-3 lg:space-y-6'>
                <span className='text-[25px] font-[700] leading-[35px] text-[#02050B] lg:text-[32px] lg:leading-[44px]'>
                  {aboutSection?.heading ?? 'Your Trusted Experts'}
                </span>
                <p className='text-[16px] leading-[24px] text-[#02050BB2]'>
                  {aboutSection.info ??
                    'At Tree-Jaws, we take pride in providing top-quality tree cutting services to the New York community. With our team of experienced professionals and a commitment to excellence, we are dedicated to delivering safe and reliable tree care solutions. From emergency tree removals to routine pruning, we are your trusted partner in maintaining the beauty and safety of your property. Choose Tree-Jaws for peace of mind and exceptional service.'}
                </p>
                {aboutSection.callToAction && (
                  <Button size='medium' className='w-fit'>
                    {aboutSection.callToAction?.label ?? 'Call Today!'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
