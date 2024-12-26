import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import * as React from 'react';
import { ContactEmailForm } from '~/lib/types';

export default function ContactFormEmail({ name, email, phone, message }: ContactEmailForm) {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission</Preview>
      <Tailwind>
        <Body className='mx-auto my-auto bg-white px-2 font-sans'>
          <Container className='mx-auto my-[40px] max-w-[512px] rounded border border-solid border-[#eaeaea] p-[20px]'>
            <Heading className='mx-0 my-[30px] p-0 text-center text-[24px] font-bold text-black'>
              New Client Inquiry Received
            </Heading>
            <Hr className='my-4 border-gray-300' />
            <Section className='pb-4'>
              <div className='rounded-md p-4'>
                <Text className='mb-2 text-gray-700'>
                  <strong className='font-semibold'>Name:</strong> {name}
                </Text>
                <Text className='mb-2 text-gray-700'>
                  <strong className='font-semibold'>Email:</strong> {email}
                </Text>
                <Text className='text-gray-700'>
                  <strong className='font-semibold'>Phone:</strong> {phone}
                </Text>
              </div>
            </Section>
            <Hr className='my-4 border-gray-300' />
            <Section>
              <div className='bg-gray rounded-md p-4'>
                <Text className='font-semibold text-gray-700'>Message:</Text>
                <Text className='whitespace-pre-wrap text-gray-700'>{message}</Text>
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
