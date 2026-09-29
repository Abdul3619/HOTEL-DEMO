import { motion } from 'motion/react';
import { Check, CalendarDays } from 'lucide-react';
import { useLanguage } from '../i18n';
import { useBooking } from '../context/BookingContext';
import { offers, type Offer } from '../data';
import { todayInputValue } from './Booking';
import IllustrativeBadge from './IllustrativeBadge';
import SmartImg from './SmartImg';

// yyyy-mm-dd, `days` after today in the visitor's local time
function isoFromToday(days: number) {
  const d = new Date(`${todayInputValue()}T12:00:00`);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function daysUntilNextFriday() {
  const day = new Date().getDay(); // 0 = Sunday … 5 = Friday
  const diff = (5 - day + 7) % 7;
  return diff === 0 ? 7 : diff;
}

export default function Offers() {
  const { t, language } = useLanguage();
  const { updateSearchData } = useBooking();

  // Fill in the booking search with the offer's stay and jump to the booking form
  const bookOffer = (offer: Offer) => {
    const start = offer.start === 'next-friday' ? daysUntilNextFriday() : offer.start;
    updateSearchData({
      checkIn: isoFromToday(start),
      checkOut: isoFromToday(start + offer.nights),
      adults: offer.adults,
      children: offer.children,
      roomType: offer.roomType,
    });
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="offers" aria-labelledby="offers-heading" className="py-32 bg-brand-dark scroll-mt-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <motion.h2
            id="offers-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-brand-white mb-6"
          >
            {t('offersTitle')}
          </motion.h2>
          <p className="text-brand-ivory/80 text-lg max-w-2xl font-light mb-6">{t('offersSubtitle')}</p>
          <p className="text-brand-gold">
            <IllustrativeBadge label={language === 'fr' ? 'Offres fictives' : 'Example offers'} />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.article
              key={offer.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              aria-labelledby={`offer-${offer.id}`}
              className="group overflow-hidden rounded-lg border border-white/10 bg-[#111] flex flex-col"
            >
              <div className="relative h-56">
                <SmartImg
                  src={offer.image}
                  alt=""
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 right-4 bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1.5 uppercase tracking-widest">
                  {offer.badge[language] || offer.badge.en}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 id={`offer-${offer.id}`} className="text-2xl font-serif text-brand-white mb-2">
                  {offer.title[language] || offer.title.en}
                </h3>
                <p className="mb-5">
                  <span className="text-sm text-brand-ivory/70">{language === 'fr' ? 'à partir de' : 'from'} </span>
                  <span className="text-2xl font-serif text-brand-gold">${offer.priceFrom.toLocaleString('en-US')}</span>
                  <span className="text-sm text-brand-ivory/70"> / {offer.nights} {language === 'fr' ? 'nuits' : 'nights'}</span>
                </p>
                <ul className="space-y-3 mb-6">
                  {offer.benefits.map((benefit) => (
                    <li key={benefit.en} className="flex items-start text-sm text-brand-ivory/85">
                      <Check className="w-4 h-4 mr-3 mt-0.5 text-brand-gold shrink-0" aria-hidden="true" />
                      {benefit[language] || benefit.en}
                    </li>
                  ))}
                </ul>
                <p className="flex items-start gap-2 text-xs text-brand-ivory/70 mb-2">
                  <CalendarDays className="w-4 h-4 text-brand-gold shrink-0" aria-hidden="true" />
                  {offer.validUntil[language] || offer.validUntil.en}
                </p>
                <p className="text-xs text-brand-ivory/60 mb-8">{offer.terms[language] || offer.terms.en}</p>
                <button
                  type="button"
                  onClick={() => bookOffer(offer)}
                  className="press mt-auto w-full py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark text-xs tracking-widest uppercase font-semibold transition-colors duration-300"
                  aria-label={`${language === 'fr' ? 'Réserver cette offre' : 'Book this offer'}: ${offer.title[language] || offer.title.en}`}
                >
                  {language === 'fr' ? 'Réserver cette offre' : 'Book this offer'}
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
