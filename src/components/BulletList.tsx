import React, { Children } from 'react';
import { motion } from 'framer-motion';
interface BulletListProps {
  items: string[];
  icon?: React.ReactNode;
}
export function BulletList({ items, icon }: BulletListProps) {
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
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-5">
      
      {items.map((text, index) =>
      <motion.li
        key={index}
        variants={item}
        className="flex items-start gap-4 text-lg md:text-xl text-slate-300 font-light">
        
          <span className="mt-2.5 flex-shrink-0">
            {icon || <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
          </span>
          <span className="leading-relaxed">{text}</span>
        </motion.li>
      )}
    </motion.ul>);

}