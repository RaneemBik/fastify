import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { CodeBlock } from '../CodeBlock';
import { motion } from 'framer-motion';
export function ProjectSetupSlide() {
  const setupSteps = `# Create project directory
mkdir fastify-demo && cd fastify-demo

# Initialize npm project
npm init -y

# Install Fastify
npm install fastify

# Create main application file
touch app.js`;
  const steps = [
  'Create a new project directory',
  'Initialize npm with default settings',
  'Install Fastify package',
  'Create your main app.js file'];

  return (
    <SlideLayout title="Project Setup" subtitle="Getting Started">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <CodeBlock code={setupSteps} language="bash" />

        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 0.4,
            duration: 0.5
          }}
          className="space-y-6">
          
          {steps.map((step, index) =>
          <div key={index} className="flex items-center gap-5">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border border-cyan-500/30 bg-cyan-900/20 text-cyan-400 text-sm font-medium flex-shrink-0">
                {index + 1}
              </div>
              <span className="text-slate-300 font-light text-lg">{step}</span>
            </div>
          )}
        </motion.div>
      </div>
    </SlideLayout>);

}