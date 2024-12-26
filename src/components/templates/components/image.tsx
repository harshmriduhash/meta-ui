import React from 'react';
import type { ImageProps as NextImageProps } from 'next/image';

// import CustomNextImage from 'next-export-optimize-images/picture';
// import { twMerge } from 'tailwind-merge';

import type { ComponentProps } from '~/types';
import NextImage from 'next/image';

export interface ImageProps extends ComponentProps, NextImageProps {}

export default function Image({ ...props }: ImageProps) {
  // return <CustomNextImage {...props} className={twMerge('h-auto max-w-full duration-100 ease-in', className)} />;
  return <NextImage {...props} />;
}
