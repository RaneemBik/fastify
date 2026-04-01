import { motion } from 'framer-motion';
interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  preClassName?: string;
}
export function CodeBlock({ code, language = 'javascript', className = '', preClassName = '' }: CodeBlockProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.4,
        delay: 0.3,
        ease: 'easeOut'
      }}
      className={`relative bg-slate-800/80 border border-slate-700/60 rounded-xl p-4 md:p-5 overflow-hidden shadow-lg backdrop-blur-sm ${className}`}>
      
      {language &&
      <div className="absolute top-3 right-4 text-xs font-medium text-slate-500 uppercase tracking-wider">
          {language}
        </div>
      }
      <pre className={`text-xs md:text-sm text-cyan-50/90 leading-relaxed mt-2 whitespace-pre-wrap break-words ${preClassName}`}>
        <code>{code}</code>
      </pre>
    </motion.div>);

}