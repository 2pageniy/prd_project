import { ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from 'shared/ui/Card';

import cls from './Tabs.module.scss';

export interface TabItem<T> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T> {
    className?: string;
    tabs: TabItem<T>[];
    value: T;
    onTabClick?: (tab: TabItem<T>) => void;
}

export const Tabs = <T extends string>({
    tabs,
    value,
    onTabClick = () => {},
    className,
}: TabsProps<T>) => {
    const clickHandler = useCallback((tab: TabItem<T>) => {
        return () => {
            onTabClick(tab);
        };
    }, [onTabClick]);

    return (
        <div className={classNames(cls.tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    key={tab.value}
                    onClick={clickHandler(tab)}
                    className={cls.tab}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
