import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types';

import { ArticleSortField } from '../../model/consts/consts';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newOrder: ArticleSortField) => void;
    className?: string;
}

export const ArticleSortSelector = memo(({
    sort,
    order,
    onChangeOrder,
    onChangeSort,
    className,
}: ArticleSortSelectorProps) => {
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => (
        [
            {
                value: 'asc',
                content: t('ascending'),
            },
            {
                value: 'desc',
                content: t('descending'),
            },
        ]
    ), [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => (
        [
            {
                value: ArticleSortField.CREATED,
                content: t('created'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('title'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('views'),
            },
        ]
    ), [t]);

    return (
        <div className={classNames(cls['article-sort-selector'], {}, [className])}>
            <Select<ArticleSortField>
                options={sortFieldOptions}
                label={t('Sort')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select<SortOrder>
                options={orderOptions}
                label={t('Sort by')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
});
