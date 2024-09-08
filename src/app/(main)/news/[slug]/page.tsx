import { Metadata } from 'next';
import { NewsArticle } from '@/components/templates/NewsArticle/NewsArticle';
import { getNewsArticleBySlug, getAllNewsArticles } from '@/lib/api';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const articles = await getAllNewsArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getNewsArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getNewsArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div key={article.slug}>
      <NewsArticle article={article} />
    </div>
  );
}
