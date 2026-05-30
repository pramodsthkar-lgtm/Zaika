import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-950/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=2000" 
          alt="Delicious Indian Food Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-gold-custom font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-4">
            Welcome to
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 drop-shadow-lg">
            Zaika Restaurant
          </h1>
          <p className="text-xl md:text-3xl font-light text-zinc-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Taste the Royal Flavors
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a 
              href="#menu"
              className="group relative px-8 py-3 bg-gold-custom text-zinc-950 rounded-full font-medium text-lg overflow-hidden transition-all hover:scale-105 flex items-center gap-2"
            >
              View Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-white/30 text-white rounded-full font-medium text-lg hover:border-gold-custom hover:text-gold-custom transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              Order Now
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-zinc-400 text-xs tracking-widest uppercase">Scroll Explore</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-gold-custom"
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
