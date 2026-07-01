import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
  };
}

export const translations: Translations = {
  // Navigation
  home: { en: 'Home', fr: 'Accueil' },
  rooms: { en: 'Rooms & Suites', fr: 'Chambres & Suites' },
  amenities: { en: 'Amenities', fr: 'Équipements' },
  dining: { en: 'Dining', fr: 'Restauration' },
  gallery: { en: 'Gallery', fr: 'Galerie' },
  contact: { en: 'Contact', fr: 'Contact' },
  bookNow: { en: 'Book Now', fr: 'Réserver' },
  
  // Hero
  heroTitle: { en: 'Experience Luxury Beyond Expectations', fr: 'L\'expérience du luxe au-delà de vos attentes' },
  heroSubtitle: { en: 'Where comfort, elegance, and unforgettable memories meet. Discover exceptional hospitality designed for modern travelers.', fr: 'Où le confort, l\'élégance et les souvenirs inoubliables se rencontrent. Découvrez une hospitalité exceptionnelle conçue pour les voyageurs modernes.' },
  heroBookBtn: { en: 'Book Your Stay', fr: 'Réservez votre séjour' },
  heroExploreBtn: { en: 'Explore Rooms', fr: 'Découvrir les chambres' },

  // Stats
  statRating: { en: 'Guest Rating', fr: 'Avis des clients' },
  statRooms: { en: 'Luxury Rooms', fr: 'Chambres de luxe' },
  statGuests: { en: 'Happy Guests', fr: 'Clients satisfaits' },
  statYears: { en: 'Years of Excellence', fr: 'Années d\'excellence' },

  // Booking Widget
  checkIn: { en: 'Check-In Date', fr: 'Date d\'arrivée' },
  checkOut: { en: 'Check-Out Date', fr: 'Date de départ' },
  guests: { en: 'Guests', fr: 'Voyageurs' },
  adults: { en: 'Adults', fr: 'Adultes' },
  children: { en: 'Children', fr: 'Enfants' },
  roomType: { en: 'Room Type', fr: 'Type de chambre' },
  searchAvailability: { en: 'Search Availability', fr: 'Vérifier la disponibilité' },
  specialRequests: { en: 'Special Requests', fr: 'Demandes spéciales' },
  promoCode: { en: 'Promo Code', fr: 'Code promo' },

  // Rooms Section
  roomsTitle: { en: 'Rooms & Suites', fr: 'Chambres & Suites' },
  roomsSubtitle: { en: 'A sanctuary of refined elegance and unparalleled comfort', fr: 'Un sanctuaire d\'élégance raffinée et de confort inégalé' },
  capacity: { en: 'Up to {n} guests', fr: 'Jusqu\'à {n} personnes' },
  nightly: { en: '/ night', fr: '/ nuit' },

  // Amenities
  amenitiesTitle: { en: 'Hotel Amenities', fr: 'Équipements de l\'hôtel' },
  amenitiesSubtitle: { en: 'World-class facilities curated for your ultimate relaxation', fr: 'Des installations de classe mondiale conçues pour votre détente absolue' },

  // Dining
  diningTitle: { en: 'A Culinary Experience Worth Remembering', fr: 'Une expérience culinaire inoubliable' },
  diningSubtitle: { en: 'Savor masterfully crafted dishes in our award-winning restaurants', fr: 'Savourez des plats magistralement préparés dans nos restaurants primés' },
  reservation: { en: 'Make a Reservation', fr: 'Réserver une table' },

  // Experiences
  expTitle: { en: 'Experiences & Activities', fr: 'Expériences & Activités' },
  expSubtitle: { en: 'Immerse yourself in curated moments of pure joy', fr: 'Plongez dans des moments de pure joie sélectionnés pour vous' },

  // Gallery
  galleryTitle: { en: 'Our Gallery', fr: 'Notre Galerie' },

  // Testimonials
  testiTitle: { en: 'Guest Experiences', fr: 'Expériences de nos clients' },
  
  // Special Offers
  offersTitle: { en: 'Special Offers', fr: 'Offres Spéciales' },
  offersSubtitle: { en: 'Exclusive packages designed for extraordinary stays', fr: 'Des forfaits exclusifs conçus pour des séjours extraordinaires' },

  // Booking Section
  bookingTitle: { en: 'Reserve Your Experience', fr: 'Réservez votre expérience' },
  bookingSubtitle: { en: 'Secure your unforgettable stay at Azure Haven', fr: 'Garantissez votre séjour inoubliable à l\'Azure Haven' },

  // Contact
  contactTitle: { en: 'Get in Touch', fr: 'Nous Contacter' },
  contactSubtitle: { en: 'We are here to assist you with any inquiries', fr: 'Nous sommes là pour répondre à toutes vos demandes' },
  name: { en: 'Name', fr: 'Nom' },
  email: { en: 'Email', fr: 'E-mail' },
  phone: { en: 'Phone', fr: 'Téléphone' },
  message: { en: 'Message', fr: 'Message' },
  send: { en: 'Send Inquiry', fr: 'Envoyer la demande' },

  // Chat Widget
  chatConcierge: { en: 'Concierge', fr: 'Concierge' },
  chatOnline: { en: 'Online 24/7', fr: 'En ligne 24/7' },
  chatPlaceholder: { en: 'Type your message...', fr: 'Tapez votre message...' },
  chatWelcome: { en: 'Welcome to Azure Haven Hotel. How may I assist you today?', fr: 'Bienvenue à l\'Hôtel Azure Haven. Comment puis-je vous aider aujourd\'hui ?' },
  chatGenericReply: { en: 'Thank you for reaching out. A member of our concierge team will respond shortly.', fr: 'Merci de nous avoir contactés. Un membre de notre équipe de conciergerie vous répondra sous peu.' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en'); // Default to English

  const t = (key: string, params?: Record<string, string | number>): string => {
    const translationInfo = translations[key];
    if (!translationInfo) return key;
    
    let text = translationInfo[language] || translationInfo['en'] || key;
    
    if (params) {
      Object.keys(params).forEach(param => {
        text = text.replace(`{${param}}`, String(params[param]));
      });
    }
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
