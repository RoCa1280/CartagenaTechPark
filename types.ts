import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
}

export interface EcosystemStat {
  year: string;
  startups: number;
  investment: number;
}