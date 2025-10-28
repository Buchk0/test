export const NEWS_CATEGORIES = [
    'general',
    'business',
    'technology',
    'sports',
    'health',
    'science',
    'entertainment',
] as const;

export type NewsCategory = typeof NEWS_CATEGORIES[number];