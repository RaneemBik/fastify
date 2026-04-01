import { SlideLayout } from '../SlideLayout';
import { motion } from 'framer-motion';

export function ResourcesSlide() {
  const links = [
    { label: 'Official docs', url: 'https://www.fastify.io/docs/latest/' },
    { label: 'YouTube Video', url: 'https://youtu.be/Lk-uVEVGxOA?si=WLIfUejBwidWJ3EV' },
    { label: 'YouTube Video Tutorial', url: 'https://youtube.com/playlist?list=PLaLqLOj2bk9bXHrewQhwDjXglwXpEfa6L&si=N19ALvPagk3bfIPZ' },
    { label: 'Fastify page', url: 'https://fastify.dev/' }
  ];

  return (
    <SlideLayout title="Resources" subtitle="Learn more and get involved">
      <motion.ul
        initial="hidden"
        animate="show"
        className="space-y-5">
        {links.map((l, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * i, duration: 0.35, ease: 'easeOut' }}
            className="flex items-start gap-4 text-lg md:text-xl text-slate-300 font-light">
            <span className="mt-2.5 flex-shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </span>
            <a
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-cyan-300 transition-colors">
              <span className="font-medium">{l.label}</span>
              <span className="text-slate-400 font-light"> — {l.url}</span>
            </a>
          </motion.li>
        ))}
      </motion.ul>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.45, ease: 'easeOut' }}
        className="mt-10 text-slate-400 text-sm leading-relaxed">
        Tip: Start with the official docs and the videos, then explore
        community plugins to accelerate development.
      </motion.p>
    </SlideLayout>);

}
