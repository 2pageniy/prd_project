import {
    ForwardedRef, forwardRef, HTMLAttributeAnchorTarget, memo,
} from 'react';
import { GridListProps, Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Flex } from 'shared/ui/Stack';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article } from '../../model/types/article';
import { Header } from './components/ArticleListHeader';
import { Footer, getSkeletons } from './components/ArticleListFooter';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    onLoadNextPart?: () => void;
    virtualized?: boolean;
}

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

export const ArticleList = memo(({
    articles,
    view = ArticleView.SMALL,
    isLoading = false,
    target,
    onLoadNextPart = () => {},
    virtualized = false,
    className,
}: ArticleListProps) => {
    const { t } = useTranslation();
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
            {/* eslint-disable-next-line no-nested-ternary */}
            {virtualized ? (
                ArticleView.SMALL ? (
                    <VirtuosoGrid
                        style={{ height: '100%' }}
                        data={articles}
                        itemContent={renderArticle}
                        endReached={onLoadNextPart}
                        overscan={0}
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
                )
            ) : (
                <Flex
                    wrap
                    direction={view === ArticleView.BIG ? 'column' : 'row'}
                >
                    {articles.length > 0 ? (
                        articles.map((item) => (
                            <ArticleListItem
                                key={item.id}
                                article={item}
                                view={view}
                                target={target}
                                className={cls.card}
                            />
                        ))
                    ) : (
                        !isLoading && t('No articles')
                    )}
                    {isLoading && (
                        <Flex
                            align=''
                            max
                            wrap
                            direction={view === ArticleView.BIG ? 'column' : 'row'}
                        >
                            {getSkeletons(view)}
                        </Flex>
                    )}
                </Flex>
            )}
        </div>
    );
});
