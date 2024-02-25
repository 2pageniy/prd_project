import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

export const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls['article-details-page'], {}, [className])}>
            {t('Article details page')}
        </div>
    );
};

export default memo(ArticleDetailsPage);
