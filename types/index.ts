// 공통 타입 정의

export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export interface Stat {
  label: string;
  value: string;
  change?: string;
  changeType?: 'increase' | 'decrease' | 'neutral';
}

export interface Testimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  image?: string;
  rating?: number;
}
