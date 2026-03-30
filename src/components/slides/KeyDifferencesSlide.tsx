import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../SlideLayout';
import { ZapIcon, PackageIcon } from 'lucide-react';
export function KeyDifferencesSlide() {
  const fastifyPoints = [
  'Faster performance and lower latency',
  'Built-in schema validation',
  'Plugin-based architecture',
  'Optimized for modern Node.js'];

  const expressPoints = [
  'Simpler for beginners',
  'Huge middleware ecosystem',
  'Large community and resources',
  'Battle-tested and stable'];

  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 10
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.4
      }
    }
  };
  return (
    <SlideLayout title="Key Differences" subtitle="At a Glance">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-slate-800/20 border border-cyan-500/20 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
          <div className="flex items-center gap-4 mb-8">
            <ZapIcon className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Fastify
            </h3>
          </div>
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4">
            
            {fastifyPoints.map((point, index) =>
            <motion.li
              key={index}
              variants={item}
              className="flex items-start gap-3 text-slate-300 font-light">
              
                <span className="text-cyan-400 mt-1.5 text-sm">✦</span>
                <span>{point}</span>
              </motion.li>
            )}
          </motion.ul>
        </div>

        <div className="bg-slate-800/20 border border-slate-700/50 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-slate-600" />
          <div className="flex items-center gap-4 mb-8">
            <PackageIcon className="w-8 h-8 text-slate-400" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-slate-300 tracking-tight">
              Express
            </h3>
          </div>
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4">
            
            {expressPoints.map((point, index) =>
            <motion.li
              key={index}
              variants={item}
              className="flex items-start gap-3 text-slate-400 font-light">
              
                <span className="text-slate-600 mt-1.5 text-sm">✦</span>
                <span>{point}</span>
              </motion.li>
            )}
          </motion.ul>
        </div>
      </div>
    </SlideLayout>);

}