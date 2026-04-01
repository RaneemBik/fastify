import { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { TitleSlide } from './slides/TitleSlide';
import { IntroductionSlide } from './slides/IntroductionSlide';
import { UseCasesSlide } from './slides/UseCasesSlide';
import { WhyPopularSlide } from './slides/WhyPopularSlide';
import { WhenToChooseSlide } from './slides/WhenToChooseSlide';
import { WhenOtherTechSlide } from './slides/WhenOtherTechSlide';
import { CoreConceptsSlide } from './slides/CoreConceptsSlide';
import { HowItWorksSlide } from './slides/HowItWorksSlide';
import { KeyFeaturesSlide } from './slides/KeyFeaturesSlide';
import { BestPracticesSlide } from './slides/BestPracticesSlide';
import { FolderStructureSlide } from './slides/FolderStructureSlide';
import { ProjectSetupSlide } from './slides/ProjectSetupSlide';
import { DemoCodeSlide } from './slides/DemoCodeSlide';
import { ComparisonTableSlide } from './slides/ComparisonTableSlide';
import { SummarySlide } from './slides/SummarySlide';
import { ResourcesSlide } from './slides/ResourcesSlide';
import { QuestionsSlide } from './slides/QuestionsSlide';

const slides = [
TitleSlide,
IntroductionSlide,
UseCasesSlide,
WhyPopularSlide,
WhenToChooseSlide,
WhenOtherTechSlide,
CoreConceptsSlide,
HowItWorksSlide,
KeyFeaturesSlide,
BestPracticesSlide,
FolderStructureSlide,
ProjectSetupSlide,
DemoCodeSlide,
ComparisonTableSlide,
SummarySlide,
ResourcesSlide,
QuestionsSlide];

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalSlides = slides.length;
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);
  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 20 : -20,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -20 : 20,
      opacity: 0,
      scale: 0.98
    })
  };
  const CurrentSlideComponent = slides[currentSlide];
  const progress = (currentSlide + 1) / totalSlides * 100;
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    function measure() {
      const viewport = viewportRef.current;
      const content = contentRef.current;
      if (!viewport || !content) return setScale(1);
      const containerHeight = viewport.clientHeight;
      const containerWidth = viewport.clientWidth;
      const contentHeight = content.scrollHeight;
      const contentWidth = content.scrollWidth;
      const heightScale = contentHeight > 0 ? containerHeight / contentHeight : 1;
      const widthScale = contentWidth > 0 ? containerWidth / contentWidth : 1;
      const newScale = Math.min(1, heightScale, widthScale);
      setScale(newScale);
    }

    measure();

    const viewport = viewportRef.current;
    const content = contentRef.current;
    const observer = new ResizeObserver(() => measure());
    if (viewport) observer.observe(viewport);
    if (content) observer.observe(content);

    const raf1 = requestAnimationFrame(measure);
    const raf2 = requestAnimationFrame(measure);

    window.addEventListener('resize', measure);
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [currentSlide]);

  return (
    <div className="w-full h-screen bg-slate-900 flex flex-col overflow-hidden text-slate-200">
      {/* Progress Bar */}
      <motion.div
        className="h-[2px] bg-cyan-400"
        initial={{
          width: 0
        }}
        animate={{
          width: `${progress}%`
        }}
        transition={{
          duration: 0.4,
          ease: 'easeOut'
        }} />
      

      {/* Slide Container */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: {
                type: 'spring',
                stiffness: 300,
                damping: 30
              },
              opacity: {
                duration: 0.3
              },
              scale: {
                duration: 0.3
              }
            }}
            className="absolute inset-0 p-6 md:p-10 overflow-hidden">
            <div ref={viewportRef} className="w-full h-full flex items-start justify-center overflow-hidden">
              <div
                ref={contentRef}
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: 'top center',
                  width: '100%'
                }}
                className="w-full">
                <CurrentSlideComponent />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between px-8 py-6 bg-slate-900 border-t border-slate-800/50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-md border border-slate-700/50 bg-slate-800/30 text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-800 hover:text-white transition-all duration-200">
          
          <ChevronLeftIcon className="w-4 h-4" />
          <span className="hidden sm:inline text-sm font-medium">Previous</span>
        </button>

        <div className="text-slate-500 text-sm font-medium tracking-widest">
          {currentSlide + 1} <span className="opacity-50">/</span> {totalSlides}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="flex items-center gap-2 px-4 py-2 rounded-md border border-slate-700/50 bg-slate-800/30 text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-800 hover:text-white transition-all duration-200">
          
          <span className="hidden sm:inline text-sm font-medium">Next</span>
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>);

}