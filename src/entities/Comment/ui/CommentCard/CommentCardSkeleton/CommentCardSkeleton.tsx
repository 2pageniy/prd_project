import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

import { VStack } from '@/shared/ui/Stack';
import cls from '../CommentCard.module.scss';

interface CommentCardSkeletonProps {
    className?: string;
}

export const CommentCardSkeleton = memo(({
    className,
}: CommentCardSkeletonProps) => {
    return (
        <VStack gap={16} max className={classNames(cls['comment-card'], {}, [className, cls.loading])}>
            <div className={cls.header}>
                <Skeleton
                    width={30}
                    height={30}
                    borderRadius='50%'
                />
                <Skeleton
                    className={cls.username}
                    width={100}
                    height={16}
                />
            </div>
            <Skeleton
                className={cls.text}
                width='100%'
                height={50}
            />
        </VStack>
    );
});
