import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n';
import { useBooking } from '../context/BookingContext';
import { Calendar, Users, CheckCircle2 } from 'lucide-react';

export default function Booking() {
  const { t, language } = useLanguage();
  const { searchData, updateSearchData, getAvailableRooms } = useBooking();
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  // If searchData changes significantly externally, reset to step 1 (optional)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchData.checkIn && searchData.checkOut) {
      setStep(2);
    }
  };

  const availableRooms = getAvailableRooms();

  return (
    <section id="booking" className="py-32 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-brand-white mb-6"
          >
            {t('bookingTitle')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-ivory/70 text-lg max-w-2xl mx-auto font-light"
          >
            {t('bookingSubtitle')}
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-[#151515] border border-white/5 p-8 lg:p-12 rounded-lg"
              >
                <form onSubmit={handleSearch} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs tracking-widest text-brand-gold uppercase">{t('checkIn')}</label>
                      <div className="flex items-center border-b border-brand-ivory/30 pb-3 focus-within:border-brand-gold transition-colors">
                        <Calendar className="w-5 h-5 mr-3 text-brand-ivory/50" />
                        <input 
                          type="date" 
                          required
                          value={searchData.checkIn}
                          onChange={e => updateSearchData({ checkIn: e.target.value })}
                          className="bg-transparent text-brand-white w-full focus:outline-none [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs tracking-widest text-brand-gold uppercase">{t('checkOut')}</label>
                      <div className="flex items-center border-b border-brand-ivory/30 pb-3 focus-within:border-brand-gold transition-colors">
                        <Calendar className="w-5 h-5 mr-3 text-brand-ivory/50" />
                        <input 
                          type="date" 
                          required
                          value={searchData.checkOut}
                          onChange={e => updateSearchData({ checkOut: e.target.value })}
                          className="bg-transparent text-brand-white w-full focus:outline-none [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs tracking-widest text-brand-gold uppercase">{t('adults')}</label>
                      <div className="flex items-center border-b border-brand-ivory/30 pb-3 focus-within:border-brand-gold transition-colors">
                        <Users className="w-5 h-5 mr-3 text-brand-ivory/50" />
                        <input 
                          type="number" 
                          min="1" max="10"
                          value={searchData.adults}
                          onChange={e => updateSearchData({ adults: parseInt(e.target.value) })}
                          className="bg-transparent text-brand-white w-full focus:outline-none" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs tracking-widest text-brand-gold uppercase">{t('children')}</label>
                      <div className="flex items-center border-b border-brand-ivory/30 pb-3 focus-within:border-brand-gold transition-colors">
                        <Users className="w-5 h-5 mr-3 text-brand-ivory/50" />
                        <input 
                          type="number" 
                          min="0" max="10"
                          value={searchData.children}
                          onChange={e => updateSearchData({ children: parseInt(e.target.value) })}
                          className="bg-transparent text-brand-white w-full focus:outline-none" 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 flex justify-center">
                    <button type="submit" className="px-12 py-4 bg-brand-gold text-brand-dark text-sm tracking-widest uppercase font-medium hover:bg-brand-white transition-colors duration-300 w-full md:w-auto">
                      {t('searchAvailability')}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-serif text-brand-white">Available Rooms</h3>
                  <button onClick={() => setStep(1)} className="text-sm text-brand-gold hover:text-brand-white uppercase tracking-widest">
                    Edit Search
                  </button>
                </div>

                {availableRooms.length === 0 ? (
                  <div className="bg-[#151515] border border-white/5 p-12 text-center rounded-lg">
                    <p className="text-brand-ivory/70 text-lg">No rooms available for your selected criteria. Please try different dates or guest count.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {availableRooms.map(room => (
                      <div key={room.id} className="bg-[#151515] border border-white/5 rounded-lg flex flex-col md:flex-row overflow-hidden group">
                        <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                          <img src={room.image} alt={room.name[language] || room.name['en']} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-8 md:w-2/3 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start mb-4">
                              <h4 className="text-2xl font-serif text-brand-white">{room.name[language] || room.name['en']}</h4>
                              <div className="text-right">
                                <span className="text-2xl font-serif text-brand-gold">${room.price}</span>
                                <span className="text-xs text-brand-ivory/50 block tracking-widest uppercase">{t('nightly')}</span>
                              </div>
                            </div>
                            <p className="text-brand-ivory/70 text-sm mb-6 flex items-center space-x-4">
                              <span><Users className="w-4 h-4 inline mr-1 text-brand-gold" /> {room.capacity} Guests</span>
                              <span>•</span>
                              <span>{room.size}</span>
                            </p>
                          </div>
                          
                          <div className="flex justify-end">
                            <button 
                              onClick={() => { setSelectedRoom(room.id); setStep(3); }}
                              className="px-8 py-3 bg-brand-white/10 hover:bg-brand-gold text-brand-white hover:text-brand-dark text-sm tracking-widest uppercase transition-colors duration-300 border border-brand-white/20 hover:border-brand-gold"
                            >
                              Select Room
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#151515] border border-white/5 p-12 text-center rounded-lg"
              >
                <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-brand-gold" />
                </div>
                <h3 className="text-3xl font-serif text-brand-white mb-4">Booking Initialized</h3>
                <p className="text-brand-ivory/70 max-w-md mx-auto mb-8">
                  Your selection has been saved. In a production environment, this would proceed to a secure payment gateway.
                </p>
                <button 
                  onClick={() => { setStep(1); setSelectedRoom(null); }}
                  className="px-8 py-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark text-sm tracking-widest uppercase transition-colors duration-300"
                >
                  Return to Start
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
