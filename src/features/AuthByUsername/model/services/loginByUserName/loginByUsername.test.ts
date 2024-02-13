import axios from 'axios';
import randomValue from 'shared/lib/tests/randomValue/randomValue';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { loginByUserName } from './loginByUserName';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('thunk/loginByUsername', () => {
    const randomData = {
        id: 0,
        username: '',
    };
    beforeEach(() => {
        randomData.id = randomValue.number();
        randomData.username = randomValue.string();
    });

    test('successful login', async () => {
        mockedAxios.post.mockResolvedValueOnce(Promise.resolve({
            data: randomData,
        }));
        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk({ password: '', username: '' });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(randomData));
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(randomData);
    });

    test('error login', async () => {
        mockedAxios.post.mockResolvedValueOnce(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk({ password: '', username: '' });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('Wrong password or login');
    });
});
