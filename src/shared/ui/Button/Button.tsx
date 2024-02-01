import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear-inverted',
    BASE = 'base',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background-inverted'
}

export enum ButtonSize {
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = ({
    className,
    theme = ButtonTheme.CLEAR,
    square,
    size = ButtonSize.M,
    children,
    ...props
}) => {
    const mods: Record<string, boolean> = {
        [cls.square]: square,
    };

    return (
        <button
            type='button'
            className={classNames(cls.button, mods, [className, cls[theme], cls[size]])}
            {...props}
        >
            {children}
        </button>
    );
};
