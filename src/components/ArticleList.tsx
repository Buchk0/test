import styled from 'styled-components';
import type { Article } from '../types/news';
import ArticleCard from './ArticleCard';

interface ArticleListProps {
    articles: Article[];
}

const Container = styled.div`
    margin-top: 24px;
`;

const FeaturedSection = styled.div`
    margin-bottom: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid #e0e0e0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #6c757d;
  font-size: 18px;
`;

function ArticleList({ articles }: ArticleListProps) {
    if (articles.length === 0) {
        return <EmptyState>No articles found</EmptyState>;
    }

    const [featuredArticle, ...restArticles] = articles;

    return (
        <Container>
            {featuredArticle && (
                <FeaturedSection>
                    <ArticleCard article={featuredArticle} featured />
                </FeaturedSection>
            )}

            <Grid>
                {restArticles.map((article) => (
                    <ArticleCard key={article.url} article={article} />
                ))}
            </Grid>
        </Container>
    );
}

export default ArticleList;