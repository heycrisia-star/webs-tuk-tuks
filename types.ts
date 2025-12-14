export interface Tour {
  id: string;
  title: string;
  duration: string;
  price: number;
  description: string;
  highlights: string[];
  isCustom?: boolean;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface SocialLink {
  platform: 'instagram' | 'tiktok' | 'whatsapp' | 'tripadvisor' | 'email' | 'phone';
  url: string;
  label: string;
}
