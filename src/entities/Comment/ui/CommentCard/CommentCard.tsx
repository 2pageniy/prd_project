import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Comment } from 'entities/Comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';
import { CommentCardSkeleton } from 'entities/Comment/ui/CommentCard/CommentCardSkeleton/CommentCardSkeleton';
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
            <CommentCardSkeleton
                className={className}
            />
        );
    }

    return (
        <div className={classNames(cls['comment-card'], {}, [className])}>
            <AppLink to={`${RoutePath.profile}/${comment.user.id}`} className={cls.header}>
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
            </AppLink>
            <Text
                className={cls.text}
                text={comment.text}
            />
        </div>
    );
});
