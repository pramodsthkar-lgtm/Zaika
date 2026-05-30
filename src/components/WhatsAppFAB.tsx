import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-green-500/20 flex items-center justify-center hover:bg-green-500 transition-colors"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30"></span>
    </motion.a>
  );
}
