import RandomValue from 'shared/lib/tests/randomValue/randomValue';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { ArticleType, FetchArticleErrors } from '../types/article';
import { fetchArticleById } from './fetchArticleById';

describe('thunk/fetchArticleById', () => {
    let randomData = {};

    beforeEach(() => {
        randomData = {
            id: RandomValue.string('id'),
            title: RandomValue.string('title'),
            subtitle: RandomValue.string('subtitle'),
            img: RandomValue.string('img'),
            views: RandomValue.number(),
            createdAt: RandomValue.string('createdAt'),
            type: [RandomValue.enum(ArticleType)],
            blocks: [],
        };
    });

    test('successful fetch', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockResolvedValueOnce(Promise.resolve({
            data: randomData,
        }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(randomData);
    });

    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockResolvedValueOnce(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('0');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(FetchArticleErrors.SERVER_ERROR);
    });
});
