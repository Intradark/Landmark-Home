import React from 'react';

interface PageTitleProps {
  children: React.ReactNode;
}

export function PageTitle({ children }: PageTitleProps) {
  return <h1 className='text-3xl font-bold text-center'>{children}</h1>;
}
