'use client';

import React, { useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Zoom from 'react-medium-image-zoom';

import Image from '~/components/templates/components/image';

import 'swiper/css/navigation';
import 'swiper/css';
import Link from 'next/link';
import { useUIConfig } from '~/context/UIConfigProvider';
import { BEFORE_AFTER } from '~/lib/constants';
import Button from '~/components/templates/components/button';

export default function BeforeAfterSection() {
  const [swiper, setSwiper] = useState<SwiperClass>();

  const { beforeAfterSection } = useUIConfig();

  if (!beforeAfterSection) return null;

  let data;
  if (beforeAfterSection.results) {
    data = beforeAfterSection?.results?.length > 0 ? beforeAfterSection.results : BEFORE_AFTER;
  }

  return (
    <div id='beforeafter' className='w-full bg-[#F0F6FF] py-[60px] lg:py-[120px]'>
      <div className='mx-[10px] max-w-[1280px] space-y-6 lg:space-y-12 xl:mx-auto'>
        <div className='flex flex-col items-center justify-between gap-3 lg:flex-row'>
          <div className='flex flex-col space-y-2 lg:space-y-4'>
            <span className='text-[15px] font-[500] leading-[30px] text-[#3B82F6] lg:text-[20px] lg:leading-[30px]'>
              {beforeAfterSection.label}
            </span>
            <span className='text-[36px] font-[700] leading-[48px] text-[#02050B] lg:text-[48px] lg:leading-[56px]'>
              {/* See How We Change <span className='whitespace-nowrap text-[#3B82F6]'>Your Home</span> */}
              {beforeAfterSection.heading}
            </span>
            <span className='text-[15px] font-[500] leading-[24px] text-[#02050BB2] lg:text-[18px] lg:leading-[28px]'>
              {beforeAfterSection.subheading}
            </span>
          </div>

          <div className='flex space-x-4 lg:space-x-8'>
            <button
              className='group rounded-full border-[2px] border-[#3B82F6] p-2 transition-all hover:bg-[#3B82F6] lg:p-3'
              onClick={() => swiper?.slidePrev()}
            >
              <ChevronLeftIcon
                width={24}
                height={24}
                className='h-5 w-5 text-[#3B82F6] transition-all group-hover:text-white lg:h-6 lg:w-6'
              />
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              className='group rounded-full border-[2px] border-[#3B82F6] p-2 transition-all hover:bg-[#3B82F6] lg:p-3'
            >
              <ChevronRightIcon
                width={24}
                height={24}
                className='h-5 w-5 text-[#3B82F6] transition-all group-hover:text-white lg:h-6 lg:w-6'
              />
            </button>
          </div>
        </div>

        <div>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            modules={[Navigation]}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
          >
            {beforeAfterSection.results?.map((item, index) => (
              <SwiperSlide key={`before-after-${index}`}>
                <div className='flex gap-1'>
                  <Zoom>
                    <div className='relative h-[255px]'>
                      <div className='absolute left-1/2 top-0 flex h-[26px] w-[76px] -translate-x-1/2 transform items-center justify-center rounded-b-lg bg-white px-5 py-1 text-[12px] font-medium leading-[18px] text-[#02050B]'>
                        Before
                      </div>
                      <Image
                        width={800}
                        height={800}
                        src={item.beforeImg}
                        alt='Before Image'
                        className='h-full rounded-l-md object-cover xl:min-w-[200px]'
                      />
                    </div>
                  </Zoom>
                  <Zoom>
                    <div className='relative h-[255px]'>
                      <div className='absolute left-1/2 top-0 flex h-[26px] w-[76px] -translate-x-1/2 transform items-center justify-center rounded-b-lg bg-white px-5 py-1 text-[12px] font-medium leading-[18px] text-[#02050B]'>
                        After
                      </div>
                      <Image
                        width={800}
                        height={800}
                        src={item.afterImg}
                        alt='After Image'
                        className='h-full rounded-r-md xl:min-w-[200px]'
                      />
                    </div>
                  </Zoom>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='flex'>
          <Link className='mx-auto' href='#gallery'>
            <Button size='medium' className='mx-auto'>
              See More Work
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
