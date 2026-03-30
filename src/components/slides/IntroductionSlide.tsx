import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { BulletList } from '../BulletList';
export function IntroductionSlide() {
  const points = [
  'Fastify is a web framework for Node.js',
  'Designed to build fast and efficient web applications',
  'Focuses on providing the best developer experience',
  'Built from the ground up to be highly performant',
  'Used to create APIs and web servers'];

  return (
    <SlideLayout title="What is Fastify?" subtitle="Introduction">
      <BulletList items={points} />
    </SlideLayout>);

}