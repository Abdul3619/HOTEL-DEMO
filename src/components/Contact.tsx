import { useState, type FormEvent, type MouseEvent } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  const { t, language } = useLanguage();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
  };

  // The WhatsApp button opens the on-site concierge chat (this demo has no real WhatsApp number)
  const openConcierge = (e: MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-concierge-chat'));
  };

  return (
    <section id="contact" className="py-32 bg-[#0F0F0F] relative overflow-x-clip">
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
                  {/* Demo hotel: fictional address; the phone number is in a range France reserves for fiction and .example
                      domains can never be registered, so no real business is contacted. */}
                  <h4 className="text-xl font-serif text-brand-white mb-2">Azure Haven Hotel</h4>
                  <p className="text-brand-ivory/80 font-light leading-relaxed">
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
                  <p className="text-brand-ivory/80 font-light">+33 1 99 00 32 10</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-brand-gold mr-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-serif text-brand-white mb-2">Email</h4>
                  <p className="text-brand-ivory/80 font-light">reservations@azurehaven.example</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-brand-ivory/10">

              <a href="#contact" onClick={openConcierge} className="inline-flex items-center space-x-3 px-8 py-4 press bg-[#25D366] text-[#0B0B0B] hover:bg-[#1ebe5b] transition-colors rounded-sm w-full sm:w-auto justify-center">
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-xs tracking-widest text-brand-gold uppercase">{t('name')}</label>
                <input id="contact-name" name="name" required type="text" className="w-full bg-transparent border-b border-brand-ivory/30 pb-2 text-brand-white focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-xs tracking-widest text-brand-gold uppercase">{t('email')}</label>
                <input id="contact-email" name="email" required type="email" className="w-full bg-transparent border-b border-brand-ivory/30 pb-2 text-brand-white focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-phone" className="text-xs tracking-widest text-brand-gold uppercase">{t('phone')}</label>
                <input id="contact-phone" name="phone" type="tel" className="w-full bg-transparent border-b border-brand-ivory/30 pb-2 text-brand-white focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div className="space-y-2 pt-4">
                <label htmlFor="contact-message" className="text-xs tracking-widest text-brand-gold uppercase">{t('message')}</label>
                <textarea id="contact-message" name="message" required rows={4} className="w-full bg-transparent border-b border-brand-ivory/30 pb-2 text-brand-white focus:outline-none focus:border-brand-gold transition-colors resize-none"></textarea>
              </div>
              {sent && (
                <p role="status" className="text-sm text-brand-gold">
                  {language === 'fr'
                    ? "Merci ! Ceci est un site de démonstration : dans la version en ligne, votre message est transmis à l'équipe des réservations."
                    : 'Thank you! This is a demo site: in the live version, your message is delivered to the reservations team.'}
                </p>
              )}
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
