import { Comment } from 'entities/Comment';
import { EntityState } from '@reduxjs/toolkit';

export enum FetchCommentsByArticleIdErrors {
    SERVER_ERROR = 'server_error',
    ARTICLE_UNDEFINED = 'article_undefined'
}

export interface ArticleDetailsCommentSchema extends EntityState<Comment, string> {
    isLoading?: boolean;
    error?: FetchCommentsByArticleIdErrors;
}
