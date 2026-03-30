import React, { Children, Fragment } from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../SlideLayout';
import { ArrowRightIcon } from 'lucide-react';
export function HowItWorksSlide() {
  const steps = [
  'Client Request',
  'Fastify Server',
  'Route Handler',
  'Validation',
  'Business Logic',
  'Response'];

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
      scale: 0.95,
      y: 10
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.4
      }
    }
  };
  return (
    <SlideLayout title="How Fastify Works" subtitle="High-Level Flow">
      <div className="flex items-center justify-center h-[40vh]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          
          {steps.map((step, index) =>
          <Fragment key={index}>
              <motion.div
              variants={item}
              className={`px-6 py-4 rounded-lg font-medium text-center min-w-[140px] border ${index === 1 || index === 3 ? 'bg-cyan-900/20 border-cyan-500/50 text-cyan-50' : 'bg-slate-800/60 border-slate-700 text-slate-200'}`}>
              
                {step}
              </motion.div>
              {index < steps.length - 1 &&
            <motion.div variants={item}>
                  <ArrowRightIcon
                className="w-5 h-5 text-slate-600"
                strokeWidth={1.5} />
              
                </motion.div>
            }
            </Fragment>
          )}
        </motion.div>
      </div>
    </SlideLayout>);

}