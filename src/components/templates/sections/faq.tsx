'use client';

import React from 'react';

import { useUIConfig } from '~/context/UIConfigProvider';
import Accordion from '~/components/templates/components/accordion';
import { FAQ_DATA } from '~/lib/constants';

export default function FAQ() {
  const { faqSection } = useUIConfig();

  if (!faqSection) return null;

  const faqData = faqSection.faqs.length > 0 ? faqSection.faqs : FAQ_DATA;

  return (
    <div id='faq' className='w-full bg-[#3B82F6] py-[60px] lg:py-[120px]'>
      <div className='mx-[10px] max-w-[1280px] space-y-6 lg:space-y-12 xl:mx-auto'>
        <div className='flex flex-col space-y-4 text-center lg:space-y-6'>
          <span className='text-[30px] font-[800] leading-[40px] text-white lg:text-[44px] lg:leading-[56px]'>
            {faqSection?.heading ?? 'Most Asked Tree Cutting Service Questions'}
          </span>
          <span className='text-[15px] font-[500] leading-[20px] text-[#FFFFFFCC] lg:text-[18px] lg:leading-[28px]'>
            {faqSection?.subheading ??
              'Answers to Your Tree Cutting Service Questions - Your Go-To Resource for Expert Solutions in New York.'}
          </span>
        </div>
        <div className='flex flex-col space-y-3 lg:space-y-6'>
          {faqData?.map((faq, index) => (
            <Accordion title={faq.question} description={faq.answer} key={`faq-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
