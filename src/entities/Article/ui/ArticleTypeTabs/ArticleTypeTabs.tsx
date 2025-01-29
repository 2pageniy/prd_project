import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';

import { ArticleType } from '../../model/consts/consts';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: TabItem<ArticleType>) => void;
}

export const ArticleTypeTabs = memo(({
    value,
    onChangeType,
    className,
}: ArticleTypeTabsProps) => {
    const { t } = useTranslation();
    const typeTabs = useMemo<TabItem<ArticleType>[]>(() => {
        return [
            {
                value: ArticleType.ALL,
                content: t('ALL'),
            },
            {
                value: ArticleType.IT,
                content: t('IT'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('ECONOMICS'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('SCIENCE'),
            },
        ];
    }, [t]);

    const onTabClick = useCallback((tab: TabItem<ArticleType>) => {
        onChangeType(tab);
    }, [onChangeType]);
    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
});
