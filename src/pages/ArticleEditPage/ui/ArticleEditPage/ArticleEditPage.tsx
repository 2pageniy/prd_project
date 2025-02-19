import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

export const ArticleEditPage = memo(({
    className,
}: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls['article-edit-page'], {}, [className])}>
            {isEdit ? (
                t('Edit article with ID')
            ) : (
                t('Create new article')
            )}
        </Page>
    );
});

export default ArticleEditPage;
