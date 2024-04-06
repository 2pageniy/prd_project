import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Text } from 'shared/ui/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(({
    className,
    block,
}: ArticleTextBlockComponentProps) => {
    return (
        <div className={classNames(cls['article-text-block-component'], {}, [className])}>
            {block.title && (
                <Text
                    className={cls.title}
                    title={block.title}
                />
            )}
            {block.paragraphs.map((paragraph) => (
                <Text
                    key={paragraph}
                    text={paragraph}
                    className={cls.paragraph}
                />
            ))}
        </div>
    );
});
