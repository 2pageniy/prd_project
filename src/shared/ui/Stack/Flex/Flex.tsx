import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexGap = '4' | '8' | '16' | '32' | 4 | 8 | 16 | 32;

export interface FlexProps {
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
    className?: string;
}

export const Flex = memo(({
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max,
    className,
}: FlexProps) => {
    const classes = [
        className,
        cls[`justify-${justify}`],
        cls[`align-${align}`],
        cls[`direction-${direction}`],
        gap && cls[`gap-${gap}`],
    ];

    const mods = {
        [cls.max]: max,
    };

    return (
        <div className={classNames(cls.flex, mods, classes)}>
            {children}
        </div>
    );
});
