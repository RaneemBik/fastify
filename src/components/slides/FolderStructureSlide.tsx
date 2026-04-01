import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { CodeBlock } from '../CodeBlock';
import { motion } from 'framer-motion';
import { FolderIcon, FileCodeIcon } from 'lucide-react';
export function FolderStructureSlide() {
  const structure = `project/
├── app.js              # Main application file
├── routes/             # Route definitions
│   └── users.js
├── plugins/            # Reusable plugins
│   └── database.js
├── controllers/        # Business logic
│   └── userController.js
├── schemas/            # Data validation schemas
│   └── userSchema.js
└── services/           # Service layer
    └── userService.js`;
  const explanations = [
    {
      name: 'routes/',
      desc: 'Define API endpoints'
    },
    {
      name: 'plugins/',
      desc: 'Shared functionality'
    },
    {
      name: 'controllers/',
      desc: 'Handle requests'
    },
    {
      name: 'schemas/',
      desc: 'Data validation and type schemas'
    },
    {
      name: 'services/',
      desc: 'Business logic layer'
    }
  ];

  return (
    <SlideLayout
      title="Recommended Folder Structure"
      subtitle="Organize Your Code">
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-4">
          <CodeBlock code={structure} language="text" className="!text-base !p-8" />
        </div>
        <motion.div
          initial={{
            opacity: 0,
            x: 20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            delay: 0.4,
            duration: 0.5,
            ease: 'easeOut'
          }}
          className="lg:col-span-2 flex flex-col justify-center gap-4">
          
          {explanations.map((item, i) =>
          <div
            key={i}
            className="bg-slate-800/40 border border-slate-700/50 p-4 rounded-xl flex items-start gap-4">
            
              <FolderIcon
              className="w-5 h-5 text-cyan-400 mt-0.5"
              strokeWidth={1.5} />
            
              <div>
                <strong className="text-white font-medium block">
                  {item.name}
                </strong>
                <span className="text-slate-400 text-sm font-light">
                  {item.desc}
                </span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </SlideLayout>);

}