import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import { CommentCardSkeleton } from '../CommentCard/CommentCardSkeleton/CommentCardSkeleton';
import { CommentCard } from '../CommentCard/CommentCard';

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
                    />
                ))}
            </>
        );
    }

    return (
        <VStack gap={16} max className={classNames('', {}, [className])}>
            {comments.length !== 0 ? (
                comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        comment={comment}
                    />
                ))
            ) : (
                <Text
                    text={t('No comments')}
                />
            )}
        </VStack>
    );
});
