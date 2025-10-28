import styled from 'styled-components';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {activateSearchMode, deactivateSearchMode, setCategory, setSearchQuery} from "./store/newsSlice";
import {NEWS_CATEGORIES} from './constants/categories';
import type { RootState } from "./store/store";
import NewsContainer from "./components/NewsContainer";
import type { NewsCategory } from "./constants/categories";

const AppContainer = styled.div`
    min-height: 100vh;
    background-color: #f5f5f5;
`;

function App() {
    const dispatch = useAppDispatch();
    const { selectedCategory, searchQuery, isSearchMode} = useAppSelector((state: RootState) => state.news);

    const handleCategoryChange = (category: NewsCategory) => {
        dispatch(setCategory(category));
    }

    const handleSearchChange = (value: string) => {
        dispatch(setSearchQuery(value));
    }

    const handleChange = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim() && !isSearchMode) {}
        dispatch(activateSearchMode())
    }

    const handleBackToCategories =  () => {
        dispatch(deactivateSearchMode());
    }

    return (
        <AppContainer>
            <Header />

            <SearchBar
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onSearch={handleChange}
                isSearchMode={isSearchMode}
                onBackToCategories={handleBackToCategories} />

            {!isSearchMode && (
                <CategoryFilter
                    categories={NEWS_CATEGORIES}
                    activeCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange} />
            )}

            <NewsContainer />
        </AppContainer>
    )

}

export default App;