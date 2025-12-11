import { NavItem, Benefit, Project, Testimonial, EcosystemStat } from './types';
import { Network, Zap, Cpu, Globe, ShieldCheck, Rocket } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Sobre Nosotros', href: '#about' },
  { label: 'Beneficios', href: '#benefits' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Infraestructura Web3',
    description: 'Nodos de alta velocidad y laboratorios de blockchain equipados para desarrollo dApp.',
    icon: Cpu,
  },
  {
    title: 'Networking Global',
    description: 'Conexión directa con fondos de inversión en Silicon Valley, Singapur y Berlín.',
    icon: Globe,
  },
  {
    title: 'Smart Funding',
    description: 'Acceso exclusivo a rondas de inversión semilla y subvenciones gubernamentales.',
    icon: Zap,
  },
  {
    title: 'Comunidad Segura',
    description: 'Espacios diseñados para la colaboración con seguridad física y digital de nivel empresarial.',
    icon: ShieldCheck,
  },
  {
    title: 'Coworking Híbrido',
    description: 'Oficinas flexibles frente al mar con conectividad redundante 24/7.',
    icon: Network,
  },
  {
    title: 'Aceleración',
    description: 'Programas de mentoría con fundadores unicornio de LatAm.',
    icon: Rocket,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'CaribeDAO',
    category: 'DeFi / Governance',
    description: 'Plataforma descentralizada para la gestión de recursos turísticos en la costa caribe.',
    imageUrl: 'https://picsum.photos/seed/tech1/400/300',
  },
  {
    id: 2,
    name: 'LogisChain',
    category: 'Logistics',
    description: 'Solución de trazabilidad portuaria utilizando tecnología blockchain inmutable.',
    imageUrl: 'https://picsum.photos/seed/tech2/400/300',
  },
  {
    id: 3,
    name: 'AgroToken',
    category: 'AgroTech',
    description: 'Tokenización de activos agrícolas para pequeños productores de la región.',
    imageUrl: 'https://picsum.photos/seed/tech3/400/300',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Valeria Martínez',
    role: 'CEO',
    company: 'CaribeDAO',
    quote: 'El Parque Tecnológico nos dio la infraestructura y los contactos que necesitábamos para escalar a nivel regional.',
    avatarUrl: 'https://picsum.photos/seed/face1/100/100',
  },
  {
    id: 2,
    name: 'Carlos Ruiz',
    role: 'CTO',
    company: 'LogisChain',
    quote: 'El ambiente de innovación aquí es incomparable. Estar rodeado de otros builders Web3 acelera todo el proceso.',
    avatarUrl: 'https://picsum.photos/seed/face2/100/100',
  },
];

export const GROWTH_STATS: EcosystemStat[] = [
  { year: '2021', startups: 12, investment: 2.5 },
  { year: '2022', startups: 28, investment: 5.2 },
  { year: '2023', startups: 45, investment: 12.8 },
  { year: '2024', startups: 82, investment: 24.5 },
];