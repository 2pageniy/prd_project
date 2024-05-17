import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../../model/consts/consts';
import cls from '../ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(({
    view,
    className,
}: ArticleListItemSkeletonProps) => {
    const content = useMemo(() => {
        switch (view) {
        case ArticleView.BIG: {
            return (
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton
                            width={30}
                            height={30}
                            borderRadius='50%'
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.username}
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.date}
                        />
                    </div>
                    <Skeleton
                        width={250}
                        height={24}
                        className={cls.title}
                    />
                    <Skeleton
                        height={200}
                        className={cls.img}
                    />
                    <div className={cls.footer}>
                        <Skeleton
                            width={200}
                            height={36}
                        />
                    </div>
                </Card>
            );
        }
        case ArticleView.SMALL: {
            return (
                <Card>
                    <div className={cls['image-wrapper']}>
                        <Skeleton
                            width={200}
                            height={200}
                            className={cls.img}
                        />
                    </div>
                    <div className={cls['info-wrapper']}>
                        <Skeleton
                            width={130}
                            height={16}
                            className={cls.types}
                        />
                    </div>
                    <Skeleton
                        width={150}
                        height={16}
                        className={cls.title}
                    />
                </Card>
            );
        }
        default: {
            return null;
        }
        }
    }, [view]);
    return (
        <div className={classNames(cls['article-list-item'], {}, [className, cls[view]])}>
            {content}
        </div>
    );
});
