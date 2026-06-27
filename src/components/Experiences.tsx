import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import { Palmtree, Wind, Glasses, Flame } from 'lucide-react';

export default function Experiences() {
  const { t, language } = useLanguage();

  const experiences = [
    {
      id: 1,
      title: { en: 'Spa & Wellness Retreat', fr: 'Retraite Spa & Bien-être' },
      icon: Wind,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 2,
      title: { en: 'Private Yacht Tours', fr: 'Excursions en Yacht Privé' },
      icon: Palmtree,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop'
    },
    {
      id: 3,
      title: { en: 'Sunset Wine Tasting', fr: 'Dégustation de Vins au Coucher du Soleil' },
      icon: Glasses,
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 4,
      title: { en: 'Beachfront Dining', fr: 'Dîner en Bord de Mer' },
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-brand-white mb-6"
          >
            {t('expTitle')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-ivory/70 text-lg max-w-2xl mx-auto font-light"
          >
            {t('expSubtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group h-[400px] overflow-hidden cursor-pointer rounded-lg border border-white/5"
              >
                <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/10 transition-colors duration-500 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10" />
                
                <img 
                  src={exp.image} 
                  alt={exp.title[language] || exp.title['en']}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col items-center text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/50 flex items-center justify-center mb-4 backdrop-blur-md bg-brand-dark/30">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <h3 className="text-xl font-serif text-brand-white">{exp.title[language] || exp.title['en']}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
