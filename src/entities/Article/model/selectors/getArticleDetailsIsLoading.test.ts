import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsIsLoading } from './articleDetails';

describe('selector/getArticleDetailsIsLoading', () => {
    test('should return true when state is loading', () => {
        const isLoading = true;
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(isLoading);
    });

    test('should return false when state is loaded', () => {
        const isLoading = false;
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(isLoading);
    });

    test('should return with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });
});
