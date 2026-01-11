export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface ClientItem {
  id: number;
  title: string;
  icon: string;
  desc: string;
}

export interface HowItWorkItem {
  step: string;
  title: string;
  description: string;
  primary?: boolean;
}

export interface InsightItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  date: string;
  rating: number;
}

export interface BrandItem {
  id: number;
  logo: string;
  name: string;
}
