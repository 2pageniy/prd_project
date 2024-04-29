import {
    ForwardedRef, forwardRef, HTMLAttributeAnchorTarget, memo,
} from 'react';
import { GridListProps, Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { useTranslation } from 'react-i18next';
import { ArticlePageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlePageFilters';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton/ArticleListItemSkeleton';
import { Article, ArticleView } from '../../model/types/article';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    onLoadNextPart?: () => void;
}

const getSkeletons = (view: ArticleView) => Array(view === ArticleView.BIG ? 3 : 9).fill(0).map((_, index) => (
    <ArticleListItemSkeleton
        /* eslint-disable-next-line react/no-array-index-key */
        key={index}
        view={view}
        className={cls.card}
    />
));

const Header = () => (
    <ArticlePageFilters className={cls.header} />
);

const List = forwardRef(({
    style,
    children,
    ...props
}: GridListProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div
        ref={ref}
        style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 30,
            marginRight: 30,
            ...style,
        }}
        {...props}
    >
        {children}
    </div>
));

interface FooterProps {
    isLoading: boolean;
    view: ArticleView;
    articles: Article[];
}

const Footer = ({ isLoading, view, articles }: FooterProps) => memo(() => {
    const { t } = useTranslation();

    return (
        <footer
            className={cls['skeleton-footer']}
        >
            {isLoading && (
                getSkeletons(view)
            )}
            {!isLoading && articles.length === 0 && (
                t('No articles')
            )}
        </footer>
    );
});

export const ArticleList = memo(({
    articles,
    view = ArticleView.SMALL,
    isLoading = false,
    target,
    onLoadNextPart = () => {},
    className,
}: ArticleListProps) => {
    const renderArticle = (_: number, article: Article) => {
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
        <div
            className={classNames(cls['article-list'], {}, [className, cls[view]])}
        >
            {ArticleView.SMALL ? (
                <VirtuosoGrid
                    style={{ height: '100%' }}
                    data={articles}
                    itemContent={renderArticle}
                    endReached={onLoadNextPart}
                    overscan={18}
                    components={{
                        Header,
                        Footer: Footer({ isLoading, view, articles }),
                        List,
                    }}
                />
            ) : (
                <Virtuoso
                    style={{ height: '100%' }}
                    data={articles}
                    itemContent={renderArticle}
                    endReached={onLoadNextPart}
                    components={{
                        Header,
                        Footer: Footer({ isLoading, view, articles }),
                    }}
                />
            )}
        </div>
    );
});
