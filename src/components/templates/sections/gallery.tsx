'use client';

import React from 'react';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useUIConfig } from '~/context/UIConfigProvider';
import Image from '~/components/templates/components/image';
import { GALLERY_IMAGES } from '~/lib/constants';

export default function GallerySection() {
  const { gallerySection } = useUIConfig();

  if (!gallerySection) return null;

  return (
    <div id='gallery' className='w-full bg-white py-[60px] lg:py-[120px]'>
      <div className='mx-[10px] max-w-[1280px] xl:mx-auto'>
        <div className='flex flex-col space-y-2 lg:space-y-4'>
          <span className='text-[15px] font-[500] leading-[30px] text-[#3B82F6] lg:text-[20px]'>
            {gallerySection?.label ?? 'Photo Gallery'}
          </span>
          <span className='text-[36px] font-[700] leading-[44px] text-[#02050B] lg:text-[48px] lg:leading-[56px]'>
            {gallerySection?.heading ?? 'See Our Work'}
          </span>
          <span className='text-[18px] leading-[28px] text-[#02050BB2]'>
            {gallerySection?.subheading ?? 'A Showcase of Quality and Craftsmanship'}{' '}
          </span>
        </div>

        {gallerySection.images && (
          <div className='mt-6 flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0 lg:mt-12'>
            <div className='flex w-full flex-col space-y-4 md:h-[768px] md:space-y-8'>
              <Zoom>
                <Image
                  src={gallerySection.images[0]?.src ?? GALLERY_IMAGES[0]?.src ?? ''}
                  width={1179}
                  height={1185}
                  className='object-cover md:h-[544px]'
                  alt={gallerySection.images[0]?.alt ?? GALLERY_IMAGES[0]?.alt ?? ''}
                />
              </Zoom>
              <Zoom>
                <Image
                  src={gallerySection.images[1]?.src ?? GALLERY_IMAGES[1]?.src ?? ''}
                  width={1179}
                  height={1185}
                  className='object-cover md:h-[192px]'
                  alt={gallerySection.images[1]?.alt ?? GALLERY_IMAGES[1]?.alt ?? ''}
                />
              </Zoom>
            </div>
            <div className='flex w-full flex-col space-y-4 md:h-[768px] md:space-y-8'>
              <Zoom>
                <Image
                  src={gallerySection.images[2]?.src ?? GALLERY_IMAGES[2]?.src ?? ''}
                  width={1179}
                  height={1185}
                  className='object-cover md:h-[368px]'
                  alt={gallerySection.images[2]?.alt ?? GALLERY_IMAGES[2]?.alt ?? ''}
                />
              </Zoom>
              <Zoom>
                <Image
                  src={gallerySection.images[3]?.src ?? GALLERY_IMAGES[3]?.src ?? ''}
                  width={1179}
                  height={1185}
                  className='object-cover md:h-[368px]'
                  alt={gallerySection.images[3]?.alt ?? GALLERY_IMAGES[3]?.alt ?? ''}
                />
              </Zoom>
            </div>
            <div className='flex w-full flex-col space-y-4 md:h-[768px] md:space-y-8'>
              <Zoom>
                <Image
                  src={gallerySection.images[4]?.src ?? GALLERY_IMAGES[4]?.src ?? ''}
                  width={1179}
                  height={1185}
                  className='object-cover md:h-[192px]'
                  alt={gallerySection.images[4]?.alt ?? GALLERY_IMAGES[4]?.alt ?? ''}
                />
              </Zoom>
              <Zoom>
                <Image
                  src={gallerySection.images[5]?.src ?? GALLERY_IMAGES[5]?.src ?? ''}
                  width={1179}
                  height={1185}
                  className='object-cover md:h-[544px]'
                  alt={gallerySection.images[5]?.alt ?? GALLERY_IMAGES[5]?.alt ?? ''}
                />
              </Zoom>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
