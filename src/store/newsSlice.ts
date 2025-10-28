import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {NewsCategory} from "../constants/categories";

interface NewsState {
    selectedCategory: NewsCategory;
    searchQuery: string;
    isSearchMode: boolean;
}

const initialState: NewsState = {
    selectedCategory: 'general',
    searchQuery: '',
    isSearchMode: false,
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<NewsCategory>) => {
            state.selectedCategory = action.payload;
            state.isSearchMode = false
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        activateSearchMode: (state) => {
            state.isSearchMode = true
        },
        deactivateSearchMode: (state) => {
            state.isSearchMode = false
            state.searchQuery = '';
        }
    }
})

export const {setCategory, setSearchQuery, activateSearchMode, deactivateSearchMode} = newsSlice.actions;
export default newsSlice.reducer;