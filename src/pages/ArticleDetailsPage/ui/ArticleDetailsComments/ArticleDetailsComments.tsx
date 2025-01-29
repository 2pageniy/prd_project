import { memo, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Text, TextSize } from '@/shared/ui/Text';
import { AddCommentForm } from '@/features/addCommentForm';
import { CommentList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import cls from './ArticleDetailsComments.module.scss';

interface ArticleDetailsCommentsProps {
    id?: string;
    className?: string;
}

export const ArticleDetailsComments = memo(({
    id,
    className,
}: ArticleDetailsCommentsProps) => {
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    return (
        <Suspense fallback=''>
            <VStack gap={16} max className={classNames(cls.ArticleDetailsComments, {}, [className])}>
                <Text
                    size={TextSize.L}
                    className={cls['comment-title']}
                    title={t('Comments')}
                />
                <AddCommentForm
                    onSendComment={onSendComment}
                />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </VStack>
        </Suspense>
    );
});
