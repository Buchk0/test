import styled from "styled-components";
import {useAppSelector} from "../store/hooks";
import {useGetTopHeadlinesQuery, useSearchNewsQuery} from "../services/newsApi";
import Loader from "./Loader";
import ArticleList from "./ArticleList";

const Container = styled.div`
max-width: 1400px;
margin: 0 auto;
    padding: 0 20px;
`;

const ErrorMessage = styled.div`
text-align: center;
padding: 40px 20px;
color: #BB1919;
font-size: 16px;
`;

export const NewsContainer = () => {
    const { selectedCategory, searchQuery, isSearchMode } = useAppSelector((state) => state.news)
    const topHeadlinesQuery = useGetTopHeadlinesQuery(
        { category: selectedCategory },
        { skip: isSearchMode }
    )
    const searchNewsQuery = useSearchNewsQuery(
        searchQuery,
        { skip: !isSearchMode || !searchQuery },
    )

    const activeQuery = isSearchMode ? searchNewsQuery : topHeadlinesQuery
    const { data, isLoading, error } = activeQuery

    if (isLoading) {
        return (
            <Container>
                <Loader />
            </Container>
        )
    }

    if (error) {
        return (
            <Container>
                <ErrorMessage>Failed to load news</ErrorMessage>
            </Container>
        )
    }

    if (!data || data.articles.length === 0) {
        return (
            <Container>
                <ErrorMessage>No articles found.</ErrorMessage>
            </Container>
        )
    }

    return (
        <Container>
            <ArticleList articles={data.articles} />
        </Container>
    )
}

export default NewsContainer;