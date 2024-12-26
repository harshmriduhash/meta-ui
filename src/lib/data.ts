import { Config } from './types';

export const config: Config = {
  header: {
    topBar: {},
    navbar: {
      contactButton: {},
    },
  },

  heroSection: {
    callToAction: {
      label: 'Our Services',
    },
    rating: {
      title: '500+ Satisfied Customers',
      stars: 5, //max 5
      users: ['/images/user1.jpg', '/images/user2.jpg', '/images/user3.jpg'],
    },
  },

  servicesSection: {
    services: [],
    serviceImage: {},
    serviceContent: {},

    callToAction: {},
  },

  beforeAfterSection: {
    results: [],
  },

  aboutSection: {
    callToAction: {},
    aboutImage: {},
  },
  quoteSection: {
    callToAction: {},
  },

  gallerySection: {
    images: [],
  },

  statsSection: {
    stats: [],
  },
  testimonialsSection: {
    testimonials: [],
  },
  contactSection: {
    callToAction: {},
  },
  faqSection: {
    faqs: [],
  },
  locationsSection: {
    locations: [],
  },
  footer: {
    companyInfo: {},
    socialLinks: {
      facebook: 'https://facebook.com/treejaws',
      twitter: 'https://twitter.com/treejaws',
      instagram: 'https://instagram.com/treejaws',
    },

    quickLinks: [],
  },
};
