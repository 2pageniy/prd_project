import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Article, ArticleView } from '../../model/types/article';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo(({
    article,
    view,
    className,
}: ArticleListItemProps) => {
    const item = useMemo(() => {
        switch (view) {
        case ArticleView.BIG:
            return (
                <div />
            );
        case ArticleView.SMALL:
            return (
                <Card>
                    <div className={cls['image-wrapper']}>
                        <img
                            src={article.img}
                            alt={article.title}
                            className={cls.img}
                        />
                        <Text
                            text={article.createdAt}
                            className={cls.date}
                        />
                    </div>
                    <div className={cls['info-wrapper']}>
                        <Text
                            text={article.type.join(', ')}
                            className={cls.types}
                        />
                        <Text
                            text={article.views.toString()}
                            className={cls.views}
                        />
                        <Icon
                            Svg={EyeIcon}
                        />
                    </div>
                    <Text
                        className={cls.title}
                        text={article.title}
                    />
                </Card>
            );
        default:
            return null;
        }
    }, [view, article]);

    return (
        <div
            className={classNames(cls['article-list-item'], {}, [className, cls[view]])}
        >
            {item}
        </div>
    );
});
