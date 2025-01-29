import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comment';
import { FetchCommentsByArticleIdErrors } from '../consts/consts';

export interface ArticleDetailsCommentSchema extends EntityState<Comment, string> {
    isLoading?: boolean;
    error?: FetchCommentsByArticleIdErrors;
}
