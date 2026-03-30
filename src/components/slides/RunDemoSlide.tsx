import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../SlideLayout';
import { TerminalIcon, PlayIcon, GlobeIcon } from 'lucide-react';
export function RunDemoSlide() {
  const steps = [
  {
    icon: TerminalIcon,
    command: 'npm init -y',
    description: 'Initialize npm project'
  },
  {
    icon: TerminalIcon,
    command: 'npm install fastify',
    description: 'Install Fastify'
  },
  {
    icon: PlayIcon,
    command: 'node app.js',
    description: 'Start the server'
  },
  {
    icon: GlobeIcon,
    command: 'http://localhost:3000',
    description: 'Server is running!'
  }];

  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 15
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
    <SlideLayout title="How to Run the Demo" subtitle="Step-by-Step">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4 max-w-3xl">
        
        {steps.map((step, index) =>
        <motion.div
          key={index}
          variants={item}
          className="flex items-center gap-6 bg-slate-800/40 border border-slate-700/50 p-4 rounded-xl">
          
            <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-700/50">
              <step.icon className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
            </div>
            <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-2">
              <code className="font-mono text-cyan-300 text-sm bg-slate-900/80 px-3 py-1.5 rounded border border-slate-700/50">
                {step.command}
              </code>
              <p className="text-slate-400 font-light text-sm md:text-base">
                {step.description}
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </SlideLayout>);

}