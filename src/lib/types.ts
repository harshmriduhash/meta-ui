// Define types for each section of the config

export interface Logo {
  src: string;
  alt: string;
}

export interface NavItem {
  id: number;
  label: string;
  link: string;
}

export interface ContactButton {
  label?: string;
  link?: string;
}

export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  pinterest?: string;
}
export interface Header {
  topBar?: {
    heading?: string;
    socialLinks?: SocialLinks;
  };
  navbar: {
    logo?: Logo;
    companyName?: string;
    navItems?: NavItem[];
    contactButton?: ContactButton;
  };
}

export interface CallToAction {
  label?: string;
  link?: string;
  phone?: string; // optional for general use
}

export interface Rating {
  title?: string;
  stars?: number;
  users?: string[];
}

export interface Image {
  src?: string;
  alt?: string;
}

export interface HeroSection {
  id?: string;
  label?: string;
  heading?: string;
  subheading?: string;
  callToAction?: CallToAction;
  rating?: Rating;
  heroImage?: Image;
}

export interface Service {
  id?: string;
  title?: string;
  description?: string;
  subtitle?: string;
  image?: string;
}
export interface ServiceContent {
  heading?: string;
  subheading?: string;
  info?: string;
}
export interface ServicesSection {
  id?: string;
  label?: string;
  heading?: string;
  services?: Service[];
  serviceContent?: ServiceContent;
  serviceImage?: Image;
  callToAction?: CallToAction;
}

export interface BeforeAfterResult {
  beforeImg: string;
  afterImg: string;
}

export interface BeforeAfterSection {
  id?: string;
  label?: string;
  heading?: string;
  subheading?: string;
  results?: BeforeAfterResult[];
}

export interface AboutSection {
  id?: string;
  label?: string;
  heading?: string;
  info?: string;
  callToAction?: CallToAction;
  aboutImage?: Image;
}

export interface QuoteSection {
  id?: string;
  heading?: string;
  subheading?: string;
  callToAction?: CallToAction;
}

export interface GallerySection {
  id?: string;

  label?: string;
  heading?: string;
  subheading?: string;
  images?: Image[];
}

export interface Stats {
  label?: string;
  value?: string;
}

export interface StatsSection {
  id?: string;
  heading?: string;
  subheading?: string;
  stats?: Stats[];
}

export interface Testimonial {
  author: string;
  image?: string;
  detail: string;
  companyName?: string;
}

export interface TestimonialsSection {
  id?: string;
  heading?: string;
  testimonials: Testimonial[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQSection {
  id?: string;
  heading?: string;
  subheading?: string;
  faqs: FAQ[];
}

export interface Location {
  name: string;
  latitude: number;
  longitude: number;
}

export interface LocationsSection {
  id?: string;
  label?: string;
  heading?: string;
  subheading?: string;
  locations: Location[];
}

export interface CompanyInfo {
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
}

export interface QuickLink {
  id: number;
  label: string;
  link: string;
}

export interface Newsletter {
  heading?: string;
  placeholder?: string;
  button?: {
    label?: string;
    action?: string;
  };
}

export interface ContactSection {
  id?: string;
  heading?: string;
  subheading?: string;
  callToAction: CallToAction;
}

export interface Footer {
  id?: string;
  companyName?: string;
  companyInfo?: CompanyInfo;
  quickLinks: QuickLink[];
  socialLinks?: SocialLinks;
  newsletter?: Newsletter;
  logo?: Image;
  copyright?: string;
  info?: string;
  backgroundImage?: string;
}

// Main config  interface
export interface Config {
  header?: Header;
  heroSection?: HeroSection;
  servicesSection?: ServicesSection;
  beforeAfterSection?: BeforeAfterSection;
  aboutSection?: AboutSection;
  quoteSection?: QuoteSection;
  gallerySection?: GallerySection;
  statsSection?: StatsSection;
  testimonialsSection?: TestimonialsSection;
  contactSection?: ContactSection;
  faqSection?: FAQSection;
  locationsSection?: LocationsSection;
  footer?: Footer;
}

export interface ContactEmailForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  to: string;
}
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}
