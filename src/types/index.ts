export interface Plan {
  id: string;
  name: string;
  duration: string;
  months: number;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  description: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}
