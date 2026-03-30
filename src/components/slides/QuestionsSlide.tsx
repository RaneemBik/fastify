import React from 'react';
import { motion } from 'framer-motion';
export function QuestionsSlide() {
  return (
    <div className="w-full max-w-5xl mx-auto text-center">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}>
        
        <h1 className="text-7xl md:text-8xl font-bold mb-8 tracking-tighter text-white">
          Questions<span className="text-cyan-400">?</span>
        </h1>

        <div className="w-16 h-1 bg-slate-700 mx-auto mb-8 rounded-full" />

        <p className="text-2xl text-slate-400 font-light tracking-wide">
          Thank you for your attention.
        </p>
      </motion.div>
    </div>);

}