import { motion } from 'motion/react';
import { useLanguage } from '../i18n';

export default function Dining() {
  const { t } = useLanguage();

  return (
    <section id="dining" className="relative py-32 lg:py-48 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-dark/60 z-10" />
        <motion.div
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 10, ease: "linear" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
            alt="Fine Dining" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-white mb-6 drop-shadow-lg"
        >
          {t('diningTitle')}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand-ivory/90 text-lg md:text-xl font-light mb-12 drop-shadow-md"
        >
          {t('diningSubtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#contact" className="px-8 py-4 bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark text-sm tracking-widest uppercase font-medium transition-all duration-300">
            {t('reservation')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
