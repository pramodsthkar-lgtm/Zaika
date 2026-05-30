import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-custom/50 to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#" className="font-display font-bold text-3xl tracking-wider text-gold-custom block mb-6">
              ZAIKA
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              A premium dining experience bringing authentic, royal Indian flavors to your table in an elegant ambiance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-gold-custom hover:border-gold-custom transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-gold-custom hover:border-gold-custom transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-gold-custom hover:border-gold-custom transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-zinc-400 hover:text-gold-custom transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-zinc-400 hover:text-gold-custom transition-colors text-sm">About Us</a></li>
              <li><a href="#menu" className="text-zinc-400 hover:text-gold-custom transition-colors text-sm">Menu</a></li>
              <li><a href="#gallery" className="text-zinc-400 hover:text-gold-custom transition-colors text-sm">Gallery</a></li>
              <li><a href="#contact" className="text-zinc-400 hover:text-gold-custom transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-400 hover:text-gold-custom transition-colors text-sm">Dine-In</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-gold-custom transition-colors text-sm">Takeaway</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-gold-custom transition-colors text-sm">Home Delivery</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-gold-custom transition-colors text-sm">Table Reservation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                <span className="text-zinc-400">Monday - Friday</span>
                <span className="text-gold-custom">11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                <span className="text-zinc-400">Saturday - Sunday</span>
                <span className="text-gold-custom">10:00 AM - 12:00 AM</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Zaika Restaurant. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
