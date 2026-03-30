import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { CodeBlock } from '../CodeBlock';
export function DemoCodeSlide() {
  const code = `// app.js
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
  return { message: 'Hello Fastify' }
})

// Run the server!
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on \${address}
})`;
  return (
    <SlideLayout title="Demo" subtitle="Simple Fastify Example">
      <CodeBlock code={code} language="javascript" />
    </SlideLayout>);

}