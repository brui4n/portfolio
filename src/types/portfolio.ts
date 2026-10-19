export interface TechBadge {
  name: string;
  category: 'Lenguajes' | 'Frameworks' | 'Bases de Datos' | 'Patrones & Herramientas' | 'Idiomas';
  level?: string;
}

export interface Internship {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tasks: string[];
  evidenceTitle: string;
  evidenceType: string;
  evidencePlaceholder: string;
  evidenceImage?: string;
}

export interface SystemProject {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  technologies: string[];
  features: string[];
  architecture: string;
  database: string;
  screenshots: {
    title: string;
    description: string;
    placeholderText: string;
    imageUrl?: string;
  }[];
}

export interface MobileProject {
  id: string;
  title: string;
  platform: string;
  language: string;
  architecture: string;
  description: string;
  technologies: string[];
  highlights: string[];
  imageUrl?: string;
}

export interface Article {
  id: string;
  title: string;
  language: 'ES' | 'EN';
  date: string;
  author: string;
  source: string;
  sourceUrl?: string;
  summary: string;
  tags: string[];
  formalCitation: string;
}

export interface PersonalArticle {
  title: string;
  date: string;
  category: string;
  content: string[];
  takeaways: string[];
}

export interface NetworkingEvidence {
  id: string;
  title: string;
  category: 'Conexiones LinkedIn' | 'Interacciones & Mensajes' | 'Feedback Profesional';
  description: string;
  metric?: string;
  placeholderText: string;
  imageUrl?: string;
}
