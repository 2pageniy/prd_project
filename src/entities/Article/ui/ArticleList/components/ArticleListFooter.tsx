import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../../model/types/article';
import cls from '../ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../../ArticleListItem/ArticleListItemSkeleton/ArticleListItemSkeleton';

interface FooterProps {
    isLoading: boolean;
    view: ArticleView;
    articles: Article[];
}

const getSkeletons = (view: ArticleView) => Array(view === ArticleView.BIG ? 3 : 9).fill(0).map((_, index) => (
    <ArticleListItemSkeleton
        /* eslint-disable-next-line react/no-array-index-key */
        key={index}
        view={view}
        className={cls.card}
    />
));

export const Footer = ({ isLoading, view, articles }: FooterProps) => memo(() => {
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
