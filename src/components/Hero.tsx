import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../i18n';
import { useBooking } from '../context/BookingContext';
import { Calendar, Users, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const { t } = useLanguage();
  const { searchData, updateSearchData } = useBooking();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <>
      <section id="home" className="relative h-screen lg:h-[480px] w-full overflow-hidden">
        {/* Background Video with Parallax */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-[#1a1a1a] mix-blend-multiply" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-70"
            poster="https://images.unsplash.com/photo-1542314831-c6a4d1409e1c?q=80&w=2000&auto=format&fit=crop"
          >
            <source src="https://cdn.coverr.co/videos/coverr-a-beautiful-resort-with-a-pool-2277/1080p.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Floating Header Stats */}
        <div className="absolute top-8 right-8 hidden lg:flex gap-8 z-20">
          <div className="text-center">
            <p className="text-[#D4AF37] font-serif text-xl">4.9/5</p>
            <p className="text-[8px] uppercase tracking-tighter opacity-60 text-[#D9D9D9]">{t('statRating')}</p>
          </div>
          <div className="text-center">
            <p className="text-[#D4AF37] font-serif text-xl">120+</p>
            <p className="text-[8px] uppercase tracking-tighter opacity-60 text-[#D9D9D9]">{t('statRooms')}</p>
          </div>
          <div className="text-center">
            <p className="text-[#D4AF37] font-serif text-xl">50k+</p>
            <p className="text-[8px] uppercase tracking-tighter opacity-60 text-[#D9D9D9]">{t('statGuests')}</p>
          </div>
        </div>

        {/* Hero Text Content */}
        <div className="absolute bottom-16 left-6 lg:left-12 z-20 max-w-2xl pt-32 lg:pt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl text-[#F5F2EB] leading-tight mb-4 drop-shadow-lg"
          >
            {t('heroTitle')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-sm text-[#D9D9D9]/80 leading-relaxed max-w-md drop-shadow-md hidden lg:block"
          >
            {t('heroSubtitle')}
          </motion.p>
        </div>
      </section>

      {/* Glassmorphism Booking Bar */}
      <section className="relative z-30 -mt-10 px-6 lg:px-12 pb-12 lg:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-auto">
            <div className="flex flex-col gap-1 w-full md:w-auto">
              <label className="text-[10px] uppercase tracking-widest text-[#D4AF37]">{t('checkIn')}</label>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-[#D9D9D9]/70" />
                <input 
                  type="date" 
                  value={searchData.checkIn}
                  onChange={(e) => updateSearchData({ checkIn: e.target.value })}
                  className="bg-transparent text-white w-full focus:outline-none placeholder-white/50 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" 
                />
              </div>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-white/10"></div>
            
            <div className="flex flex-col gap-1 w-full md:w-auto">
              <label className="text-[10px] uppercase tracking-widest text-[#D4AF37]">{t('checkOut')}</label>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-[#D9D9D9]/70" />
                <input 
                  type="date" 
                  value={searchData.checkOut}
                  onChange={(e) => updateSearchData({ checkOut: e.target.value })}
                  className="bg-transparent text-white w-full focus:outline-none [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" 
                />
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/10"></div>

            <div className="flex flex-col gap-1 w-full md:w-auto">
              <label className="text-[10px] uppercase tracking-widest text-[#D4AF37]">{t('guests')}</label>
              <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-[#D9D9D9]/70" />
                  <select 
                    value={searchData.adults} 
                    onChange={(e) => updateSearchData({ adults: parseInt(e.target.value) })}
                    className="bg-transparent text-white focus:outline-none appearance-none"
                  >
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num} className="bg-[#151515] text-white">{num} {t('adults')}</option>
                    ))}
                  </select>
                </div>
                <ChevronDown className="w-4 h-4 ml-4 text-[#D9D9D9]/70 hover:text-[#D4AF37] transition-colors" />
              </div>
            </div>
          </div>

          <a href="#booking" className="bg-[#D4AF37] text-[#0B0B0B] px-8 py-3 rounded-md font-bold uppercase text-xs tracking-widest hover:bg-[#F5F2EB] transition-colors whitespace-nowrap w-full lg:w-auto text-center">
            {t('searchAvailability')}
          </a>
        </motion.div>
      </section>
    </>
  );
}
