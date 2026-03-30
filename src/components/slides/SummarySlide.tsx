import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { BulletList } from '../BulletList';
import { motion } from 'framer-motion';
export function SummarySlide() {
  const points = [
  'Fastify is a high-performance Node.js framework',
  'Primarily used for building APIs and microservices',
  'Built with performance and scalability in mind',
  'Excellent alternative to Express for modern backend systems',
  'Great choice when speed and efficiency matter'];

  return (
    <SlideLayout title="Summary" subtitle="Key Takeaways">
      <BulletList items={points} />
      <motion.div
        initial={{
          opacity: 0,
          y: 15
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.6,
          duration: 0.5,
          ease: 'easeOut'
        }}
        className="mt-12 bg-slate-800/40 border-l-2 border-cyan-400 p-6 rounded-r-lg">
        
        <p className="text-lg text-slate-300 font-light leading-relaxed">
          Fastify combines <span className="text-white font-medium">speed</span>
          , <span className="text-white font-medium">developer experience</span>
          , and <span className="text-white font-medium">modern features</span>{' '}
          to create a powerful framework for building fast, scalable web
          applications.
        </p>
      </motion.div>
    </SlideLayout>);

}