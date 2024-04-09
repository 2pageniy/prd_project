import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Comment } from 'entities/Comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    comment: Comment;
    isLoading?: boolean;
    className?: string;
}

export const CommentCard = memo(({
    comment,
    isLoading,
    className,
}: CommentCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls['comment-card'], {}, [className])}>
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
            </div>
        );
    }

    return (
        <div className={classNames(cls['comment-card'], {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar && (
                    <Avatar
                        src={comment.user.avatar}
                        size={30}
                    />
                )}
                <Text
                    className={cls.username}
                    title={comment.user.username}
                />
            </div>
            <Text
                className={cls.text}
                text={comment.text}
            />
        </div>
    );
});
