import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, Palette, Type, X, Moon, LayoutDashboard } from 'lucide-react';
import { useLanguage } from '../i18n';

interface ThemeCustomizerProps {
  onOpenAdmin: () => void;
}

export default function ThemeCustomizer({ onOpenAdmin }: ThemeCustomizerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  
  const colors = [
    { name: 'Azure Gold', value: '#D4AF37' },
    { name: 'Emerald', value: '#059669' },
    { name: 'Sapphire', value: '#2563EB' },
    { name: 'Rose', value: '#E11D48' }
  ];

  const fonts = [
    { name: 'Classic', serif: '"Playfair Display", serif', sans: '"Montserrat", sans-serif' },
    { name: 'Modern', serif: '"Cinzel", serif', sans: '"Inter", sans-serif' },
    { name: 'Minimal', serif: '"Cormorant Garamond", serif', sans: '"Outfit", sans-serif' }
  ];

  const [activeColor, setActiveColor] = useState(colors[0].value);
  const [activeFont, setActiveFont] = useState(fonts[0]);

  useEffect(() => {
    // Add font imports dynamically
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500&family=Outfit:wght@300;400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--color-brand-gold', activeColor);
  }, [activeColor]);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-serif', activeFont.serif);
    document.documentElement.style.setProperty('--font-sans', activeFont.sans);
  }, [activeFont]);

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 lg:bottom-10 lg:left-[18rem] z-[60] bg-brand-gold text-brand-dark px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
      >
        <Settings className="w-5 h-5 animate-[spin_4s_linear_infinite]" />
        <span className="text-xs font-bold uppercase tracking-wider">Demo Tools</span>
      </button>

      {/* Slide-out Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-brand-dark/95 backdrop-blur-xl border-l border-white/10 z-[70] shadow-2xl overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-serif text-xl text-brand-ivory flex items-center gap-2">
                  <Settings className="w-5 h-5 text-brand-gold" />
                  Template Tools
                </h3>
                <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-white/60 mb-8">
                Use these tools to pitch the template to potential hotel clients by matching their brand identity.
              </p>

              {/* Color Customization */}
              <div className="mb-8">
                <h4 className="text-sm font-medium text-white/80 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Palette className="w-4 h-4" /> Brand Color
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setActiveColor(color.value)}
                      className={`py-2 px-3 rounded-md border text-xs transition-all flex items-center gap-2 ${
                        activeColor === color.value 
                          ? 'border-brand-gold bg-brand-gold/10 text-white' 
                          : 'border-white/10 text-white/60 hover:border-white/30'
                      }`}
                    >
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color.value }} />
                      {color.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Typography Customization */}
              <div className="mb-10">
                <h4 className="text-sm font-medium text-white/80 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Type className="w-4 h-4" /> Typography
                </h4>
                <div className="flex flex-col gap-2">
                  {fonts.map((font) => (
                    <button
                      key={font.name}
                      onClick={() => setActiveFont(font)}
                      className={`py-3 px-4 rounded-md border text-left transition-all ${
                        activeFont.name === font.name 
                          ? 'border-brand-gold bg-brand-gold/10 text-white' 
                          : 'border-white/10 text-white/60 hover:border-white/30'
                      }`}
                    >
                      <span className="block text-lg" style={{ fontFamily: font.serif }}>{font.name} Serif</span>
                      <span className="block text-xs opacity-70" style={{ fontFamily: font.sans }}>Subtext in {font.name} Sans</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Admin Panel Pitch */}
              <div className="pt-8 border-t border-white/10">
                <h4 className="text-sm font-medium text-white/80 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <LayoutDashboard className="w-4 h-4" /> Backend Demo
                </h4>
                <p className="text-xs text-white/50 mb-4">
                  Show clients how easily they can manage bookings, rooms, and analytics.
                </p>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenAdmin();
                  }}
                  className="w-full py-3 bg-brand-ivory text-brand-dark hover:bg-brand-gold hover:text-white transition-colors rounded-md font-medium text-sm"
                >
                  Open Admin Dashboard Mockup
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
