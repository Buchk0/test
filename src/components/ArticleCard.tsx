import styled from 'styled-components';
import type { Article } from '../types/news';
import React from 'react';
import { formatTimeAgo } from '../utils/dateUtils';
import { IMAGE_HEIGHTS, PLACEHOLDER_TEXT, COLORS } from '../constants/ui';

interface ArticleCardProps {
    article: Article;
    featured?: boolean;
}

const Card = styled.article<{ $featured?: boolean }>`
    background-color: ${COLORS.BACKGROUND};
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: background-color 0.2s;
    border-bottom: 1px solid ${COLORS.BORDER};
    padding-bottom: ${props => props.$featured ? '16px' : '12px'};

    &:hover {
        background-color: ${COLORS.BACKGROUND_HOVER};
    }
`;

const ArticleImage = styled.img<{ $featured?: boolean }>`
    width: 100%;
    height: ${props => props.$featured ? IMAGE_HEIGHTS.FEATURED : IMAGE_HEIGHTS.REGULAR};
    object-fit: cover;
    margin-bottom: 12px;

    @media (max-width: 768px) {
        height: ${props => props.$featured ? IMAGE_HEIGHTS.FEATURED_MOBILE : IMAGE_HEIGHTS.REGULAR_MOBILE};
    }
`;

const NoImagePlaceholder = styled.div<{ $featured?: boolean }>`
    width: 100%;
    height: ${props => props.$featured ? IMAGE_HEIGHTS.FEATURED : IMAGE_HEIGHTS.REGULAR};
    background-color: ${COLORS.BORDER};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-size: 14px;
    margin-bottom: 12px;

    @media (max-width: 768px) {
        height: ${props => props.$featured ? IMAGE_HEIGHTS.FEATURED_MOBILE : IMAGE_HEIGHTS.REGULAR_MOBILE};
    }
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const SourceName = styled.span`
    font-size: 12px;
    font-weight: 700;
    color: ${COLORS.PRIMARY};
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

const CardTitle = styled.h2<{ $featured?: boolean }>`
    font-size: ${props => props.$featured ? '28px' : '18px'};
    font-weight: 700;
    color: ${COLORS.TEXT_PRIMARY};
    line-height: 1.3;
    margin: 0;
    font-family: 'Helvetica Neue', Arial, sans-serif;

    &:hover {
        color: ${COLORS.PRIMARY};
    }

    @media (max-width: 768px) {
        font-size: ${props => props.$featured ? '22px' : '16px'};
    }
`;

const CardDescription = styled.p<{ $featured?: boolean }>`
    font-size: ${props => props.$featured ? '16px' : '14px'};
    color: ${COLORS.TEXT_SECONDARY};
    line-height: 1.5;
    margin: 0;
    display: ${props => props.$featured ? 'block' : '-webkit-box'};
    -webkit-line-clamp: ${props => props.$featured ? 'none' : '2'};
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const TimeAgo = styled.span`
    font-size: 13px;
    color: ${COLORS.TEXT_TERTIARY};
    margin-top: 4px;
`;

function ArticleCard({ article, featured = false }: ArticleCardProps) {
    const handleClick = () => {
        window.open(article.url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Card $featured={featured} onClick={handleClick}>
            {article.urlToImage ? (
                <ArticleImage
                    src={article.urlToImage}
                    alt={article.title}
                    $featured={featured}
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                    loading="lazy"
                />
            ) : (
                <NoImagePlaceholder $featured={featured}>
                    {PLACEHOLDER_TEXT}
                </NoImagePlaceholder>
            )}

            <CardContent>
                <SourceName>{article.source.name}</SourceName>
                <CardTitle $featured={featured}>{article.title}</CardTitle>
                {article.description && (
                    <CardDescription $featured={featured}>
                        {article.description}
                    </CardDescription>
                )}
                <TimeAgo>{formatTimeAgo(article.publishedAt)}</TimeAgo>
            </CardContent>
        </Card>
    );
}

export default React.memo(ArticleCard);