// src/constants/ui.ts (або articleCard.ts)

export const IMAGE_HEIGHTS = {
    FEATURED: '400px',
    REGULAR: '200px',
    FEATURED_MOBILE: '250px',
    REGULAR_MOBILE: '180px',
} as const;

export const PLACEHOLDER_TEXT = 'No image available';

export const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
};

export const TIME_AGO_LABELS = {
    JUST_NOW: 'Just now',
    HOURS_AGO: (hours: number) => `${hours}h ago`,
    YESTERDAY: 'Yesterday',
    DAYS_AGO: (days: number) => `${days} days ago`,
} as const;

export const SEARCH_PLACEHOLDER = 'Search for news...';

export const BUTTON_LABELS = {
    SEARCH: 'Search',
    SEARCHING: 'Searching...',
    BACK: 'Back',
} as const;

export const LOGO_TEXT = 'NEWS';

// Shared styling константи
export const COLORS = {
    PRIMARY: '#BB1919',
    PRIMARY_HOVER: '#A01616',
    SECONDARY: '#3F3F42',
    SECONDARY_HOVER: '#2A2A2C',
    BORDER: '#e0e0e0',
    TEXT_PRIMARY: '#141414',
    TEXT_SECONDARY: '#3F3F42',
    TEXT_TERTIARY: '#6E6E73',
    TEXT_MUTED: '#9E9EA7',
    BACKGROUND: 'white',
    BACKGROUND_HOVER: '#f9f9f9',
} as const;

export const MAX_CONTENT_WIDTH = '1400px';

export const MOBILE_BREAKPOINT = '768px'