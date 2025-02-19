import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { ArticleList } from '@/entities/Article';
import { Text, TextSize } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList } from '../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(({
    className,
}: ArticleRecommendationsListProps) => {
    const { t } = useTranslation('article-details');
    const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) {
        return null;
    }

    return (
        <VStack gap={8} className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Recommendations')}
            />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                target='_blank'
            />
        </VStack>
    );
});
