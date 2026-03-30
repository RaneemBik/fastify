import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { BulletList } from '../BulletList';
import { CheckIcon } from 'lucide-react';
export function BestPracticesSlide() {
  const practices = [
  'Organize code into logical folders (routes, plugins, controllers)',
  'Separate routes from business logic',
  'Use plugins for reusable functionality',
  'Always use async/await for asynchronous operations',
  'Validate all request data using JSON schemas'];

  return (
    <SlideLayout title="Best Practices" subtitle="Recommended Approaches">
      <BulletList
        items={practices}
        icon={<CheckIcon className="w-5 h-5 text-cyan-400" strokeWidth={2} />} />
      
    </SlideLayout>);

}