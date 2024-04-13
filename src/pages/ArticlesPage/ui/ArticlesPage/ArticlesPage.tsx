import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleList } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

export const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls['articles-page'], {}, [className])}>
            {t('Articles page')}
            <ArticleList
                isLoading
                articles={[]}
            />
        </div>
    );
};

export default memo(ArticlesPage);
