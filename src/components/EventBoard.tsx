'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// ==========================================
// ⚡ CONFIGURATION SECTION
// ==========================================
 const SLIDE_DURATION = 10000; // How long each event shows (in milliseconds). 5000 = 5 seconds.
 const TRANSITION_SPEED = 1; // How fast the slide happens (in seconds).

interface EventItem {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "🌸 HAPPY TET HOLIDAY 🌸",
    description: "Celebrate the new year with 50% OFF on all signature drinks!",
    image: "/images/eventImage/tet-promo.svg",
    bgColor: "bg-red-50",
  },
  {
    id: 2,
    title: "Grand Opening Special",
    description: "Welcome to Kora Coffee! Enjoy our cozy vibes with special treats.",
    image: "/images/eventImage/promo.svg", // Using the existing promo image
    bgColor: "bg-kora-latte",
  },
  {
    id: 3,
    title: "Perfect Combo Deal",
    description: "Buy 2 Drinks & Get 1 Pastry for FREE! The perfect teatime set.",
    image: "/images/eventImage/buy2get1.svg",
    bgColor: "bg-green-50",
  }
];

export const EventBoard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % EVENTS.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white border-b border-kora-latte shadow-sm overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="relative h-[200px] md:h-[250px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: TRANSITION_SPEED, ease: "easeInOut" }}
              className={`absolute inset-0 flex items-center justify-center p-4 md:p-8 ${EVENTS[currentIndex].bgColor}`}
            >
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 max-w-4xl mx-auto">
                {/* Event Image */}
                <div className="relative w-full md:w-1/3 h-32 md:h-40 shrink-0">
                  <Image
                    src={EVENTS[currentIndex].image}
                    alt={EVENTS[currentIndex].title}
                    fill
                    className="object-contain drop-shadow-md hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Event Text */}
                <div className="text-center md:text-left flex-1">
                  <div className="inline-block px-3 py-1 bg-white/60 text-kora-brown text-xs font-bold rounded-full mb-2 border border-kora-brown/10">
                    HAPPENING NOW
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-kora-dark mb-2 tracking-tight">
                    {EVENTS[currentIndex].title}
                  </h3>
                  <p className="text-gray-600 text-lg md:text-xl font-medium">
                    {EVENTS[currentIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Progress Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {EVENTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 
                  ${idx === currentIndex ? 'bg-kora-brown w-6' : 'bg-kora-brown/30 hover:bg-kora-brown/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
