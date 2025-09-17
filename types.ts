export enum ColorMode {
  Light = 'light',
  Dark = 'dark',
}

export enum UIStyle {
  Sleek = 'sleek',
  Brutalist = 'brutalist',
  Creative = 'creative',
  Minimal = 'minimal',
}

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
};