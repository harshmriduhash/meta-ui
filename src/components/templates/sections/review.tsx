'use client';

import React, { useState } from 'react';

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useUIConfig } from '~/context/UIConfigProvider';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import Image from '~/components/templates/components/image';
import Rating from '~/components/templates/components/rating';
import { TESTIMONIALS } from '~/lib/constants';
import { cn } from '~/lib/utils';

import 'swiper/css/navigation';
import 'swiper/css';

export default function ReviewSection() {
  const { testimonialsSection } = useUIConfig();

  const [swiper, setSwiper] = useState<SwiperClass>();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiperInstance: SwiperClass) => {
    setActiveIndex(swiperInstance.realIndex);
  };

  if (!testimonialsSection) return null;
  const testimonials = testimonialsSection.testimonials.length > 0 ? testimonialsSection.testimonials : TESTIMONIALS;

  return (
    <div id='reviews' className='w-full overflow-hidden bg-white py-[60px] lg:py-[120px]'>
      <div className='mx-[10px]'>
        <div className='mx-auto max-w-[980px] text-center text-3xl font-[800] leading-tight text-black sm:text-[44px] sm:leading-[56px]'>
          {testimonialsSection?.heading ?? 'Customer Testimonials for Tree Cutting Service in New york'}
        </div>

        <div className='relative mt-6 lg:mt-12'>
          <div className='lg:absolute lg:left-[50%] lg:top-0 lg:w-[140%] lg:-translate-x-[50%]'>
            <Swiper
              spaceBetween={32}
              slidesPerView={1}
              modules={[Navigation]}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 3 },
              }}
              onSwiper={(swiper) => {
                setSwiper(swiper);
              }}
              onSlideChange={handleSlideChange}
            >
              {testimonials?.map((item, index) => (
                <SwiperSlide key={`before-after-${index}`}>
                  <article
                    className={cn(
                      'mx-auto flex max-w-[866px] flex-col justify-center rounded-lg bg-[#F1F1F1] p-10 transition-all max-md:px-5',
                      (activeIndex + 1) % testimonials.length === index ? 'lg:opacity-100' : 'lg:opacity-50'
                    )}
                  >
                    <div className='flex w-full flex-col max-md:max-w-full'>
                      <blockquote className='line-clamp-6 text-center text-xl font-medium italic text-gray-900 max-md:max-w-full sm:text-start'>
                        {item.detail}
                      </blockquote>
                      <div className='mt-6 flex w-full flex-col flex-wrap items-center justify-between gap-10 max-md:max-w-full sm:flex-row'>
                        <div className='mx-auto flex w-fit flex-col items-start gap-4 self-stretch sm:mx-0 sm:flex-row'>
                          {item.image && (
                            <Image
                              width={48}
                              height={48}
                              src={item.image}
                              alt={`${item.author}'s profile`}
                              className='mx-auto aspect-square w-12 shrink-0 rounded-full object-contain sm:mx-0'
                            />
                          )}
                          <div className='flex flex-col'>
                            <h2 className='w-full pl-px text-xl font-medium leading-snug text-gray-900'>
                              {item.author}
                            </h2>

                            <div className='flex w-full font-semibold text-gray-500'>
                              {item.companyName ?? 'Google'}
                            </div>
                          </div>
                        </div>
                        <div className='mx-auto my-auto flex w-48 flex-col justify-center self-stretch rounded-3xl bg-[#001A4433]/20 bg-opacity-20 px-4 py-2.5 sm:mx-0'>
                          <div className='flex w-full items-center justify-center'>
                            <Rating />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='flex justify-center gap-6 pt-10 lg:pt-[450px] min-[1170px]:pt-[345px]'>
            <button
              className='group grid size-12 place-content-center rounded-full bg-[#F1F1F1] text-black transition-all hover:bg-blue hover:text-white'
              onClick={() => swiper?.slidePrev()}
            >
              <ChevronLeftIcon width={24} height={24} className='transition-all group-hover:text-white' />
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              className='group grid size-12 place-content-center rounded-full bg-[#F1F1F1] text-black transition-all hover:bg-blue hover:text-white'
            >
              <ChevronRightIcon width={24} height={24} className='transition-all group-hover:text-white' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
