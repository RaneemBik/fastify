import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../SlideLayout';
export function ComparisonTableSlide() {
  const comparisons = [
  {
    feature: 'Performance',
    fastify: 'Very High',
    express: 'Moderate'
  },
  {
    feature: 'Ease of Use',
    fastify: 'Moderate',
    express: 'Easy'
  },
  {
    feature: 'Learning Curve',
    fastify: 'Moderate',
    express: 'Low'
  },
  {
    feature: 'Validation',
    fastify: 'Built-in (JSON Schema)',
    express: 'Manual / Middleware'
  },
  {
    feature: 'Architecture',
    fastify: 'Plugin-based',
    express: 'Middleware-based'
  },
  {
    feature: 'TypeScript Support',
    fastify: 'Excellent',
    express: 'Good'
  },
  {
    feature: 'Ecosystem',
    fastify: 'Growing rapidly',
    express: 'Mature & Massive'
  },
  {
    feature: 'Use Cases',
    fastify: 'High-performance APIs',
    express: 'General web apps'
  }];

  return (
    <SlideLayout title="Comparison Table" subtitle="Fastify vs Express">
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
          duration: 0.5,
          ease: 'easeOut'
        }}
        className="overflow-x-auto rounded-xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
        
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-slate-800/80 border-b border-slate-700">
              <th className="px-6 py-4 font-medium text-slate-300">Feature</th>
              <th className="px-6 py-4 font-semibold text-cyan-400">Fastify</th>
              <th className="px-6 py-4 font-medium text-slate-400">Express</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/50">
            {comparisons.map((row, index) =>
            <motion.tr
              key={index}
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: index * 0.05 + 0.2,
                duration: 0.3
              }}
              className="hover:bg-slate-800/50 transition-colors">
              
                <td className="px-6 py-3.5 text-slate-300 font-medium">
                  {row.feature}
                </td>
                <td className="px-6 py-3.5 text-cyan-100 font-light">
                  {row.fastify}
                </td>
                <td className="px-6 py-3.5 text-slate-400 font-light">
                  {row.express}
                </td>
              </motion.tr>
            )}
          </tbody>
        </table>
      </motion.div>
    </SlideLayout>);

}