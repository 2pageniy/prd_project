import RandomValue from '@/shared/lib/tests/randomValue/randomValue';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { Comment } from '@/entities/Comment';
import { FetchCommentsByArticleIdErrors } from '../../consts/consts';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

describe('thunk/fetchCommentsByArticleId', () => {
    let responseData: Comment[] = [];

    beforeEach(() => {
        responseData = [{
            id: '1',
            user: {
                id: '1',
                username: RandomValue.string('username'),
            },
            text: RandomValue.string('comment'),
        }];
    });

    test('successful fetch', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockResolvedValueOnce(Promise.resolve({
            data: responseData,
        }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(responseData);
    });

    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockResolvedValueOnce(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(FetchCommentsByArticleIdErrors.SERVER_ERROR);
    });

    test('error with empty article id', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.post.mockResolvedValueOnce(Promise.resolve({
            data: responseData,
        }));
        const result = await thunk.callThunk(undefined);

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(FetchCommentsByArticleIdErrors.ARTICLE_UNDEFINED);
    });
});
