import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    ArticleListItemSkeleton,
} from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton/ArticleListItemSkeleton';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => Array(view === ArticleView.BIG ? 3 : 9).fill(0).map((_, index) => (
    <ArticleListItemSkeleton
        /* eslint-disable-next-line react/no-array-index-key */
        key={index}
        view={view}
        className={cls.card}
    />
));

export const ArticleList = memo(({
    articles,
    isLoading,
    view = ArticleView.SMALL,
    className,
}: ArticleListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls['article-list'], {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>
        );
    }

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                key={article.id}
                article={article}
                view={view}
                className={cls.card}
            />
        );
    };

    return (
        <div className={classNames(cls['article-list'], {}, [className, cls[view]])}>
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
