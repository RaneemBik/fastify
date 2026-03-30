import React from 'react';
import { motion } from 'framer-motion';
interface SlideLayoutProps {
  title: string;
  children: React.ReactNode;
  subtitle?: string;
}
export function SlideLayout({ title, children, subtitle }: SlideLayoutProps) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        initial={{
          opacity: 0,
          y: -10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.5,
          ease: 'easeOut'
        }}
        className="mb-6 md:mb-8">
        
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight break-words">
          {title}
        </h1>
        <div className="w-12 h-1 bg-cyan-400 mb-3 md:mb-4 rounded-full" />
        {subtitle &&
        <p className="text-lg md:text-xl text-slate-400 font-light tracking-wide break-words">
            {subtitle}
          </p>
        }
      </motion.div>
      <div className="mt-4 md:mt-6">{children}</div>
    </div>);

}