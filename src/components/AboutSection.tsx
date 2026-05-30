import { motion } from 'motion/react';
import { ChefHat, Leaf, Users } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-gold-custom" />,
      title: "Fresh Ingredients",
      description: "We source the finest and freshest ingredients daily."
    },
    {
      icon: <Users className="w-6 h-6 text-gold-custom" />,
      title: "Family Environment",
      description: "A warm, welcoming atmosphere perfect for families."
    },
    {
      icon: <ChefHat className="w-6 h-6 text-gold-custom" />,
      title: "Quality Food",
      description: "Expert chefs crafting authentic, high-quality dishes."
    }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800" 
                alt="Chef cooking"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
            </div>
            
            {/* Decorative border */}
            <div className="absolute -inset-4 border border-gold-custom/30 rounded-2xl z-0 hidden md:block translate-x-4 translate-y-4" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-gold-custom font-medium tracking-widest uppercase text-sm mb-2">Our Story</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              A Legacy of Authentic Indian Flavors
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Founded with a passion for traditional cuisine, Zaika Restaurant brings the rich, royal flavors of India directly to your table. Every dish tells a story of heritage, crafted with generational recipes and an unwavering commitment to quality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
