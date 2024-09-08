'use client';

import React from 'react';
import { NewsDashboard } from '@/components/templates/NewsDashboard/NewsDashboard';

const News = () => {
  // Mock data - replace with actual data fetching logic
  const highlightedNews = [
    {
      id: '1',
      title: 'Company Expansion Plans Announced',
      content: 'Our company is expanding to new markets in the coming year...',
      imageUrl: '/images/expansion.jpg',
    },
    // Add more highlighted news items
  ];

  const internalNews = [
    {
      title: 'New Employee Benefits Program',
      content:
        'We are excited to announce our new employee benefits program...',
    },
    // Add more internal news items
  ];

  const externalNews = [
    {
      title: 'Company Featured in Industry Magazine',
      content:
        'Our innovative approach was highlighted in the latest issue of...',
    },
    // Add more external news items
  ];

  const industryNews = [
    {
      title: 'New Regulations Impact Real Estate Market',
      content:
        'Recent changes in regulations are affecting the real estate market...',
    },
    // Add more industry news items
  ];

  return (
    <div className='bg-background text-foreground'>
      <div className='max-w-6xl mx-auto p-4 space-y-4'>
        <NewsDashboard
          highlightedNews={highlightedNews}
          internalNews={internalNews}
          externalNews={externalNews}
          industryNews={industryNews}
        />
      </div>
    </div>
  );
};

export default News;
