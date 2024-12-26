'use client';

import React, { useMemo } from 'react';

import { LatLngTuple } from 'leaflet'; // Import LatLngTuple if using Leaflet
import { useUIConfig } from '~/context/UIConfigProvider';
import { LOCATIONS } from '~/lib/constants';
import dynamic from 'next/dynamic';
import { DotFilledIcon } from '@radix-ui/react-icons';

export default function ServeAreaSection() {
  const Map = useMemo(
    () =>
      dynamic(() => import('~/components/templates/components/map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  const { locationsSection } = useUIConfig();

  if (!locationsSection) return null;

  const locations = locationsSection.locations.length > 0 ? locationsSection.locations : LOCATIONS;

  const markers: LatLngTuple[] = locations.map((location) => [location.latitude, location.longitude]);

  return (
    <div className='w-full bg-white py-[60px] lg:py-[120px]'>
      <div className='mx-[10px] max-w-[1280px] xl:mx-auto'>
        <div className='flex flex-col gap-4 md:flex-row md:gap-8'>
          <div className='flex w-full flex-1 flex-col space-y-3 md:space-y-6'>
            <div className='flex flex-col space-y-2 md:space-y-4'>
              <span className='text-[15px] font-[500] leading-[24px] text-[#3B82F6] lg:text-[20px] lg:leading-[30px]'>
                {locationsSection?.label ?? 'Areas'}
              </span>
              <span className='text-[36px] font-[700] leading-[40px] text-[#s02050B] lg:text-[48px] lg:leading-[56px]'>
                {locationsSection?.heading ?? 'Areas We Serve'}
              </span>
            </div>
            <p className='text-[16px] leading-[24px] text-[#02050BB2]'>
              {locationsSection?.subheading ??
                "Our team proudly serves a wide range of locations across the region. We are committed to providing high-quality services to each of these areas. Whether you're in Pennsylvania, Philadelphia, New Jersey, or Bensalem, we're here to meet your needs and exceed expectations."}
            </p>
            <div className='grid max-w-[300px] grid-cols-2 gap-[40px] text-[16px] font-[500] leading-[24px] text-[#35373C]'>
              {locations?.map((location, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <DotFilledIcon color='#3B82F6' />
                  <span>{location.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='flex h-[345px] w-full md:max-w-[624px] md:flex-1'>
            <Map posix={markers[0] ?? [39.9526, -75.1652]} markers={markers} />
          </div>
        </div>
      </div>
    </div>
  );
}
