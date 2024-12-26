'use client';

import React from 'react';

import { BsBuildingCheck } from 'react-icons/bs';
import { GiCargoCrane } from 'react-icons/gi';
import { VscTools } from 'react-icons/vsc';

import { useUIConfig } from '~/context/UIConfigProvider';
import { STATS } from '~/lib/constants';

export default function StatsSection() {
  const { statsSection } = useUIConfig();

  if (!statsSection) return null;

  return (
    <div className='w-full bg-[#3B82F6] py-[60px] lg:py-[120px]'>
      <div className='mx-[10px] max-w-[1280px] space-y-6 md:space-y-12 xl:mx-auto'>
        <div className='flex flex-col items-center space-y-2 md:space-y-4'>
          <span className='text-center text-[35px] font-[700] leading-[50px] text-white lg:text-[56px] lg:leading-[70px]'>
            {statsSection?.heading ?? ' Why Choose Tree-Jaws '}
          </span>
          <p className='text-center text-[15px] leading-[20px] text-white lg:text-[18px] lg:leading-[28px]'>
            {statsSection?.subheading ?? 'Why choose Tree-Jaws for Tree Cutting Service?'}
          </p>
        </div>

        {statsSection.stats && (
          <div className='flex flex-col flex-wrap gap-4 text-[#1C2752] md:flex-row md:gap-8'>
            <div className='flex flex-1 flex-col items-center gap-2 rounded-[8px] bg-white py-5 md:py-10'>
              <BsBuildingCheck size={50} color='#3B82F6' />
              <span className='text-[33px] font-[700] leading-[40px]'>
                {statsSection.stats[0]?.value ?? STATS[0]?.value}
              </span>
              <span className='text-[16px] leading-[28px]'>{statsSection.stats[0]?.label ?? STATS[0]?.label}</span>
            </div>
            <div className='flex flex-1 flex-col items-center gap-2 rounded-[8px] bg-white py-5 md:py-10'>
              <VscTools size={50} color='#3B82F6' />
              <span className='text-[33px] font-[700] leading-[40px]'>
                {statsSection.stats[1]?.value ?? STATS[1]?.value}
              </span>
              <span className='text-[16px] leading-[28px]'>{statsSection.stats[1]?.label ?? STATS[1]?.label}</span>
            </div>
            <div className='flex flex-1 flex-col items-center gap-2 rounded-[8px] bg-white py-5 md:py-10'>
              <GiCargoCrane size={50} color='#3B82F6' />
              <span className='text-[33px] font-[700] leading-[40px]'>
                {statsSection.stats[2]?.value ?? STATS[2]?.value}
              </span>
              <span className='text-[16px] leading-[28px]'>{statsSection.stats[2]?.label ?? STATS[2]?.label}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
