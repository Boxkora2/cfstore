'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// List of available event images - You can add more filenames here
const EVENT_IMAGES = [
  '/images/eventImage/promo.svg',
  // '/images/eventImage/another-event.jpg',
];

export const EventPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentImage = EVENT_IMAGES[0];

  useEffect(() => {
    // Show popup after a short delay for better UX
    const timer = setTimeout(() => {
        // Check if we've already shown it this session (optional logic, enabling by default for now)
        const hasSeenEvent = sessionStorage.getItem('hasSeenEvent');
        if (!hasSeenEvent) {
           setIsOpen(true);
           sessionStorage.setItem('hasSeenEvent', 'true');
        }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
            className="relative bg-kora-cream rounded-3xl p-2 md:p-4 shadow-2xl max-w-lg w-full overflow-hidden"
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-kora-beige/20 rounded-br-full -z-10" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-kora-sage/20 rounded-tl-full -z-10" />

            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full text-kora-dark hover:bg-kora-brown hover:text-white transition-colors"
            >
              ✕
            </button>

            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white">
              <Image 
                src={currentImage} 
                alt="Special Event"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="text-center mt-4 mb-2">
              <h3 className="text-2xl font-bold text-kora-brown mb-1">Happening Now!</h3>
              <p className="text-gray-600 text-sm">Don&apos;t miss out on our special events.</p>
              <button 
                onClick={handleClose}
                className="mt-4 bg-kora-sage text-white px-6 py-2 rounded-full font-bold hover:bg-kora-brown transition-all transform hover:scale-105"
              >
                Check it out!
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
