import React from 'react';

import { api } from '~/trpc/server';
import { Config } from '~/lib/types';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UIConfigProvider } from '~/context/UIConfigProvider';
import Header from '~/components/templates/components/header';
import HeroSection from '~/components/templates/sections/hero';
import FeatureSection from '~/components/templates/sections/feature';
import WhyChooseSection from '~/components/templates/sections/why-choose';
import QuoteSection from '~/components/templates/sections/quote';
import GallerySection from '~/components/templates/sections/gallery';
import StatsSection from '~/components/templates/sections/stats';
import ReviewSection from '~/components/templates/sections/review';
import ContactForm from '~/components/templates/sections/contact-form';
import FAQ from '~/components/templates/sections/faq';
import ServeAreaSection from '~/components/templates/sections/serve-area';
import Footer from '~/components/templates/components/footer';

export default async function MockUpPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const mockUp = await api.mockUp.getBySlug({ slug: params.slug });

  if (!mockUp) return null;
  if (!mockUp.content) return null;

  const config = JSON.parse(JSON.stringify(mockUp?.content)) as Config;

  if (!mockUp.isEnabled)
    return (
      <div className='m-0 flex h-screen w-screen flex-col items-center justify-center bg-white font-sans text-base leading-relaxed text-gray-700 dark:bg-gray-800 dark:text-gray-300'>
        <div className='max-w-full text-center'>
          <strong className='mb-6 block text-3xl'>The mockup is currently disabled</strong>
        </div>
      </div>
    );

  return (
    <UIConfigProvider config={config}>
      <main className='min-h-screen w-full text-[#02050B]'>
        <Header />
        <HeroSection />
        <FeatureSection />
        <WhyChooseSection />
        <QuoteSection />
        <GallerySection />
        <StatsSection />
        <ReviewSection />
        <ContactForm />
        <FAQ />
        <ServeAreaSection />
        <Footer />
        <ToastContainer position='bottom-right' />
      </main>
    </UIConfigProvider>
  );
}
