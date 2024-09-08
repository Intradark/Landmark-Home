import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { HighlightedNews } from '@/components/templates/NewsDashboard/NewsDashboard';

interface HighlightedNewsCarouselProps {
  news: HighlightedNews[];
}

export function HighlightedNewsCarousel({
  news,
}: HighlightedNewsCarouselProps) {
  return (
    <Carousel className='w-full'>
      <CarouselContent>
        {news.map((item) => (
          <CarouselItem key={item.id}>
            <Card className='w-full h-[400px] relative overflow-hidden'>
              <img
                src={item.imageUrl}
                alt={item.title}
                className='absolute inset-0 w-full h-full object-cover'
              />
              <CardContent className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4'>
                <h2 className='text-2xl font-bold'>{item.title}</h2>
                <p className='mt-2'>{item.content}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
