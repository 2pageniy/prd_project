import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { RoutePath } from '@/shared/config/routerConfig/routeConfig';

import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(({
    className,
}: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.articles}/${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <HStack justify='between' max className={classNames('', {}, [className])}>
            <Button
                onClick={onBackToList}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Back to list')}
            </Button>
            {canEdit && (
                <Button
                    onClick={onEditArticle}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Edit article')}
                </Button>
            )}
        </HStack>
    );
});
