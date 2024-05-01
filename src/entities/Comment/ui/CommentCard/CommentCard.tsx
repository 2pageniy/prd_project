import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';
import { VStack } from 'shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import { CommentCardSkeleton } from '../CommentCard/CommentCardSkeleton/CommentCardSkeleton';
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
        <VStack gap={8} max className={classNames(cls['comment-card'], {}, [className])}>
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
        </VStack>
    );
});
