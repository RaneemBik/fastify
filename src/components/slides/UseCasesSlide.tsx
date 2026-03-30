import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../SlideLayout';
import { BoxIcon, GlobeIcon, ZapIcon, NetworkIcon } from 'lucide-react';
export function UseCasesSlide() {
  const useCases = [
  {
    icon: NetworkIcon,
    title: 'REST APIs',
    description:
    'Build robust RESTful services with built-in schema validation'
  },
  {
    icon: BoxIcon,
    title: 'Microservices',
    description: 'Create scalable, lightweight microservice architectures'
  },
  {
    icon: GlobeIcon,
    title: 'Backend Services',
    description: 'Power modern web applications and single-page apps'
  },
  {
    icon: ZapIcon,
    title: 'High-Performance Apps',
    description: 'Handle intensive workloads with minimal overhead'
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
      y: 15
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.5
      }
    }
  };
  return (
    <SlideLayout title="What Fastify Is Used For" subtitle="Common Use Cases">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {useCases.map((useCase, index) =>
        <motion.div
          key={index}
          variants={item}
          className="bg-slate-800/40 rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-colors duration-300">
          
            <useCase.icon
            className="w-10 h-10 text-cyan-400 mb-5"
            strokeWidth={1.5} />
          
            <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
              {useCase.title}
            </h3>
            <p className="text-slate-400 font-light leading-relaxed">
              {useCase.description}
            </p>
          </motion.div>
        )}
      </motion.div>
    </SlideLayout>);

}