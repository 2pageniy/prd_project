import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Code } from '@/shared/ui/Code/Code';
import cls from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(({
    className,
    block,
}: ArticleCodeBlockComponentProps) => {
    return (
        <div className={classNames(cls['article-code-block-component'], {}, [className])}>
            <Code>
                {block.code}
            </Code>
        </div>
    );
});
