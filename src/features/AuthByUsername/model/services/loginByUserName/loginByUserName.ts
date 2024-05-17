import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { LoginErrors } from '../../consts/consts';

interface LoginByUserName {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserName, ThunkConfig<LoginErrors>>(
    'login/loginByUserName',
    async (params, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;
        try {
            const response = await extra.api.post<User>('/login', params);

            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.error(e);
            return rejectWithValue(LoginErrors.INCORRECT_DATA);
        }
    },

);
