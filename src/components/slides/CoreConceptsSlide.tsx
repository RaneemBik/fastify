import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../SlideLayout';
import {
  ServerIcon,
  RouteIcon,
  PuzzleIcon,
  ShieldCheckIcon,
  AnchorIcon } from
'lucide-react';
export function CoreConceptsSlide() {
  const concepts = [
  {
    icon: ServerIcon,
    title: 'Server Instance',
    description: 'The main Fastify application object'
  },
  {
    icon: RouteIcon,
    title: 'Routes',
    description: 'Define endpoints and request handlers'
  },
  {
    icon: PuzzleIcon,
    title: 'Plugins',
    description: 'Modular, reusable functionality blocks'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Schema Validation',
    description: 'Automatic request/response validation'
  },
  {
    icon: AnchorIcon,
    title: 'Hooks',
    description: 'Lifecycle event handlers for requests'
  }];

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
    <SlideLayout title="Fundamentals" subtitle="Core Concepts">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4">
        
        {concepts.map((concept, index) =>
        <motion.div
          key={index}
          variants={item}
          className="flex items-center gap-6 bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 hover:bg-slate-800/60 transition-colors">
          
            <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-700/50">
              <concept.icon
              className="w-6 h-6 text-cyan-400 flex-shrink-0"
              strokeWidth={1.5} />
            
            </div>
            <div>
              <h3 className="text-lg font-medium text-white tracking-tight">
                {concept.title}
              </h3>
              <p className="text-slate-400 font-light mt-1">
                {concept.description}
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </SlideLayout>);

}