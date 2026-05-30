/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-gold-custom selection:text-zinc-950">
        {!loading && (
          <>
            <Navbar />
            <main>
              <HeroSection />
              <AboutSection />
              <MenuSection />
              <ServicesSection />
              <GallerySection />
              <ReviewsSection />
              <ContactSection />
            </main>
            <Footer />
            <WhatsAppFAB />
          </>
        )}
      </div>
    </>
  );
}
