import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-brand-white mb-6"
          >
            {t('contactTitle')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-ivory/70 text-lg max-w-2xl mx-auto font-light"
          >
            {t('contactSubtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-brand-gold mr-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-serif text-brand-white mb-2">Azure Haven Hotel</h4>
                  <p className="text-brand-ivory/70 font-light leading-relaxed">
                    123 Luxury Avenue<br />
                    Monte Carlo, 98000<br />
                    Monaco
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-brand-gold mr-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-serif text-brand-white mb-2">Reservations</h4>
                  <p className="text-brand-ivory/70 font-light">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-brand-gold mr-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-serif text-brand-white mb-2">Email</h4>
                  <p className="text-brand-ivory/70 font-light">reservations@azurehaven.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-brand-ivory/10">
              <div className="w-full h-48 rounded-sm overflow-hidden mb-8 opacity-80 hover:opacity-100 transition-opacity">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d2884.0536413726514!2d7.424426515503831!3d43.73357597911855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc26f7b3f8531%3A0x74f7784c3ac49cfc!2sCasino%20de%20Monte-Carlo!5e0!3m2!1sen!2sfr!4v1683220465360!5m2!1sen!2sfr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(1) contrast(1.2) brightness(0.8)' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <a href="#" className="inline-flex items-center space-x-3 px-8 py-4 bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors rounded-sm w-full sm:w-auto justify-center">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wide uppercase">WhatsApp Concierge</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#151515] border border-white/5 p-8 lg:p-12 rounded-lg"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs tracking-widest text-brand-gold uppercase">{t('name')}</label>
                <input type="text" className="w-full bg-transparent border-b border-brand-ivory/30 pb-2 text-brand-white focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-widest text-brand-gold uppercase">{t('email')}</label>
                <input type="email" className="w-full bg-transparent border-b border-brand-ivory/30 pb-2 text-brand-white focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-widest text-brand-gold uppercase">{t('phone')}</label>
                <input type="tel" className="w-full bg-transparent border-b border-brand-ivory/30 pb-2 text-brand-white focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div className="space-y-2 pt-4">
                <label className="text-xs tracking-widest text-brand-gold uppercase">{t('message')}</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-brand-ivory/30 pb-2 text-brand-white focus:outline-none focus:border-brand-gold transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-4 mt-8 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark text-sm tracking-widest uppercase transition-colors duration-300">
                {t('send')}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
