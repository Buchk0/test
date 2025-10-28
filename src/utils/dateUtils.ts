import { TIME_AGO_LABELS, DATE_FORMAT_OPTIONS } from '../constants/ui';

export const formatTimeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return TIME_AGO_LABELS.JUST_NOW;
    if (diffInHours < 24) return TIME_AGO_LABELS.HOURS_AGO(diffInHours);

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return TIME_AGO_LABELS.YESTERDAY;
    if (diffInDays < 7) return TIME_AGO_LABELS.DAYS_AGO(diffInDays);

    return date.toLocaleDateString('en-GB', DATE_FORMAT_OPTIONS);
};