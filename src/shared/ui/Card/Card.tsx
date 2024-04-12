import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    children: ReactNode;
    className?: string;
}

export const Card = memo(({
    children,
    className,
    ...props
}: CardProps) => {
    return (
        <div
            className={classNames(cls.card, {}, [className])}
            {...props}
        >
            {children}
        </div>
    );
});
