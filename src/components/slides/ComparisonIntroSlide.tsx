import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../SlideLayout';
import { ZapIcon, PackageIcon } from 'lucide-react';
export function ComparisonIntroSlide() {
  return (
    <SlideLayout title="Technology Comparison" subtitle="Fastify vs Express">
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.6,
          ease: 'easeOut'
        }}
        className="flex items-center justify-center gap-8 md:gap-20 py-16">
        
        <div className="text-center">
          <div className="w-32 h-32 rounded-full border border-cyan-500/30 bg-cyan-900/10 flex items-center justify-center mb-6 mx-auto shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            <ZapIcon className="w-12 h-12 text-cyan-400" strokeWidth={1.5} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
            Fastify
          </h3>
          <p className="text-slate-400 font-light">Performance-focused</p>
        </div>

        <div className="text-2xl font-light text-slate-600 italic">VS</div>

        <div className="text-center">
          <div className="w-32 h-32 rounded-full border border-slate-700 bg-slate-800/30 flex items-center justify-center mb-6 mx-auto">
            <PackageIcon
              className="w-12 h-12 text-slate-400"
              strokeWidth={1.5} />
            
          </div>
          <h3 className="text-3xl font-bold text-slate-300 mb-2 tracking-tight">
            Express
          </h3>
          <p className="text-slate-500 font-light">Widely adopted</p>
        </div>
      </motion.div>
    </SlideLayout>);

}