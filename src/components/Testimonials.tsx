import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import { testimonials } from '../data';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const { t, language } = useLanguage();

  return (
    <section className="py-32 bg-[#0F0F0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-brand-white"
          >
            {t('testiTitle')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#151515] border border-white/5 p-10 flex flex-col items-center text-center relative rounded-lg"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-2 border-brand-gold object-cover"
                />
              </div>
              
              <div className="flex items-center space-x-1 mt-12 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              
              <p className="text-brand-ivory/80 italic font-serif text-lg mb-8 leading-relaxed">
                "{testimonial.text[language] || testimonial.text['en']}"
              </p>
              
              <div className="mt-auto">
                <h4 className="text-brand-white font-medium tracking-wide uppercase text-sm mb-1">{testimonial.name}</h4>
                <p className="text-brand-gold text-xs tracking-widest uppercase">{testimonial.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
