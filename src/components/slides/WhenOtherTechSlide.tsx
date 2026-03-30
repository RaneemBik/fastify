import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { BulletList } from '../BulletList';
import { XIcon } from 'lucide-react';
export function WhenOtherTechSlide() {
  const points = [
  'Very simple, small applications with minimal requirements',
  'Teams already highly experienced with another framework (e.g., Express)',
  'Projects that heavily depend on a specific, large middleware ecosystem',
  'When rapid prototyping is more important than raw performance'];

  return (
    <SlideLayout
      title="When to Choose Other Technologies"
      subtitle="Consider Alternatives">
      
      <BulletList
        items={points}
        icon={<XIcon className="w-5 h-5 text-slate-500" strokeWidth={2} />} />
      
    </SlideLayout>);

}