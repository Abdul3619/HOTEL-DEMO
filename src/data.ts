import { ReactNode } from 'react';
import { 
  Wifi, Coffee, Car, Dumbbell, Droplets, Utensils, 
  GlassWater, ConciergeBell, Waves, Plane, Heart,
  Briefcase, Star
} from 'lucide-react';

export const rooms = [
  {
    id: 'deluxe',
    name: { en: 'Deluxe Room', fr: 'Chambre Deluxe' },
    capacity: 2,
    bedType: { en: 'King Size', fr: 'Lit King Size' },
    size: '45 sqm',
    amenities: ['City View', 'Rain Shower', 'Minibar', 'Free WiFi'],
    price: 500,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'executive',
    name: { en: 'Executive Suite', fr: 'Suite Exécutive' },
    capacity: 3,
    bedType: { en: 'King Size + Sofa', fr: 'Lit King Size + Canapé' },
    size: '75 sqm',
    amenities: ['Ocean View', 'Bathtub', 'Lounge Area', 'Nespresso'],
    price: 850,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'family',
    name: { en: 'Family Suite', fr: 'Suite Familiale' },
    capacity: 4,
    bedType: { en: '2 Queen Size', fr: '2 Lits Queen Size' },
    size: '90 sqm',
    amenities: ['Pool View', '2 Bathrooms', 'Game Console', 'Balcony'],
    price: 1100,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 'presidential',
    name: { en: 'Presidential Suite', fr: 'Suite Présidentielle' },
    capacity: 4,
    bedType: { en: '2 King Size', fr: '2 Lits King Size' },
    size: '150 sqm',
    amenities: ['Panoramic View', 'Private Jacuzzi', 'Dining Room', 'Butler'],
    price: 2500,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'penthouse',
    name: { en: 'Penthouse Suite', fr: 'Suite Penthouse' },
    capacity: 6,
    bedType: { en: '3 King Size', fr: '3 Lits King Size' },
    size: '250 sqm',
    amenities: ['360° View', 'Private Pool', 'Chef Kitchen', 'Helipad Access'],
    price: 5000,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop'
  }
];

export const amenitiesList = [
  { id: 'pool', icon: Waves, name: { en: 'Infinity Pool', fr: 'Piscine à Débordement' }, desc: { en: 'Breathtaking ocean views.', fr: 'Vue imprenable sur l\'océan.' } },
  { id: 'spa', icon: Droplets, name: { en: 'Luxury Spa', fr: 'Spa de Luxe' }, desc: { en: 'Rejuvenating holistic treatments.', fr: 'Soins holistiques rajeunissants.' } },
  { id: 'fitness', icon: Dumbbell, name: { en: 'Fitness Center', fr: 'Centre de Remise en Forme' }, desc: { en: 'State-of-the-art equipment.', fr: 'Équipement de pointe.' } },
  { id: 'dining', icon: Utensils, name: { en: 'Fine Dining', fr: 'Gastronomie' }, desc: { en: 'Michelin-starred culinary experiences.', fr: 'Expériences culinaires étoilées.' } },
  { id: 'conference', icon: Briefcase, name: { en: 'Conference Hall', fr: 'Salles de Conférence' }, desc: { en: 'Premium event spaces.', fr: 'Espaces d\'événements premium.' } },
  { id: 'transfer', icon: Plane, name: { en: 'Airport Transfer', fr: 'Transfert Aéroport' }, desc: { en: 'Chauffeur-driven luxury cars.', fr: 'Voitures de luxe avec chauffeur.' } },
  { id: 'wifi', icon: Wifi, name: { en: 'High-Speed WiFi', fr: 'WiFi Haut Débit' }, desc: { en: 'Seamless connectivity everywhere.', fr: 'Connectivité sans faille partout.' } },
  { id: 'lounge', icon: GlassWater, name: { en: 'Private Lounge', fr: 'Salon Privé' }, desc: { en: 'Exclusive access for suite guests.', fr: 'Accès exclusif pour les clients des suites.' } },
  { id: 'concierge', icon: ConciergeBell, name: { en: '24/7 Concierge', fr: 'Conciergerie 24/7' }, desc: { en: 'At your service anytime.', fr: 'À votre service à tout moment.' } }
];

export const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop',
    caption: { en: 'Luxury Exterior', fr: 'Extérieur de Luxe' }
  },
  {
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop',
    caption: { en: 'Grand Lobby', fr: 'Grand Hall' }
  },
  {
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2000&auto=format&fit=crop',
    caption: { en: 'Presidential Suite', fr: 'Suite Présidentielle' }
  },
  {
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop',
    caption: { en: 'Infinity Pool', fr: 'Piscine à Débordement' }
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop',
    caption: { en: 'Fine Dining', fr: 'Gastronomie' }
  },
  {
    src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop',
    caption: { en: 'Holistic Spa', fr: 'Spa Holistique' }
  },
  {
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop',
    caption: { en: 'Elegant Bathroom', fr: 'Salle de Bain Élégante' }
  },
  {
    src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2000&auto=format&fit=crop',
    caption: { en: 'Ocean View Balcony', fr: 'Balcon Vue Océan' }
  }
];

export const testimonials = [
  {
    name: "Eleanor Vance",
    country: "United Kingdom",
    text: { en: "The best hotel experience I've ever had. Truly phenomenal.", fr: "La meilleure expérience hôtelière que j'ai jamais eue. Vraiment phénoménal." },
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Julien Dubois",
    country: "France",
    text: { en: "Exceptional service from check-in to check-out. The attention to detail is unmatched.", fr: "Un service exceptionnel de l'arrivée au départ. L'attention aux détails est inégalée." },
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Aisha Patel",
    country: "Singapore",
    text: { en: "Beautiful rooms and unforgettable hospitality. We will definitely return next year.", fr: "Des chambres magnifiques et une hospitalité inoubliable. Nous reviendrons l'année prochaine sans hésiter." },
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
  }
];

// Special offers are example offers for this demo hotel (shown with an "Example offer" label): prices, dates
// and terms are illustrative. "Book this offer" fills in the booking search with the offer's stay.
export interface Offer {
  id: string;
  title: { en: string; fr: string };
  badge: { en: string; fr: string };
  priceFrom: number;
  nights: number;
  // First night of the stay, counted from today: 'next-friday' or a number of days ahead
  start: 'next-friday' | number;
  adults: number;
  children: number;
  roomType: string;
  validUntil: { en: string; fr: string };
  benefits: { en: string; fr: string }[];
  terms: { en: string; fr: string };
  image: string;
}

export const offers: Offer[] = [
  {
    id: 'weekend',
    title: { en: 'Weekend Getaway', fr: 'Escapade le Week-end' },
    badge: { en: '15% off', fr: '-15 %' },
    priceFrom: 680,
    nights: 2,
    start: 'next-friday',
    adults: 2,
    children: 0,
    roomType: 'deluxe',
    validUntil: { en: 'Friday and Saturday arrivals until 31 March', fr: 'Arrivées vendredi et samedi jusqu\'au 31 mars' },
    benefits: [
      { en: '2 nights in a Deluxe Room', fr: '2 nuits en Chambre Deluxe' },
      { en: 'Breakfast for two each morning', fr: 'Petit-déjeuner pour deux chaque matin' },
      { en: 'Late check-out until 14:00', fr: 'Départ tardif jusqu\'à 14h00' },
    ],
    terms: { en: 'Subject to availability. Free cancellation up to 7 days before arrival.', fr: 'Selon disponibilité. Annulation gratuite jusqu\'à 7 jours avant l\'arrivée.' },
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'family-pkg',
    title: { en: 'Family Vacation', fr: 'Vacances en Famille' },
    badge: { en: 'Kids stay free', fr: 'Enfants gratuits' },
    priceFrom: 1450,
    nights: 5,
    start: 21,
    adults: 2,
    children: 2,
    roomType: 'family',
    validUntil: { en: 'Stays of 5 nights or more, all year', fr: 'Séjours de 5 nuits ou plus, toute l\'année' },
    benefits: [
      { en: '5 nights in a Family Suite', fr: '5 nuits en Suite Familiale' },
      { en: 'Kids Club access for under-12s', fr: 'Accès au Club Enfants pour les moins de 12 ans' },
      { en: 'Return airport transfer', fr: 'Transfert aéroport aller-retour' },
    ],
    terms: { en: 'Up to 2 children under 12 sharing with 2 adults. Subject to availability.', fr: 'Jusqu\'à 2 enfants de moins de 12 ans partageant avec 2 adultes. Selon disponibilité.' },
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'honeymoon',
    title: { en: 'Honeymoon Package', fr: 'Forfait Lune de Miel' },
    badge: { en: 'VIP experience', fr: 'Expérience VIP' },
    priceFrom: 2400,
    nights: 4,
    start: 30,
    adults: 2,
    children: 0,
    roomType: 'presidential',
    validUntil: { en: 'Within 12 months of your wedding date', fr: 'Dans les 12 mois suivant votre mariage' },
    benefits: [
      { en: '4 nights in the Presidential Suite', fr: '4 nuits en Suite Présidentielle' },
      { en: 'Couples massage (90 min)', fr: 'Massage en duo (90 min)' },
      { en: 'Private candlelit dinner on the terrace', fr: 'Dîner privé aux chandelles en terrasse' },
    ],
    terms: { en: 'Proof of marriage date may be requested at check-in.', fr: 'Une preuve de la date du mariage peut être demandée à l\'arrivée.' },
    image: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=1200&auto=format&fit=crop',
  },
];
