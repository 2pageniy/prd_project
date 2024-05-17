import { Comment } from 'entities/Comment';
import { EntityState } from '@reduxjs/toolkit';
import { FetchCommentsByArticleIdErrors } from '../consts/consts';

export interface ArticleDetailsCommentSchema extends EntityState<Comment, string> {
    isLoading?: boolean;
    error?: FetchCommentsByArticleIdErrors;
}
