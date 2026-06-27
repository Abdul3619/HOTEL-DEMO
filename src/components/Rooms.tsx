import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import { rooms } from '../data';
import { Users, Expand, BedDouble, Check } from 'lucide-react';

export default function Rooms() {
  const { t, language } = useLanguage();

  return (
    <section id="rooms" className="py-32 bg-brand-dark relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-brand-white mb-6"
          >
            {t('roomsTitle')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-ivory/70 text-lg max-w-2xl font-light"
          >
            {t('roomsSubtitle')}
          </motion.p>
        </div>

        <div className="space-y-16">
          {rooms.map((room, index) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-3/5 overflow-hidden rounded-sm group relative">
                <div className="absolute inset-0 bg-brand-dark/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src={room.image} 
                  alt={room.name[language] || room.name['en']}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>

              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <h3 className="text-3xl font-serif text-brand-white mb-4">{room.name[language] || room.name['en']}</h3>
                
                <div className="flex items-center space-x-6 mb-8 text-sm text-brand-ivory/80">
                  <div className="flex items-center"><Users className="w-4 h-4 mr-2 text-brand-gold" /> {t('capacity', { n: room.capacity })}</div>
                  <div className="flex items-center"><Expand className="w-4 h-4 mr-2 text-brand-gold" /> {room.size}</div>
                  <div className="flex items-center"><BedDouble className="w-4 h-4 mr-2 text-brand-gold" /> {room.bedType[language] || room.bedType['en']}</div>
                </div>

                <div className="mb-8">
                  <ul className="grid grid-cols-2 gap-y-3">
                    {room.amenities.map((amenity, i) => (
                      <li key={i} className="flex items-center text-sm text-brand-ivory/70">
                        <Check className="w-3 h-3 mr-3 text-brand-gold" />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-end justify-between mt-auto pt-8 border-t border-brand-ivory/10">
                  <div>
                    <span className="text-3xl font-serif text-brand-gold">${room.price}</span>
                    <span className="text-xs text-brand-ivory/50 uppercase tracking-widest ml-2">{t('nightly')}</span>
                  </div>
                  <a href="#booking" className="px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark text-xs tracking-widest uppercase transition-all duration-300">
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
