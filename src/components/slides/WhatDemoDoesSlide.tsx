import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { BulletList } from '../BulletList';
export function WhatDemoDoesSlide() {
  const points = [
  'Creates a Fastify server instance with built-in Pino logging enabled',
  'Defines a GET route at the root path (/)',
  'Returns a JSON response automatically (no need to stringify)',
  'Starts listening for requests on port 3000',
  'Logs server activity and errors to the console'];

  return (
    <SlideLayout title="What the Demo Does" subtitle="Understanding the Code">
      <BulletList items={points} />
    </SlideLayout>);

}