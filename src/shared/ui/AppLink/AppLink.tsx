import { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    PRIMARY_INVERTED = 'primary-inverted'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink = memo(({
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...props
}: AppLinkProps) => (
    <Link
        className={classNames(cls['app-link'], {}, [className, cls[theme]])}
        {...props}
    >
        {children}
    </Link>
));
