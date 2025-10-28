import type {NewsResponse} from "../types/news";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { NewsCategory } from "../constants/categories";
import {API_KEY, BASE_URL, DEFAULT_PARAMS, ENDPOINTS} from "../constants/api";

const normalizeQuery = (query: string): string => {
    return query.trim().toLowerCase()
}



export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    keepUnusedDataFor: 300,
    endpoints: (builder) => ({
        getTopHeadlines: builder.query<NewsResponse, {category?: NewsCategory}>({
            query: ({ category }) => {
                const params = new URLSearchParams({
                    country: DEFAULT_PARAMS.country,
                    apiKey: API_KEY!,
                });

                if (category) {
                    params.append('category', category);
                }

                return `${ENDPOINTS.TOP_HEADLINES}?${params.toString()}`;
            }
        }),
        searchNews: builder.query<NewsResponse, string>({
            query: (searchQuery) => {
                const normalized = normalizeQuery(searchQuery);
                const params = new URLSearchParams({
                    q: normalized,
                    sortBy: 'publishedAt',
                    language: 'en',
                    apiKey: API_KEY!,
                });
                return `${ENDPOINTS.EVERYTHING}?${params.toString()}`;
            }
        }),
    }),
})

export const {useGetTopHeadlinesQuery, useSearchNewsQuery} = newsApi;