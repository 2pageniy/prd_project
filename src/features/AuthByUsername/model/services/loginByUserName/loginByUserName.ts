import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUserName {
    username: string;
    password: string;
}

enum LoginErrors {
    INCORRECT_DATA = 'Wrong password or login'
}

export const loginByUserName = createAsyncThunk<User, LoginByUserName, { rejectValue: string}>(
    'login/loginByUserName',
    async (params, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', params);

            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue(LoginErrors.INCORRECT_DATA);
        }
    },

);
