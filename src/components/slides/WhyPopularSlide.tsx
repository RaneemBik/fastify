import React, { memo } from 'react';
import { SlideLayout } from '../SlideLayout';
import { BulletList } from '../BulletList';
import { motion } from 'framer-motion';
export function WhyPopularSlide() {
  const points = [
  'High performance - One of the fastest Node.js frameworks available',
  'Low overhead - Minimal resource consumption and memory footprint',
  'Built-in schema validation - JSON Schema support out of the box',
  'Plugin system - Extensible and modular architecture',
  'TypeScript support - First-class TypeScript integration'];

  return (
    <SlideLayout title="Why Fastify Is Popular" subtitle="Key Advantages">
      <motion.div
        initial={{
          opacity: 0,
          x: -20
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        transition={{
          duration: 0.5,
          ease: 'easeOut'
        }}
        className="border-l-2 border-cyan-400 pl-6 py-2 mb-10 bg-slate-800/20 rounded-r-lg">
        
        <p className="text-cyan-50 text-lg font-light tracking-wide">
          <span className="font-semibold text-cyan-400">Performance</span> is
          the #1 reason developers choose Fastify over alternatives.
        </p>
      </motion.div>
      <BulletList items={points} />
    </SlideLayout>);

}