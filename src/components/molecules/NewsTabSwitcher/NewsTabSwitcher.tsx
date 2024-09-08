'use client';

import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { NewsList } from '@/components/organisms/NewsList/NewsList';
import { NewsItem } from '@/components/templates/NewsDashboard/NewsDashboard';

export interface NewsTabSwitcherProps {
  internalNews: NewsItem[];
  externalNews: NewsItem[];
  industryNews: NewsItem[];
}

export function NewsTabSwitcher({
  internalNews,
  externalNews,
  industryNews,
}: NewsTabSwitcherProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'internal';

  useEffect(() => {
    if (!searchParams.get('tab')) {
      router.replace('/news?tab=internal', { scroll: false });
    }
  }, [router, searchParams]);

  const handleTabChange = (value: string) => {
    router.push(`/news?tab=${value}`, { scroll: false });
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className='w-full'>
      <TabsList className='grid w-full grid-cols-3'>
        <TabsTrigger value='internal'>Internal News</TabsTrigger>
        <TabsTrigger value='external'>External News</TabsTrigger>
        <TabsTrigger value='industry'>Industry News</TabsTrigger>
      </TabsList>
      <TabsContent value='internal'>
        <NewsList news={internalNews} />
      </TabsContent>
      <TabsContent value='external'>
        <NewsList news={externalNews} />
      </TabsContent>
      <TabsContent value='industry'>
        <NewsList news={industryNews} />
      </TabsContent>
    </Tabs>
  );
}
