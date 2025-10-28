import styled from 'styled-components';
import type {NewsCategory} from "../constants/categories";
import React from 'react';
import { COLORS } from '../constants/ui';

interface CategoryFilterProps {
    categories: readonly NewsCategory[];
    activeCategory: NewsCategory;
    onCategoryChange: (category: NewsCategory) => void;
}

const FilterContainer = styled.div`
    display: flex;
    gap: 0;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const CategoryButton = styled.button<{ $isActive: boolean }>`
    padding: 16px 20px;
    border: none;
    background-color: transparent;
    color: ${props => props.$isActive ? COLORS.PRIMARY : COLORS.TEXT_SECONDARY};
    font-size: 14px;
    font-weight: ${props => props.$isActive ? '700' : '600'};
    cursor: pointer;
    transition: all 0.2s;
    text-transform: uppercase;
    white-space: nowrap;
    border-bottom: 3px solid ${props => props.$isActive ? COLORS.PRIMARY : 'transparent'};
    letter-spacing: 0.5px;

    &:hover {
        color: ${COLORS.PRIMARY};
        background-color: ${COLORS.BACKGROUND_HOVER};
    }

    @media (max-width: 768px) {
        padding: 14px 16px;
        font-size: 13px;
    }
`;

function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
    return (
        <FilterContainer>
            {categories.map((category) => (
                <CategoryButton
                    key={category}
                    $isActive={activeCategory === category}
                    onClick={() => onCategoryChange(category)}
                >
                    {category}
                </CategoryButton>
            ))}
        </FilterContainer>
    );
}

export default React.memo(CategoryFilter);