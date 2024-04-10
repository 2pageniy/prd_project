import RandomValue from 'shared/lib/tests/randomValue/randomValue';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { StateSchema } from 'app/providers/StoreProvider';
import { addCommentForArticle, FetchAddCommentForArticleErrors } from './addCommentForArticle';

describe('thunk/addCommentForArticle', () => {
    let responseData = {};
    const state: DeepPartial<StateSchema> = {
        user: {
            authData: {
                id: '1',
            },
        },
        articleDetails: {
            data: {
                id: '1',
            },
        },
    };

    beforeEach(() => {
        responseData = {
            articleId: '1',
            id: RandomValue.string('id'),
            text: RandomValue.string('text'),
            userId: '1',
        };
    });

    test('successful fetch', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, state);
        thunk.api.post.mockResolvedValueOnce(Promise.resolve({
            data: responseData,
        }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(responseData);
    });

    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, state);
        thunk.api.post.mockResolvedValueOnce(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(FetchAddCommentForArticleErrors.SERVER_ERROR);
    });

    test('error empty state', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {});
        thunk.api.post.mockResolvedValueOnce(Promise.resolve({
            data: responseData,
        }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(FetchAddCommentForArticleErrors.NO_DATA);
    });
});
