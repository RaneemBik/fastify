import React from 'react';
import { motion } from 'framer-motion';
import { ZapIcon, ServerIcon, CodeIcon } from 'lucide-react';
export function TitleSlide() {
  return (
    <div className="w-full max-w-5xl mx-auto text-center">
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
          duration: 0.8,
          ease: 'easeOut'
        }}>
        
        <motion.div
          initial={{
            scale: 0.9,
            opacity: 0
          }}
          animate={{
            scale: 1,
            opacity: 1
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: 'easeOut'
          }}
          className="flex justify-center gap-8 mb-12">
          
          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <ZapIcon className="w-12 h-12 text-cyan-400" strokeWidth={1.5} />
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <ServerIcon className="w-12 h-12 text-cyan-400" strokeWidth={1.5} />
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <CodeIcon className="w-12 h-12 text-cyan-400" strokeWidth={1.5} />
          </div>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-white">
          Fastify
        </h1>

        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8 rounded-full" />

        <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-200 tracking-tight">
          A Fast Web Framework for Node.js
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 font-light tracking-wide">
          Fast backend framework for APIs
        </p>
      </motion.div>
    </div>);

}