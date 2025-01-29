import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('selector/getProfileIsLoading', () => {
    test('should return true when state is loading', () => {
        const isLoading = true;
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(isLoading);
    });

    test('should return false when state is loaded', () => {
        const isLoading = false;
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(isLoading);
    });

    test('should return with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
    });
});
