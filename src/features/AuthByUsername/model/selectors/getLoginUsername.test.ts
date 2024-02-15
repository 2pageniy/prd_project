import { StateSchema } from 'app/providers/StoreProvider';
import RandomValue from 'shared/lib/tests/randomValue/randomValue';
import { getLoginUsername } from './getLoginUsername';

describe('selector/getLoginUsername', () => {
    test('should return value', () => {
        const randomUsername = RandomValue.string('username');
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: randomUsername,
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual(randomUsername);
    });

    test('should return with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
