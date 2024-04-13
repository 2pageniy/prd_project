import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from 'entities/Comment';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { CommentCardSkeleton } from 'entities/Comment/ui/CommentCard/CommentCardSkeleton/CommentCardSkeleton';
import { CommentCard } from '../CommentCard/CommentCard';

import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    isLoading?: boolean;
    comments?: Comment[];
}

export const CommentList = memo(({
    comments = [],
    isLoading,
    className,
}: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <>
                {Array(3).fill(0).map((_, index) => (
                    <CommentCardSkeleton
                        /* eslint-disable-next-line react/no-array-index-key */
                        key={index}
                        className={cls.comment}
                    />
                ))}
            </>
        );
    }

    return (
        <div className={classNames(cls['comment-list'], {}, [className])}>
            {comments.length !== 0 ? (
                comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment}
                    />
                ))
            ) : (
                <Text
                    text={t('No comments')}
                />
            )}
        </div>
    );
});
