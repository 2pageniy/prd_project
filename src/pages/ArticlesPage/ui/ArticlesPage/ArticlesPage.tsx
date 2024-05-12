import { FC, memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleInfinityList } from '../ArticleInfinityList/ArticleInfinityList';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';

import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

export const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                className={classNames(cls['articles-page'], {}, [className])}
            >
                <ArticleInfinityList />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
