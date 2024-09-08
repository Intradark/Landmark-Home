import React from 'react';
import { cn } from '@/lib/utils';

type TypographyElement = HTMLElement | SVGElement;

interface TypographyProps extends React.HTMLAttributes<TypographyElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'list' | 'small';
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}

const variantStyles = {
  h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
  h2: 'mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
  h3: 'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  p: 'leading-7 [&:not(:first-child)]:mt-6',
  blockquote: 'mt-6 border-l-2 pl-6 italic',
  list: 'my-6 ml-6 list-disc [&>li]:mt-2',
  small: 'text-sm font-medium leading-none',
};

export function Typography({
  variant = 'p',
  as,
  children,
  className,
  dangerouslySetInnerHTML,
  ...props
}: TypographyProps) {
  const Component = as || (variant === 'list' ? 'ul' : variant);

  return React.createElement(
    Component,
    {
      className: cn(variantStyles[variant], className),
      ...props,
      ...(dangerouslySetInnerHTML && { dangerouslySetInnerHTML }),
    },
    !dangerouslySetInnerHTML ? children : undefined
  );
}
