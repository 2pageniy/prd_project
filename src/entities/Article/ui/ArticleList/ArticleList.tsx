import { HTMLAttributeAnchorTarget, memo } from 'react';
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
    target?: HTMLAttributeAnchorTarget;
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
    target,
    className,
}: ArticleListProps) => {
    const { t } = useTranslation();

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                key={article.id}
                article={article}
                view={view}
                target={target}
                className={cls.card}
            />
        );
    };

    return (
        <div className={classNames(cls['article-list'], {}, [className, cls[view]])}>
            {articles.length > 0 ? (
                articles.map(renderArticle)
            ) : (
                !isLoading && t('No articles')
            )}
            {isLoading && (
                <div className={classNames(cls['article-list'], {}, [className, cls[view]])}>
                    {getSkeletons(view)}
                </div>
            )}
        </div>
    );
});
