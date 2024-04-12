import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = memo(({
    articles,
    isLoading,
    view = ArticleView.SMALL,
    className,
}: ArticleListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <Skeleton />
        );
    }

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                key={article.id}
                article={article}
                view={view}
            />
        );
    };

    return (
        <div className={classNames(cls['article-list'], {}, [className])}>
            {articles.length > 0 ? (
                articles.map(renderArticle)
            ) : (
                <>
                    {t('No articles')}
                </>
            )}
        </div>
    );
});
