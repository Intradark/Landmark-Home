import React from 'react';
import { HighlightedNewsCarousel } from '@/components/molecules/HighlightedNewsCarousel/HighlightedNewsCarousel';
import { NewsTabSwitcher } from '@/components/molecules/NewsTabSwitcher/NewsTabSwitcher';

export interface HighlightedNews {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}

export interface NewsItem {
  title: string;
  content: string;
}

export interface NewsDashboardProps {
  highlightedNews: HighlightedNews[];
  internalNews: NewsItem[];
  externalNews: NewsItem[];
  industryNews: NewsItem[];
}

export function NewsDashboard({
  highlightedNews,
  internalNews,
  externalNews,
  industryNews,
}: NewsDashboardProps) {
  return (
    <div className='space-y-8'>
      <HighlightedNewsCarousel news={highlightedNews} />
      <NewsTabSwitcher
        internalNews={internalNews}
        externalNews={externalNews}
        industryNews={industryNews}
      />
    </div>
  );
}
