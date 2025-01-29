import { FC, memo } from 'react';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticlePageFilters } from '../ArticlesPageFilters/ArticlePageFilters';
import { ArticleInfinityList } from '../ArticleInfinityList/ArticleInfinityList';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';

import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const Header = () => (
    <ArticlePageFilters className={cls.header} />
);

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

export const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                className={classNames(cls['articles-page'], {}, [className])}
            >
                <ArticleInfinityList
                    Header={Header}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
