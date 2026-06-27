import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import { galleryImages } from '../data';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-32 bg-brand-dark">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-brand-white"
          >
            {t('galleryTitle')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              className={`relative overflow-hidden cursor-pointer group ${
                index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(src)}
            >
              <div className="absolute inset-0 bg-brand-dark/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img 
                src={src} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-md flex items-center justify-center p-4">
          <button 
            className="absolute top-8 right-8 text-brand-ivory hover:text-brand-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img src={selectedImage} alt="Fullscreen View" className="max-w-full max-h-[90vh] object-contain" />
        </div>
      )}
    </section>
  );
}
