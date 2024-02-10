import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text: FC<TextProps> = ({
    title,
    text,
    theme = TextTheme.PRIMARY,
    className,
}) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.text, {}, [className, cls[theme]])}>
            {title && (
                <p className={cls.title}>
                    {title}
                </p>
            )}
            {text && (
                <p className={cls.text}>
                    {text}
                </p>
            )}
        </div>
    );
};
