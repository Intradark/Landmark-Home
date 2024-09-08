export interface NewsArticle {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
}

const dummyArticles: NewsArticle[] = [
  {
    slug: 'exciting-new-product-launch-project-x',
    title: 'Exciting New Product Launch: Project X',
    author: 'Aaron J. Girton',
    date: '2023-06-15',
    excerpt:
      'Get ready for a game-changing product that will revolutionize our industry.',
    content: `
      <p>We are thrilled to announce the launch of our latest innovation, Project X. This groundbreaking product is the result of years of research and development, and we believe it will set a new standard in our industry.</p>

      <h2>Key Features</h2>
      
      <ul>
        <li>Advanced AI integration for personalized user experiences</li>
        <li>Sustainable materials and energy-efficient design</li>
        <li>Seamless cross-platform compatibility</li>
        <li>Enhanced security measures to protect user data</li>
      </ul>

      <p>Project X is not just a product; it's a testament to our commitment to innovation and customer satisfaction. We've listened to your feedback and incorporated features that address the evolving needs of our users.</p>

      <h2>Launch Date</h2>
      <p>Mark your calendars! Project X will be available for pre-order starting next month, with the official launch scheduled for September 1st, 2023.</p>

      <p>Stay tuned for more updates and exclusive sneak peeks in the coming weeks. We can't wait to share this exciting new chapter with you all!</p>
    `,
  },
  // Add more dummy articles here...
];

export async function getAllNewsArticles(): Promise<NewsArticle[]> {
  // In a real application, this would fetch from Supabase
  return dummyArticles;
}

export async function getNewsArticleBySlug(
  slug: string
): Promise<NewsArticle | undefined> {
  // In a real application, this would fetch from Supabase
  return dummyArticles.find((article) => article.slug === slug);
}
