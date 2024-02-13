import { DeepPartial } from '@reduxjs/toolkit';
import randomValue from 'shared/lib/tests/randomValue/randomValue';
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUserName/loginByUserName';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('slice/loginSlice', () => {
    // const randomData: LoginSchema = {
    //     username: '',
    //     password: '',
    //     isLoading: false,
    //     error: '',
    // };
    //
    // beforeAll(() => {
    //     randomData.username = randomValue.string('username');
    //     randomData.password = randomValue.string('password');
    // });

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
