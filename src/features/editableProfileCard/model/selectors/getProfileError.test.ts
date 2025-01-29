import { StateSchema } from '@/app/providers/StoreProvider';
import RandomValue from '@/shared/lib/tests/randomValue/randomValue';
import { FetchProfileErrors } from '../consts/consts';
import { getProfileError } from './getProfileError';

describe('selector/getProfileError', () => {
    let error: FetchProfileErrors | undefined;

    beforeEach(() => {
        error = RandomValue.enum(FetchProfileErrors);
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error,
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual(error);
    });

    test('should return undefined error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: undefined,
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });

    test('should return with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
