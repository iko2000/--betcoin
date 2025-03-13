'use client'
import React, { useState, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from "framer-motion"

export default function BetCoinComponent() {
  const coinControls = useAnimation()
  const textControls = useAnimation()
  const [isHovering, setIsHovering] = useState(false)
  const [hasClicked, setHasClicked] = useState(false)
  
  // Animation sequence
  useEffect(() => {
    const animationSequence = async () => {
      // Initial entrance animation
      await coinControls.start({
        scale: [0, 1.2, 1],
        rotateY: [0, 360],
        transition: { 
          duration: 1.5, 
          ease: "easeOut"
        }
      })
      
      // Perpetual floating animation
      coinControls.start({
        y: [0, -15, 0],
        rotateY: 360,
        transition: {
          y: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          },
          rotateY: {
            repeat: Infinity,
            duration: 3,
            ease: "linear"
          }
        }
      })
      
      // Text animation
      textControls.start({
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.5,
          duration: 0.7
        }
      })
    }
    
    animationSequence()
  }, [coinControls, textControls])
  
  // Hover animation
  const handleHover = () => {
    setIsHovering(true)
    coinControls.start({
      scale: 1.1,
      boxShadow: "0px 0px 30px rgba(255, 215, 0, 0.7)",
      transition: { duration: 0.3 }
    })
  }
  
  const handleHoverEnd = () => {
    setIsHovering(false)
    coinControls.start({
      scale: 1,
      boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.3)",
      transition: { duration: 0.3 }
    })
  }
  
  // Click animation
  const handleClick = async () => {
    setHasClicked(true);
    
    // Quick spin with slight bounce
    await coinControls.start({
      rotateY: isHovering ? 720 : 360,
      scale: [1, 1.3, 1],
      transition: { 
        duration: 0.8, 
        ease: "backOut"
      }
    })
    
    // Return to normal after 3 seconds
    setTimeout(() => {
      setHasClicked(false);
    }, 3000);
  }

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-purple-900 to-black overflow-hidden'>
      {/* Floating dollar signs background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-500 opacity-30 text-xl"
            initial={{ 
              x: Math.random() * 40, 
              y: -50,
              rotate: Math.random() * 360,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: 300 + 100,
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          >
            $
          </motion.div>
        ))}
      </div>
      
      {/* Cyber grid floor */}
      <div className="absolute bottom-0 w-full h-40 perspective-1000">
        <motion.div 
          className="w-full h-full bg-gradient-to-t from-yellow-500 to-transparent opacity-10"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,215,0,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,215,0,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
          animate={{
            backgroundPositionY: ["0px", "40px"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Energy ring effects */}
      <div className="relative">
        {/* Outer energy rings */}
        <AnimatePresence>
          {hasClicked && [...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 rounded-full border border-yellow-400"
              initial={{ 
                width: 120, 
                height: 120, 
                x: -60, 
                y: -60, 
                opacity: 0.8 
              }}
              animate={{ 
                width: 300 + (i * 50), 
                height: 300 + (i * 50), 
                x: -150 - (i * 25), 
                y: -150 - (i * 25), 
                opacity: 0,
                borderWidth: 3
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 1.5, 
                delay: i * 0.2, 
                ease: "easeOut" 
              }}
            />
          ))}
        </AnimatePresence>
        
        {/* Glow effect behind coin */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-36 h-36 rounded-full bg-yellow-300 opacity-20 blur-xl"
          style={{ transform: 'translate(-50%, -50%)' }}
          animate={{
            opacity: hasClicked ? [0.4, 0.7, 0.4] : [0.2, 0.4, 0.2],
            scale: hasClicked ? [1.2, 1.4, 1.2] : [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: hasClicked ? 1.5 : 3,
            ease: "easeInOut"
          }}
        />
      
        {/* Coin */}
        <motion.div
          animate={coinControls}
          initial={{ scale: 0, rotateY: 0 }}
          onHoverStart={handleHover}
          onHoverEnd={handleHoverEnd}
          onClick={handleClick}
          className='w-32 h-32 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300 flex justify-center items-center cursor-pointer z-10'
          style={{
            boxShadow: hasClicked ? 
              "0px 0px 30px rgba(255, 215, 0, 0.7), 0px 0px 60px rgba(255, 215, 0, 0.4)" : 
              "0px 0px 15px rgba(255, 215, 0, 0.3)",
            perspective: "1000px"
          }}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-400 flex justify-center items-center border-4 border-yellow-300 relative overflow-hidden">
            {/* Shine effect */}
            <motion.div 
              className="absolute w-full h-10 bg-white opacity-30 blur-sm rotate-45"
              animate={{ 
                top: ["-100%", "200%"],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                repeatDelay: 2
              }}
            />
            <p className="text-black font-bold text-xl z-10">BET</p>
          </div>
        </motion.div>
        
        {/* Sparkles around coin on click */}
        <AnimatePresence>
          {hasClicked && [...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const x = Math.cos(angle) * 80;
            const y = Math.sin(angle) * 80;
            
            return (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute top-1/2 left-1/2 w-3 h-3 bg-yellow-300 rounded-full"
                initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                animate={{ 
                  x: x, 
                  y: y, 
                  opacity: 0,
                  scale: Math.random() * 2 + 1
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            );
          })}
        </AnimatePresence>
      </div>
      
      {/* Text */}
      <motion.div
        className="mt-12 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={textControls}
      >
        <motion.h2 
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 mb-2"
          animate={{
            textShadow: hasClicked ? 
              "0 0 20px rgba(255,215,0,0.8), 0 0 30px rgba(255,215,0,0.6)" : 
              "0 0 10px rgba(255,215,0,0.4)"
          }}
        >
          BET COIN
        </motion.h2>
        <p className="text-yellow-100 opacity-80">The future of betting is here</p>
      </motion.div>
      
      {/* Call to action button */}
      <AnimatePresence>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { delay: 1.2, duration: 0.5 }
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.5)",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-full relative overflow-hidden z-10"
        >
          {/* Button shine effect */}
          <motion.div 
            className="absolute inset-0 w-20 h-full bg-white opacity-20 skew-x-12"
            animate={{ 
              left: ["-30%", "130%"],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              repeatDelay: 1
            }}
          />
          Start Betting
        </motion.button>
      </AnimatePresence>
      
      {/* Corner decorative elements */}
      {[0, 1, 2, 3].map((i) => {
        const corners = [
          { top: 0, left: 0, rotate: 0 },
          { top: 0, right: 0, rotate: 90 },
          { bottom: 0, right: 0, rotate: 180 },
          { bottom: 0, left: 0, rotate: 270 }
        ];
        
        return (
          <motion.div
            key={`corner-${i}`}
            className="absolute w-20 h-20 opacity-50"
            style={{
              ...corners[i],
              transform: `rotate(${corners[i].rotate}deg)`
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.5 + (i * 0.2), duration: 0.8 }}
          >
            <div className="absolute top-0 left-0 w-20 h-6 border-t-2 border-l-2 border-yellow-500 opacity-50" />
          </motion.div>
        );
      })}
    </div>
  )
}