import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end' | '';
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexGap = '4' | '8' | '16' | '32' | 4 | 8 | 16 | 32;

export type DivProps = HTMLAttributes<HTMLDivElement>;

export interface FlexProps extends DivProps {
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
    wrap?: boolean;
    className?: string;
}

export const Flex = memo(({
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max,
    wrap,
    className,
}: FlexProps) => {
    const classes = [
        className,
        cls[`justify-${justify}`],
        align && cls[`align-${align}`],
        cls[`direction-${direction}`],
        gap && cls[`gap-${gap}`],
    ];

    const mods = {
        [cls.max]: max,
        [cls.wrap]: wrap,
    };

    return (
        <div className={classNames(cls.flex, mods, classes)}>
            {children}
        </div>
    );
});
