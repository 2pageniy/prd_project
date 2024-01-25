import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    BASE = 'base',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({
    className,
    theme = ThemeButton.CLEAR,
    children,
    ...props
}) => (
    <button
        type='button'
        className={classNames(cls.button, {}, [className, cls[theme]])}
        {...props}
    >
        {children}
    </button>
);
