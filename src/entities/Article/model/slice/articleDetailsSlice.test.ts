import RandomValue from '@/shared/lib/tests/randomValue/randomValue';
import { ArticleType } from '../consts/consts';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById';
import { Article } from '../types/article';
import { articleDetailsReducer } from './articleDetailsSlice';

describe('slice/articleDetailsSlice', () => {
    let data = {};

    beforeEach(() => {
        data = {
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

    test('fetch article by id pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending('', ''),
        )).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('fetch article by id fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            data: {},
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(data as Article, '', '1'),
        )).toEqual({
            isLoading: false,
            error: undefined,
            data,
        });
    });

    test('fetch article by id rejected', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            data: {},
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.rejected({ name: '', message: '' }, '1', '1'),
        )).toEqual({
            isLoading: false,
            error: undefined,
            data: {},
        });
    });
});
