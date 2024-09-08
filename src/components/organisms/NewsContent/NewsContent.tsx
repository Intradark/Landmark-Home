import { Typography } from '@/components/ui/typography';

interface NewsContentProps {
  content: string;
}

export function NewsContent({ content }: NewsContentProps) {
  return (
    <Typography
      variant='p'
      className='prose max-w-none'
      dangerouslySetInnerHTML={{ __html: content }}
    ></Typography>
  );
}
