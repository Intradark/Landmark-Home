import { Typography } from '@/components/ui/typography';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface NewsHeaderProps {
  title: string;
  author: string;
  date: string;
  excerpt: string;
}

export function NewsHeader({ title, author, date, excerpt }: NewsHeaderProps) {
  return (
    <div className='space-y-4 mb-8'>
      <Typography variant='h1'>{title}</Typography>
      <div className='flex items-center space-x-4'>
        <Avatar>
          <AvatarImage
            src={`https://api.dicebear.com/6.x/initials/svg?seed=${author}`}
            alt={author}
          />
          <AvatarFallback>{author[0]}</AvatarFallback>
        </Avatar>
        <div>
          <Typography variant='small'>{author}</Typography>
          <Typography variant='small' className='text-muted-foreground'>
            {date}
          </Typography>
        </div>
      </div>
      <Typography variant='p' className='text-muted-foreground italic'>
        {excerpt}
      </Typography>
    </div>
  );
}
