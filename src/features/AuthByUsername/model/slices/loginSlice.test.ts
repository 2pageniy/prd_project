import { DeepPartial } from '@reduxjs/toolkit';
import randomValue from 'shared/lib/tests/randomValue/randomValue';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('slice/loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '' };
        const randomUsername = randomValue.string('username');

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername(randomUsername),
        )).toEqual({ username: randomUsername });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '' };
        const randomPassword = randomValue.string('password');

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword(randomPassword),
        )).toEqual({ password: randomPassword });
    });
});
