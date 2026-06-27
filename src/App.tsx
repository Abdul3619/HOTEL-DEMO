/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './i18n';
import { BookingProvider } from './context/BookingContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Dining from './components/Dining';
import Experiences from './components/Experiences';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Offers from './components/Offers';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import FadeInSection from './components/FadeInSection';

export default function App() {
  return (
    <LanguageProvider>
      <BookingProvider>
        <div className="bg-[#0B0B0B] text-[#D9D9D9] min-h-screen font-sans selection:bg-[#D4AF37] selection:text-[#0B0B0B] flex flex-col lg:flex-row">
          <Navbar />
          <main className="flex-1 flex flex-col w-full">
            <Hero />
            <FadeInSection><Rooms /></FadeInSection>
            <FadeInSection><Amenities /></FadeInSection>
            <FadeInSection><Dining /></FadeInSection>
            <FadeInSection><Experiences /></FadeInSection>
            <FadeInSection><Offers /></FadeInSection>
            <FadeInSection><Gallery /></FadeInSection>
            <FadeInSection><Testimonials /></FadeInSection>
            <FadeInSection><Booking /></FadeInSection>
            <FadeInSection><Contact /></FadeInSection>
            <FadeInSection><Footer /></FadeInSection>
          </main>
          <ChatWidget />
        </div>
      </BookingProvider>
    </LanguageProvider>
  );
}

