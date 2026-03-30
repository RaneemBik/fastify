import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { BulletList } from '../BulletList';
import { CheckIcon } from 'lucide-react';
export function WhenToChooseSlide() {
  const points = [
  'Building high-performance backend systems',
  'Creating APIs that handle many concurrent requests',
  'Developing microservices architectures',
  'Working on projects using TypeScript',
  'Need built-in request/response validation'];

  return (
    <SlideLayout title="When to Choose Fastify" subtitle="Ideal Scenarios">
      <BulletList
        items={points}
        icon={<CheckIcon className="w-5 h-5 text-cyan-400" strokeWidth={2} />} />
      
    </SlideLayout>);

}