import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { BulletList } from '../BulletList';
import { StarIcon } from 'lucide-react';
export function KeyFeaturesSlide() {
  const features = [
  'Extremely fast routing - Optimized radix tree based routing',
  'JSON schema validation - Built-in data validation and serialization',
  'Plugin architecture - Modular, encapsulated, and extensible',
  'Built-in logging - Integrated high-performance Pino logger',
  'TypeScript support - Full TypeScript compatibility and types'];

  return (
    <SlideLayout title="Key Features" subtitle="What Makes Fastify Stand Out">
      <BulletList
        items={features}
        icon={<StarIcon className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />} />
      
    </SlideLayout>);

}