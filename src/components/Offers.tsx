import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import { offers } from '../data';
import { Check } from 'lucide-react';

export default function Offers() {
  const { t, language } = useLanguage();

  return (
    <section className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-brand-white mb-6"
          >
            {t('offersTitle')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-ivory/70 text-lg max-w-2xl font-light"
          >
            {t('offersSubtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-lg border border-white/5"
            >
              <div className="h-[450px] w-full relative">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent z-10" />
                <img 
                  src={offer.image} 
                  alt={offer.title[language] || offer.title['en']}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 z-20 bg-brand-gold text-brand-dark text-xs font-bold px-4 py-2 uppercase tracking-widest">
                  {offer.badge}
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <h3 className="text-2xl font-serif text-brand-white mb-6">{offer.title[language] || offer.title['en']}</h3>
                  <ul className="space-y-3 mb-8">
                    {offer.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-brand-ivory/80">
                        <Check className="w-4 h-4 mr-3 text-brand-gold" />
                        {benefit[language] || benefit['en']}
                      </li>
                    ))}
                  </ul>
                  <a href="#booking" className="inline-block border-b border-brand-gold text-brand-gold hover:text-brand-white hover:border-brand-white pb-1 text-sm tracking-widest uppercase transition-colors duration-300">
                    {t('bookNow')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
