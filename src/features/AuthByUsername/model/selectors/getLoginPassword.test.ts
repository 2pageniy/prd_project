import { StateSchema } from 'app/providers/StoreProvider';
import RandomValue from 'shared/lib/tests/randomValue/randomValue';
import { getLoginPassword } from './getLoginPassword';

describe('selector/getLoginPassword', () => {
    test('should return value', () => {
        const randomPassword = RandomValue.string('password');
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: randomPassword,
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual(randomPassword);
    });

    test('should return with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
