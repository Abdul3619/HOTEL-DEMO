import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage, Language } from '../i18n';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const navLinks = [
    { name: t('home'), href: '#home' },
    { name: t('rooms'), href: '#rooms' },
    { name: t('amenities'), href: '#amenities' },
    { name: t('dining'), href: '#dining' },
    { name: t('gallery'), href: '#gallery' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.nav
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:flex w-64 border-r border-[#D4AF37]/20 flex-col p-8 bg-[#0B0B0B] z-50 shrink-0 h-screen sticky top-0 overflow-y-auto"
      >
        <div className="mb-12">
          <a href="#home" className="flex flex-col items-start">
            <span className="font-serif text-2xl text-[#D4AF37] tracking-widest uppercase">Azure Haven</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#D9D9D9]/60">Hôtel & Resort</span>
          </a>
        </div>

        <div className="flex-1 mt-4">
          <div className="flex flex-col space-y-6 text-sm tracking-widest uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#D9D9D9]/50 hover:text-[#D4AF37] hover:border-l-2 hover:border-[#D4AF37] hover:pl-4 pl-0 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-8 border-t border-[#D4AF37]/10 flex flex-col space-y-6">
          <a
            href="#booking"
            className="bg-[#D4AF37] text-[#0B0B0B] px-4 py-3 rounded-md font-bold uppercase text-[10px] tracking-widest text-center hover:bg-[#F5F2EB] transition-colors"
          >
            {t('bookNow')}
          </a>
          
          <div className="flex gap-4 text-[10px] font-bold">
            <button 
              onClick={() => setLanguage('fr')}
              className={`cursor-pointer transition-colors ${language === 'fr' ? 'text-[#D4AF37]' : 'text-[#D9D9D9]/30 hover:text-[#D9D9D9]/80'}`}
            >FR</button>
            <button 
              onClick={() => setLanguage('en')}
              className={`cursor-pointer transition-colors ${language === 'en' ? 'text-[#D4AF37]' : 'text-[#D9D9D9]/30 hover:text-[#D9D9D9]/80'}`}
            >EN</button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Top Bar */}
      <nav
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="px-6 flex justify-between items-center">
          <a href="#home" className="flex flex-col items-start">
            <span className="font-serif text-xl text-[#D4AF37] tracking-widest uppercase">Azure Haven</span>
          </a>
          <button
            className="text-[#D9D9D9]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-[#0B0B0B]/95 backdrop-blur-xl z-40 lg:hidden flex flex-col items-center justify-center space-y-8 pt-20"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-[#D9D9D9] hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={() => {
                toggleLanguage();
                setMobileMenuOpen(false);
              }}
              className="flex items-center space-x-2 text-[#D9D9D9] hover:text-[#D4AF37] pt-4"
            >
              <Globe className="w-5 h-5" />
              <span className="text-lg tracking-widest uppercase">{language === 'en' ? 'Passer en Français' : 'Switch to English'}</span>
            </button>

            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 px-8 py-4 bg-[#D4AF37] text-[#0B0B0B] rounded-md font-bold text-sm tracking-widest uppercase transition-all duration-300"
            >
              {t('bookNow')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
