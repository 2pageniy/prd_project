import { StateSchema } from 'app/providers/StoreProvider';
import RandomValue from 'shared/lib/tests/randomValue/randomValue';
import { ArticleType } from '../consts/consts';
import { getArticleDetailsData } from './articleDetails';

describe('selector/getArticleDetailsData', () => {
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

    test('should return state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test('should return with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});
