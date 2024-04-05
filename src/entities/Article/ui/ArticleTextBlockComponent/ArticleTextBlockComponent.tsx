import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = ({ className }) => {
    return (
        <div className={classNames(cls['article-text-block-component'], {}, [className])} />
    );
};
