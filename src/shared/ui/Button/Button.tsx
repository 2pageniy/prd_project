import { ButtonHTMLAttributes, memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

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
    disabled?: boolean;
}

// Разрешено использовать memo, потому что children будет строка в 99% случаев
export const Button = memo(({
    className,
    theme = ButtonTheme.CLEAR,
    square,
    size = ButtonSize.M,
    children,
    disabled = false,
    ...props
}: ButtonProps) => {
    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type='button'
            className={classNames(cls.button, mods, [className, cls[theme], cls[size]])}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
});
