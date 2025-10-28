export const BASE_URL = 'https://newsapi.org/v2';
export const API_KEY = import.meta.env.VITE_NEWS_API_KEY

    export const ENDPOINTS = {
    TOP_HEADLINES: '/top-headlines',
    EVERYTHING: '/everything',
} as const;

export const DEFAULT_PARAMS = {
    country: 'us',
    pageSize: 100,
} as const;

