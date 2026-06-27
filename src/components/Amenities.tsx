import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import { amenitiesList } from '../data';

export default function Amenities() {
  const { t, language } = useLanguage();

  return (
    <section id="amenities" className="py-32 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-brand-white mb-6"
          >
            {t('amenitiesTitle')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-ivory/70 text-lg max-w-2xl mx-auto font-light"
          >
            {t('amenitiesSubtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {amenitiesList.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#151515] border border-white/5 p-10 rounded-lg hover:-translate-y-2 transition-transform duration-500 group relative overflow-hidden"
              >
                <div className="w-14 h-14 border border-brand-gold/30 rounded-full flex items-center justify-center mb-8 group-hover:bg-brand-gold/10 transition-colors duration-500">
                  <Icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-xl font-serif text-brand-white mb-4">{amenity.name[language] || amenity.name['en']}</h3>
                <p className="text-sm text-brand-ivory/60 font-light leading-relaxed">
                  {amenity.desc[language] || amenity.desc['en']}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
