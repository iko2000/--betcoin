'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
const Homepagehero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative overflow-hidden bg-[#0A192F] w-full h-screen">
      {/* Background thread animation */}
      <div className="absolute inset-0 z-0">
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
      <div className="h-full flex flex-col items-start justify-center w-full max-w-4xl text-white px-8 md:px-16 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFC107] bg-clip-text text-transparent">
            Betcoin
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-xl md:text-2xl text-gray-300">
            The Next Generation in Sports Betting
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="bg-[#FFD700] hover:bg-[#FFC107] mb-[30vh] text-[#0A192F] font-bold py-3 px-6 rounded-lg flex items-center transition-all duration-300 transform hover:scale-105">
            Start Betting
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Homepagehero;