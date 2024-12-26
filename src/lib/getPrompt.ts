import { CompanyInfo } from './ai';

const getPrompt = (companyInfo: CompanyInfo) => {
  return `

    Generate a comprehensive JSON configuration for a website based on the following company information:
           Company Info: ${JSON.stringify(companyInfo)}

           Replace all image paths in the JSON provided below with the following images by matching the image descriptions to the relevant sections. Duplicate images if necessary to ensure every image path is filled including services. Place each image in its correct section based on its description
    
          Ensure that the JSON includes all the following properties with detailed structures:
          - header (with topBar, navbar, contactButton)
          - heroSection (with labels, heading, subheading, callToAction, rating, heroImage)
          - servicesSection (including id, label, heading, services array with title, description, link, and icon, and serviceImage)
          - aboutSection (with detailed company information, image, callToAction)
          - quoteSection (heading, subheading, callToAction)
          - gallerySection (with images and descriptions) at least 6 items
          - statsSection (relevant company stats)
          - testimonialsSection (with detailed customer feedback) at least 5 items
          - contactSection (with contact details, call to action)
          - faqSection (common questions and answers) at least 5 items
          - locationsSection (geographical service areas)
          - footer (companyName, with logo, companyInfo, socialLinks, and quick links)
    
          example: {
            header: {
              topBar: {
                heading: 'Storm ready Roofing Construction LLC',
                socialLinks: {
                  facebook: 'https://facebook.com/roofing',
                  twitter: 'https://twitter.com/roofing',
                  instagram: 'https://instagram.com/roofing',
                  pinterest: 'https://www.pinterest.com',
                },
              },
              navbar: {
               
                logo: {
                  src: '/path/to/logo.png', 
                  alt: 'logo',
                },
                companyName: 'Roofing Service',
                navItems: [
                  {
                    id: 1,
                    link: '#home',
                    label: 'Home',
                  },
                  {
                    id: 2,
                    link: '#about',
                    label: 'About',
                  },
                  {
                    id: 3,
                    link: '#services',
                    label: 'Services',
                  },
                  {
                    id: 4,
                    link: '#blog',
                    label: 'Blog',
                  },
                  {
                    id: 5,
                    link: '#quote',
                    label: 'Quote',
                  },
                ],
                contactButton: {
                  label: 'Contact Our Experts',
                  link: '#contact',
                },
              },
            },
          
            heroSection: {
              id: 'home',
             
              label: 'Your Top Choice for Quality and Reliability!',
              heading: 'Expert Roofing Services in Bartow, FL',
              subheading: '24/7 Emergency Service in Tampa FL',
              callToAction: {
                label: 'Our Services',
                link: '#services',
              },
              rating: {
                title: '500+ Satisfied Customers',
                stars: 5,
                users: ['/images/user1.jpg', '/images/user2.jpg', '/images/user3.jpg'],
              },
              heroImage: {
                src: '/images/hero.jpg',
                alt: '',
              },
            },
          
             servicesSection: {
    id: 'services',
    label: 'Services',
    heading: 'Our Featured Roofing Services',
    services: [
      {
        id: '1',
        image: 'service1.png',
        title: 'Roof installation and replacement',
        subtitle: 'Expert solutions for new roofs or replacements',
        description:
          'Ensure your home is well-protected with our expert roof installation and replacement services. ',
      },
      {
        id: '2',
        image: 'service2.png',
        title: 'Roof repairs',
        subtitle: 'Reliable fixes to restore your roof’s integrity',
        description:
          'From minor leaks to significant structural damage, our comprehensive roof repair services are designed to address all your roofing concerns quickly and efficiently. ',
      },
      {
        id: '3',
        image: 'service3.png',
        title: 'Roof inspections and maintenance',
        subtitle: 'Preventive care to extend your roof’s lifespan',
        description:
          'Prolong the life of your roof with our detailed inspection and maintenance services.',
      },
    ],
    callToAction: {
      link: '/call',
      label: 'Call Today!',
      phone: '314-422-4704',
    },
  },
            
            aboutSection: {
              id: 'about',
             
              label: 'About Us',
              heading: 'Your Trusted Experts',
              info: 'At Storm Ready Roofing Construction LLC, we take pride in providing top-quality roofing services to the Bartow, Florida community',
              callToAction: {
                label: 'Call Today!',
                link: '/call',
                phone: '+8801882754521',
              },
              aboutImage: {
                src: '/images/about-us.jpg',
                alt: 'about us',
              },
            },
            quoteSection: {
              id: 'quote',
             
              heading: 'Get Your Free Roofing Quote',
              subheading: 'Just fill out your info and will get back to you right away and schedule a time to set up a meeting.',
              callToAction: {
                label: 'Get a Quote',
                link: '#',
              },
            },
          
            gallerySection: {
              id: 'gallery',
             
              label: 'Photo Gallery',
              heading: 'See Our Work',
              subheading: 'A Showcase of Quality and Craftsmanship',
              images: [
                {
                  src: '/images/gallery1.jpg',
                  alt: 'gallery image',
                },
                {
                  src: '/images/gallery2.jpg',
                  alt: 'gallery image',
                },
                {
                  src: '/images/gallery3.jpg',
                  alt: 'gallery image',
                },
                {
                  src: '/images/gallery4.jpg',
                  alt: 'gallery image',
                },
                {
                  src: '/images/gallery5.jpg',
                  alt: 'gallery image',
                },
                {
                  src: '/images/gallery6.jpg',
                  alt: 'gallery image',
                },
              ],
            },
          
            statsSection: {
              id: 'reasons',
             
              heading: 'Why Choose Pro Roofers',
              subheading: 'Why choose pro roofers for your roofing needs?',
              stats: [
                {
                  label: 'Years of Experience',
                  value: '12+',
                },
                {
                  label: 'Satisfied Customers',
                  value: '2500+',
                },
                {
                  label: 'Projects Completed',
                  value: '2500+',
                },
              ],
            },
            testimonialsSection: {
              id: 'testimonials',
             
              heading: 'Customer Testimonials for Pro Roofers Rental in Boston',
              testimonials: [
                {
                  author: 'Jane Doe',
                  image: '/images/user1.jpg',
                  detail:
                    'Hi there, I recently had an amazing experience with Storm Ready Roofing Construction LLC. I highly recommend them for anyone in need of roofing services. - Sarah Smith',
                  companyName: 'Google',
                },
                {
                  author: 'John Smith',
                  image: '/images/user2.jpg',
                  detail:
                    'Hi there, I recently had an amazing experience with Storm Ready Roofing Construction LLC. I highly recommend them for anyone in need of roofing services. - Sarah Smith',
                  companyName: 'Google',
                },
                {
                  author: 'Mary Johnson',
                  image: '/images/user3.jpg',
                  detail:
                    'Hi there, I recently had an amazing experience with Storm Ready Roofing Construction LLC. I highly recommend them for anyone in need of roofing services. - Sarah Smith',
                  companyName: 'Google',
                },
                {
                  author: 'Mary Johnson',
                  image: '/images/user1.jpg',
                  detail:
                    'Hi there, I recently had an amazing experience with Storm Ready Roofing Construction LLC. I highly recommend them for anyone in need of roofing services. - Sarah Smith',
                  companyName: 'Google',
                },
              ],
            },
            contactSection: {
              id: 'contact',
             
              heading: 'Get Your Free Quote',
              subheading: 'Pro Roofing Quote',
              callToAction: {
                label: 'submit',
                link: '#',
              },
            },
            faqSection: {
              id: 'faq',
             
              heading: 'Most Asked Roofing Questions',
              subheading: 'Answers to Your Roofing Questions - Your Go-To Resource for Expert Solutions in Boston.',
          
              faqs: [
                {
                  question: 'Do you offer both residential and commercial roofing services?',
                  answer:
                    'Yes, we have extensive experience in both residential and commercial roofing.',
                },
                {
                  question: 'What types of roofing materials do you work with?',
                  answer:
                    'We work with a variety of roofing materials including asphalt shingles, metal roofing, flat roofing, tile, and more.',
                },
                {
                  question: 'How do I request a roofing inspection or estimate?',
                  answer:
                    'You can request a roofing inspection or estimate by contacting us through our website, phone, or email.',
                },
                {
                  question: 'What factors influence the cost of a roofing project?',
                  answer:
                    'The cost of a roofing project is influenced by several factors including the size of the roof, the type of materials used, the complexity of the roof design, labor costs, and any additional features such as skylights or insulation.',
                },
                {
                  question: 'How long does a typical roofing project take to complete?',
                  answer:
                    'The duration of a roofing project depends on the size and complexity of the roof.',
                },
                {
                  question: 'Do you provide emergency roofing services?',
                  answer:
                    'Yes, we offer emergency roofing services to address urgent issues such as leaks, storm damage, or structural problems. Contact us anytime for immediate assistance.',
                },
                {
                  question: 'How often should I have my roof inspected and maintained?',
                  answer:
                    'We recommend having your roof inspected at least once a year, as well as after major weather events.',
                },
                {
                  question: 'Are your roofing services covered by a warranty?',
                  answer:
                    'Yes, we provide warranties on both materials and labor for our roofing services.',
                },
                {
                  question: 'Can you help with insurance claims for roofing damage?',
                  answer:
                    'Absolutely. We can assist you with the insurance claim process by providing detailed assessments and documentation of the roofing damage. Our team will work with your insurance company to ensure that your claim is processed smoothly.',
                },
                {
                  question: 'What measures do you take to ensure safety during roofing projects?',
                  answer:
                    'Safety is our top priority. Our team follows stringent safety protocols, including the use of proper safety gear and equipment.',
                },
              ],
            },
           locationsSection: {
    id: 'locations',
    label: 'Areas',
    heading: 'Areas We Serve',
    locations: [
      {
        name: 'New York',
        latitude: 40.7128,
        longitude: -74.006,
      },
      {
        name: 'Brooklyn',
        latitude: 40.6782,
        longitude: -73.9442,
      },
      {
        name: 'Queens',
        latitude: 40.7282,
        longitude: -73.7949,
      },
      {
        name: 'Manhattan',
        latitude: 40.7831,
        longitude: -73.9712,
      },
    ],
    subheading: 'Servicing New York and surrounding areas.',
    initialView: {
      zoom: 10,
      latitude: 40.7128,
      longitude: -74.006,
    },
  },
            footer: {
              id: 'footer',
             
          
              companyName:'Expert Roofing Services'
          
              logo: {
                src: '/path/to/logo.png',
                alt: 'logo',
              },
              companyInfo: {
                name: 'Expert Roofing Services',
                phone: '(123) 456-7890',
                email: 'info@roofing.com',
                address: '123 Roofing St, Bartow, FL',
              },
              info: ' MESSAGE US. Get in touch below. Ask any question or get a free quote',
              socialLinks: {
                facebook: 'https://facebook.com/roofing',
                twitter: 'https://twitter.com/roofing',
                instagram: 'https://instagram.com/roofing',
                pinterest: 'https://pinterest.com/roofing',
              },
              newsletter: {
                show: false,
                heading: 'Subscribe to Our Newsletter',
                placeholder: 'Enter your email',
                button: {
                  label: 'Subscribe',
                  action: '#',
                },
              },
              quickLinks: [
                {
                  id: 2,
                  link: '#about',
                  label: 'About',
                },
                {
                  id: 3,
                  link: '#services',
                  label: 'Services',
                },
                {
                  id: 4,
                  link: '#blog',
                  label: 'Blog',
                },
                {
                  id: 5,
                  link: '#quote',
                  label: 'Quote',
                },
              ],
              copyright: 'All Rights Reserved',
            },
          };
    
          Do not change or rename the image file path. The image path should remain exactly the same as the example data image file.
    
         
          Return the JSON data only, without any additional text or explanations.`;
};

export default getPrompt;
