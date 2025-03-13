'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Threads from "../reactbits/grid-bg";
import DecryptedText from "../reactbits/ctypted";

const Homepagehero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0A192F] w-full h-screen">
      {/* Background thread animation */}
      <div className="absolute inset-0 z-0">
        <Threads />
      </div>
      
      {/* Bitcoin symbol */}
      <motion.div 
        className="absolute right-10 md:right-20 top-1/3 -translate-y-1/2 opacity-20 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-[#FFD700] bg-gradient-to-br from-[#FFD700] to-[#FFC107] flex items-center justify-center">
          <div className="text-[#0A192F] text-5xl md:text-6xl font-bold">₿</div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="h-full flex items-start w-full text-white justify-start pl-16 pt-32 relative z-20">
      <DecryptedText 
          text="BETCOIN" 
          speed={100} 
          maxIterations={20} 
          characters="ABCD1234!?" 
          className="revealed" 
          parentClassName="all-letters" 
          encryptedClassName="encrypted" 
        />
      </div>
    </section>
  );
};

export default Homepagehero;