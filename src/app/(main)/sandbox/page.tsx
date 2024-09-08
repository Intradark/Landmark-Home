import React from 'react';

import SandboxCard from '@/components/molecules/SandboxCard/SandboxCard';

const Sandbox = () => {
  const modules = [
    { title: 'Document Generator', href: '/sandbox/document-generator' },
    { title: 'Chart Generator', href: '/sandbox/chart-generator' },
    { title: 'Yield Calculator', href: '/sandbox/yield-calculator' },
    { title: 'Property Comparison', href: '/sandbox/property-comparison' },
    { title: 'Market Trends', href: '/sandbox/market-trends' },
  ];

  return (
    <div className='bg-background text-foreground'>
      <div className='max-w-6xl mx-auto p-4 space-y-4'>
        <div className='grid grid-cols-3 gap-4'>
          {modules.map((module) => (
            <SandboxCard
              key={module.title}
              title={module.title}
              href={module.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sandbox;
