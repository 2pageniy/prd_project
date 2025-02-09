import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    children: ReactNode;
    theme?: CardTheme;
    className?: string;
    max?: boolean;
}

export const Card = memo(({
    children,
    theme = CardTheme.NORMAL,
    className,
    max,
    ...props
}: CardProps) => {
    return (
        <div
            className={classNames(cls.card, { [cls.max]: max }, [className, cls[theme]])}
            {...props}
        >
            {children}
        </div>
    );
});
