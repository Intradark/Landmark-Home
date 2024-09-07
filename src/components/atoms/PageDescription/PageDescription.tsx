import React from 'react';

interface PageDescriptionProps {
  children: React.ReactNode;
}

export function PageDescription({ children }: PageDescriptionProps) {
  return (
    <p className='text-balance text-muted-foreground text-center'>{children}</p>
  );
}
