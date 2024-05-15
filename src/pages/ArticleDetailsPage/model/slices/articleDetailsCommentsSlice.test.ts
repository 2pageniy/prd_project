import RandomValue from 'shared/lib/tests/randomValue/randomValue';
import { Comment } from 'entities/Comment';
import { ArticleDetailsCommentSchema, FetchCommentsByArticleIdErrors } from '../types/ArticleDetailsCommentSchema';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

describe('slice/articleDetailsCommentsSlice', () => {
    let comments: Comment[] = [];
    let entities: Record<string, Comment> = {};

    beforeEach(() => {
        entities = {};
        comments = [{
            id: '1',
            user: {
                id: '1',
                username: RandomValue.string('username'),
            },
            text: RandomValue.string('comment'),
        }];
        comments.forEach((comment) => {
            entities[comment.id] = comment;
        });
    });

    test('fetch comments service pending', () => {
        const state: DeepPartial<ArticleDetailsCommentSchema> = {
            isLoading: false,
            error: FetchCommentsByArticleIdErrors.SERVER_ERROR,
        };

        expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentSchema,
            fetchCommentsByArticleId.pending('', ''),
        )).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('fetch comments service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsCommentSchema> = {
            isLoading: true,
        };

        expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentSchema,
            fetchCommentsByArticleId.fulfilled(comments, '', ''),
        )).toEqual({
            isLoading: false,
            ids: comments.map((comment) => comment.id),
            entities,
        });
    });
});
