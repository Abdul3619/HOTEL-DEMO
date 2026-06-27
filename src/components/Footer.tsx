import { Facebook, Instagram, Twitter, Youtube, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-24 pb-12 border-t border-brand-ivory/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-2xl font-serif tracking-wider text-brand-white uppercase flex flex-col items-start mb-6">
              <span className="text-gold-gradient">Azure</span>
              <span className="text-[0.4em] tracking-[0.3em] uppercase text-brand-ivory/70">Haven Hotel</span>
            </div>
            <p className="text-brand-ivory/60 text-sm font-light leading-relaxed mb-8">
              Experience unparalleled luxury and breathtaking views at our world-class resort. Your perfect escape awaits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-brand-ivory/20 flex items-center justify-center text-brand-ivory/60 hover:text-brand-gold hover:border-brand-gold transition-colors rounded-full">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-brand-ivory/20 flex items-center justify-center text-brand-ivory/60 hover:text-brand-gold hover:border-brand-gold transition-colors rounded-full">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-brand-ivory/20 flex items-center justify-center text-brand-ivory/60 hover:text-brand-gold hover:border-brand-gold transition-colors rounded-full">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-brand-ivory/20 flex items-center justify-center text-brand-ivory/60 hover:text-brand-gold hover:border-brand-gold transition-colors rounded-full">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-brand-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-light text-brand-ivory/60">
              <li><a href="#rooms" className="hover:text-brand-gold transition-colors">Our Rooms</a></li>
              <li><a href="#amenities" className="hover:text-brand-gold transition-colors">Amenities</a></li>
              <li><a href="#dining" className="hover:text-brand-gold transition-colors">Dining Experience</a></li>
              <li><a href="#gallery" className="hover:text-brand-gold transition-colors">Gallery</a></li>
              <li><a href="#offers" className="hover:text-brand-gold transition-colors">Special Offers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-white font-serif text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-light text-brand-ivory/60">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Cancellation Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-white font-serif text-lg mb-6">Newsletter</h4>
            <p className="text-brand-ivory/60 text-sm font-light leading-relaxed mb-4">
              Subscribe to receive exclusive offers and updates.
            </p>
            <form className="flex flex-col space-y-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-brand-white/5 border border-brand-ivory/20 px-4 py-3 text-sm text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button type="submit" className="w-full py-3 bg-brand-gold text-brand-dark text-xs tracking-widest uppercase font-medium hover:bg-brand-white transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-ivory/10 flex flex-col md:flex-row justify-between items-center text-xs text-brand-ivory/40">
          <p>&copy; {new Date().getFullYear()} Azure Haven Hotel. All rights reserved.</p>
          <a 
            href="https://wa.me/22871606697" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Need a website like this? Contact the designer."
            className="mt-4 md:mt-0 flex items-center space-x-1.5 text-[13px] text-white/60 hover:text-[#D4AF37] transition-colors duration-300 group"
          >
            <span>Designed by Abdulwahab Abdullahi</span>
            <Sparkles className="w-3 h-3 opacity-70 group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </footer>
  );
}
