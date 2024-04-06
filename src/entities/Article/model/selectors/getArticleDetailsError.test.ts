import { StateSchema } from 'app/providers/StoreProvider';
import RandomValue from 'shared/lib/tests/randomValue/randomValue';
import { FetchArticleErrors } from 'entities/Article/model/types/article';
import { getArticleDetailsError } from 'entities/Article/model/selectors/articleDetails';

describe('selector/getArticleDetailsError', () => {
    let error: FetchArticleErrors | undefined;

    beforeEach(() => {
        error = RandomValue.enum(FetchArticleErrors);
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error,
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual(error);
    });

    test('should return undefined error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: undefined,
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });

    test('should return with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
