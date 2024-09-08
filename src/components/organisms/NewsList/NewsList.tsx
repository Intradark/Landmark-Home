import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface NewsItem {
  title: string;
  content: string;
}

interface NewsListProps {
  news: NewsItem[];
}

export function NewsList({ news }: NewsListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Industry News</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className='space-y-4'>
          {news.map((item, index) => (
            <li key={index}>
              <h3 className='font-semibold'>{item.title}</h3>
              <p className='text-sm text-muted-foreground'>{item.content}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
