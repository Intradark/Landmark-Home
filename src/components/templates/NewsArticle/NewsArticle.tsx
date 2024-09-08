import { Card } from '@/components/ui/card';
import { NewsHeader } from '@/components/organisms/NewsHeader/NewsHeader';
import { NewsContent } from '@/components/organisms/NewsContent/NewsContent';
import { NewsArticle as NewsArticleType } from '@/lib/api';

export interface NewsArticleProps {
  article: NewsArticleType;
}

export function NewsArticle({ article }: NewsArticleProps) {
  return (
    <Card className='max-w-5xl mx-auto my-4 p-6'>
      <NewsHeader
        title={article.title}
        author={article.author}
        date={article.date}
        excerpt={article.excerpt}
      />
      <NewsContent content={article.content} />
    </Card>
  );
}
