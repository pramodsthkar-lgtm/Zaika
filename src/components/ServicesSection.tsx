import { motion } from 'motion/react';
import { Utensils, ShoppingBag, Truck, CalendarCheck } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Dine-In",
      description: "Experience our royal ambiance with exceptional table service."
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Takeaway",
      description: "Grab your favorite meals on the go, packed fresh."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Home Delivery",
      description: "Enjoy hot and delicious food delivered right to your doorstep."
    },
    {
      icon: <CalendarCheck className="w-8 h-8" />,
      title: "Online Booking",
      description: "Reserve your table in advance for a seamless dining experience."
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-900 relative border-y border-white/10">
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-custom/20 via-zinc-900 to-zinc-900 block pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-custom font-medium tracking-widest uppercase text-sm mb-2"
          >
            Offerings
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white"
          >
            Our Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-950 p-8 rounded-2xl border border-white/5 hover:border-gold-custom/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gold-custom/10 text-gold-custom flex items-center justify-center mb-6 group-hover:bg-gold-custom group-hover:text-zinc-950 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
