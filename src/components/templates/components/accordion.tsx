'use client';

import React, { useRef, useState } from 'react';

import { ChevronDownIcon } from '@radix-ui/react-icons';

import { cn } from '~/lib/utils';

export type AccordionProps = {
  title: string;
  description: string;
};

const Accordion = ({ title, description }: AccordionProps) => {
  const contentElement = useRef<HTMLDivElement>(null);

  const [isOpened, setOpened] = useState(false);
  const [height, setHeight] = useState('0px');

  const handleClick = () => {
    setOpened(!isOpened);
    if (contentElement.current) {
      setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : '0px');
    }
  };

  return (
    <div onClick={handleClick} className='flex flex-col rounded-[7px] bg-white px-5 py-6 lg:px-8 lg:py-10'>
      <div className='flex cursor-pointer items-center justify-between text-[20px] font-[500] leading-[35px] text-[#1C2752] lg:text-[28px] lg:leading-[50px]'>
        <span>{title}</span>
        <div className='rounded-full p-2 hover:bg-[#A1A1A11E]'>
          <ChevronDownIcon
            className={cn({
              'h-8 w-8 transition-transform duration-200': true,
              'rotate-180': isOpened,
            })}
          />
        </div>
      </div>
      <div
        ref={contentElement}
        style={{ height }}
        className='overflow-hidden text-[16px] leading-[24px] text-[#02050BB2] transition-all duration-200'
      >
        <p className='mt-[12px]' dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </div>
  );
};

export default Accordion;
