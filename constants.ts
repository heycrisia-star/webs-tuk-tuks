import { Tour, Review, SocialLink } from './types';

export const PHONE_NUMBER = "+34 673 01 74 72";
export const WHATSAPP_LINK = "https://wa.me/34673017472";
export const GOOGLE_REVIEW_LINK = "https://search.google.com/local/writereview?placeid=ChIJo8tM4lQIo2gRAmYhs8xQFPc&source=g.page.m.np._&laa=nmx-review-solicitation-promoted-recommendation-card";
export const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/HyZqCBggSxv58c8Y6";

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'instagram', url: 'https://www.instagram.com/experiencetuktuktours', label: 'Instagram' },
  { platform: 'tiktok', url: 'https://www.tiktok.com/@experiencetuktuktours?_r=1&_t=ZN-92DcuZzXApi', label: 'TikTok' },
  { platform: 'tripadvisor', url: 'https://www.tripadvisor.es/Attraction_Review-g187514-d29945682-Reviews-Experience_Tuk_Tuk_Tours-Madrid.html', label: 'TripAdvisor' },
];

export const FAST_TOUR: Tour = {
  id: 'fast',
  title: 'Fast Tour',
  duration: '30 Minutes',
  price: 50,
  description: 'A quick yet immersive glimpse of Madrid tailored for first-time experiences.',
  highlights: ['Centro de Madrid', 'Quick Overview', 'First Experience']
};

export const MAIN_TOURS: Tour[] = [
  {
    id: 'downtown',
    title: 'Downtown Tour',
    duration: '60 Minutes',
    price: 100,
    description: 'The essential historic tour covering the architectural heart of the city.',
    highlights: [
      'Palacio Real', 'Catedral de la Almudena', 'Jardines de Oriente', 'Teatro Real', 
      'Muralla Árabe', 'San Francisco el Grande', 'Barrio La Latina', 'Barrio de las Letras', 
      'Fuente de Neptuno', 'Museo del Prado', 'Iglesia de los Jerónimos', 'Casón del Buen Retiro', 
      'Parque del Retiro', 'Puerta de Alcalá', 'Fuente de Cibeles', 'Four Seasons', 'Canalejas', 'Plaza Santa Ana'
    ]
  },
  {
    id: 'maxi',
    title: 'Maxi Tour',
    duration: '90 Minutes',
    price: 150,
    description: 'An extended experience adding the grandeur of Salamanca and Plaza de España.',
    highlights: [
      'Everything in Downtown Tour',
      'Barrio de Salamanca',
      'Paseo del Prado',
      'Estación de Atocha',
      'Gran Vía',
      'Plaza de España',
      'Hotel RIU'
    ]
  },
  {
    id: 'total',
    title: 'Total Tour',
    duration: '120 Minutes',
    price: 200,
    description: 'The complete Madrid narrative, from historic roots to modern business districts.',
    highlights: [
      'Everything in Maxi Tour',
      'Templo de Debod',
      'Paseo de la Castellana',
      'Torres Business Area',
      'Estadio Santiago Bernabéu'
    ]
  },
  {
    id: 'custom',
    title: 'Customize Service',
    duration: '90 Minutes',
    price: 150,
    description: 'Your city, your rules. Create your own bespoke route through Madrid.',
    highlights: ['Fully Personalized Route', 'Flexible Stops', 'Client Choice'],
    isCustom: true
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Elena M.",
    rating: 5,
    date: "2 weeks ago",
    text: "Absolutamente increíble. Una forma elegante y divertida de ver Madrid sin cansarse. El guía fue excepcional y los tuk tuks son silenciosos y cómodos."
  },
  {
    id: 2,
    author: "James T.",
    rating: 5,
    date: "1 month ago",
    text: "The 'Quiet Luxury' description is accurate. Private, electric, and very professional. Saw more in 90 minutes than I would have in 2 days walking."
  },
  {
    id: 3,
    author: "Sophie L.",
    rating: 5,
    date: "3 weeks ago",
    text: "Reservamos el tour al atardecer y fue mágico. La iluminación de la ciudad desde el vehículo abierto es otra historia. 100% recomendado."
  }
];

export const FAQ_ITEMS = [
  {
    question: "How many passengers fit in a vehicle?",
    answer: "Each vehicle has space for 4 passengers plus the driver."
  },
  {
    question: "Are large groups supported?",
    answer: "Yes. We have 2 vehicles available, allowing us to accommodate groups of up to 8 people simultaneously, so everyone can enjoy the experience together."
  },
  {
    question: "Is the tour suitable for children?",
    answer: "Absolutely. Our electric tuk tuks are safe, comfortable, and a fun way for children to see the city without getting tired. We can also adapt the pace to family needs."
  },
  {
    question: "Do you offer child safety seats?",
    answer: "Yes. We provide an approved booster seat for children taller than 1.2 meters, in accordance with current regulations."
  },
  {
    question: "Can I customize the route?",
    answer: "Yes. With the Customize Service, you can fully personalize the itinerary together with our team, starting from a minimum duration of 30 minutes."
  },
  {
    question: "Where does the tour start and end?",
    answer: "Pick-up and drop-off take place at a central city location. We also offer pick-up at hotels within the city center, or we can meet at an iconic landmark. The exact meeting point is coordinated after booking."
  },
  {
    question: "What happens if it rains?",
    answer: "Our vehicles are equipped with rain covers. In case of heavy rain or adverse weather conditions, we can reschedule the tour or offer a refund."
  },
  {
    question: "Are the tours private?",
    answer: "Yes. All our tours are 100% private, exclusively for you and your group."
  },
  {
    question: "In which languages is the tour conducted?",
    answer: "Our drivers are fluent in Spanish, English, Portuguese, and Italian. If necessary, we use communication tools for other languages."
  },
  {
    question: "What clothing or footwear is recommended?",
    answer: "We recommend wearing comfortable clothing and closed-toe shoes to fully enjoy the tour."
  },
  {
    question: "Can I bring luggage or strollers?",
    answer: "Yes. Small bags or backpacks are allowed. Foldable strollers can be stored in the back of the vehicle."
  },
  {
    question: "Can we stop for photos?",
    answer: "Yes, provided the route and local regulations allow it. Some tourist areas can be busy, which might make stopping difficult, but we always look for the best photo spots."
  },
  {
    question: "How can I pay?",
    answer: "You can pay in cash, by credit card, or debit card directly to the driver."
  },
  {
    question: "What is the cancellation policy?",
    answer: "Cancellation is free up to 24 hours before the tour start time. After that, a penalty may apply depending on the booking conditions."
  }
];