'use client';

import React, { useState } from 'react';

import { toast } from 'react-toastify';

import { useUIConfig } from '~/context/UIConfigProvider';
import { sendEmail } from '~/lib/_actions';
import Button from '~/components/templates/components/button';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const { contactSection } = useUIConfig();

  if (!contactSection) return null;

  return (
    <div id='contact' className='w-full bg-[#F0F6FF] py-[60px] lg:py-[120px]'>
      <div className='mx-[10px] max-w-[1280px] xl:mx-auto'>
        <div className='flex flex-col space-y-2 lg:space-y-4'>
          <span className='text-[15px] font-[500] leading-[30px] text-[#3B82F6] lg:text-[20px]'>
            {contactSection?.subheading ?? 'Tree-Jaws Quote'}
          </span>
          <span className='text-[36px] font-[700] leading-[44px] text-[#02050B] lg:text-[48px] lg:leading-[56px]'>
            {contactSection?.heading ?? 'Get Your Free Quote'}
          </span>
        </div>

        <div className='mt-6 w-full rounded-2xl bg-white p-5 md:mt-12 md:p-8'>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              setLoading(true);

              try {
                const data = {
                  to: 'hungryAdmiral5@gmail.com',
                  name: formData.get('name') as string,
                  email: formData.get('email') as string,
                  phone: formData.get('phone') as string,
                  message: formData.get('message') as string,
                };

                const result = await sendEmail(data);

                if (result.success) {
                  form.reset();
                  toast.success('Thank you for reaching out!. Our support team will reach out soon.');
                }

                if (result.error) {
                  console.log('Something went wrong');
                  toast.error('Uh oh! Something went wrong.');
                }
              } catch (err) {
                console.error(err);
              } finally {
                setLoading(false);
              }
            }}
          >
            <div className='mb-4 grid grid-cols-1 gap-8 md:grid-cols-2'>
              <div>
                <label htmlFor='quote-name' className='mb-2 block text-xl font-medium leading-[30px] text-[#02050BCC]'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  className='focus:ring-blue-300 block h-16 w-full rounded border-[1px] border-[#D9D9D9] bg-[#f0f6ff] p-3 outline-0 focus:ring-2'
                  id='quote-name'
                  required
                />
              </div>
              <div>
                <label htmlFor='quote-email' className='mb-2 block text-xl font-medium leading-[30px] text-[#02050BCC]'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  className='focus:ring-blue-300 block h-16 w-full rounded border-[1px] border-[#D9D9D9] bg-[#f0f6ff] p-3 outline-0 focus:ring-2'
                  id='quote-email'
                  required
                />
              </div>
            </div>
            <div className='mb-6'>
              <label htmlFor='quote-phone' className='mb-2 block text-xl font-medium leading-[30px] text-[#02050BCC]'>
                Phone
              </label>
              <input
                name='phone'
                type='number'
                className='focus:ring-blue-300 block h-16 w-full rounded border-[1px] border-[#D9D9D9] bg-[#f0f6ff] p-3 outline-0 focus:ring-2'
                id='quote-phone'
                required
              />
            </div>
            <div className='mb-6'>
              <label htmlFor='quote-message' className='mb-2 block text-xl font-medium leading-[30px] text-[#02050BCC]'>
                Message
              </label>
              <textarea
                name='message'
                className='focus:ring-blue-300 block h-[220px] w-full rounded border-[1px] border-[#D9D9D9] bg-[#f0f6ff] p-3 outline-0 focus:ring-2'
                id='quote-message'
                required
              />
            </div>
            <Button disabled={loading} type='submit' className='w-full capitalize hover:bg-alice-blue'>
              {contactSection.callToAction?.label ?? 'Submit'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
