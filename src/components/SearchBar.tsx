import styled from 'styled-components';
import { SEARCH_PLACEHOLDER, BUTTON_LABELS, COLORS } from '../constants/ui';

interface SearchBarProps {
    searchQuery: string;
    onSearchChange: (value: string) => void;
    onSearch: (e: React.FormEvent) => void;
    isSearchMode: boolean;
    onBackToCategories: () => void;
    isLoading?: boolean;
}

const SearchContainer = styled.div`
    background-color: ${COLORS.BACKGROUND};
    padding: 16px 20px;
    border-bottom: 1px solid ${COLORS.BORDER};
    margin-bottom: 24px;
`;

const SearchContent = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`;

const SearchForm = styled.form`
    display: flex;
    gap: 12px;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const SearchInput = styled.input`
    flex: 1;
    padding: 10px 16px;
    border: 2px solid ${COLORS.BORDER};
    border-radius: 0;
    font-size: 15px;
    transition: border-color 0.2s;
    font-family: 'Helvetica Neue', Arial, sans-serif;

    &:focus {
        outline: none;
        border-color: ${COLORS.PRIMARY};
    }

    &::placeholder {
        color: ${COLORS.TEXT_MUTED};
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
    padding: 10px 24px;
    border: none;
    border-radius: 0;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    background-color: ${props => props.variant === 'secondary' ? COLORS.SECONDARY : COLORS.PRIMARY};
    color: white;

    &:hover {
        background-color: ${props => props.variant === 'secondary' ? COLORS.SECONDARY_HOVER : COLORS.PRIMARY_HOVER};
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

function SearchBar({
                       searchQuery,
                       onSearchChange,
                       onSearch,
                       isSearchMode,
                       onBackToCategories,
                       isLoading = false
                   }: SearchBarProps) {
    return (
        <SearchContainer>
            <SearchContent>
                <SearchForm onSubmit={onSearch}>
                    <SearchInput
                        type="text"
                        placeholder={SEARCH_PLACEHOLDER}
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        disabled={isLoading}
                    />
                    <Button type="submit" disabled={!searchQuery.trim()}>
                        {isLoading ? BUTTON_LABELS.SEARCHING : BUTTON_LABELS.SEARCH}
                    </Button>
                    {isSearchMode && (
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={onBackToCategories}
                            disabled={isLoading}
                        >
                            {BUTTON_LABELS.BACK}
                        </Button>
                    )}
                </SearchForm>
            </SearchContent>
        </SearchContainer>
    );
}

export default SearchBar;