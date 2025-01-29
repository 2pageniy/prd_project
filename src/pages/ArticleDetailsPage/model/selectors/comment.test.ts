import { StateSchema } from '@/app/providers/StoreProvider';
import { FetchCommentsByArticleIdErrors } from '../consts/consts';
import { getArticleCommentsError, getArticleCommentsIsLoading } from './comments';

describe('selector/comments', () => {
    test('should return is loading true', () => {
        const isLoading = true;
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    isLoading,
                },
            },
        };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(isLoading);
    });

    test('should return is loading false', () => {
        const isLoading = false;
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    isLoading,
                },
            },
        };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(isLoading);
    });

    test('should return is loading false with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should return error', () => {
        const error = FetchCommentsByArticleIdErrors.SERVER_ERROR;
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    error,
                },
            },
        };
        expect(getArticleCommentsError(state as StateSchema)).toEqual(error);
    });

    test('should return error undefined with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined);
    });
});
