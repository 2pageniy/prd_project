import randomValue from 'shared/lib/tests/randomValue/randomValue';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { loginByUserName } from './loginByUserName';

describe('thunk/loginByUsername', () => {
    const randomData = {
        id: '',
        username: '',
    };
    beforeEach(() => {
        randomData.id = randomValue.string('id');
        randomData.username = randomValue.string('username');
    });

    test('successful login', async () => {
        const thunk = new TestAsyncThunk(loginByUserName);
        thunk.api.post.mockResolvedValueOnce(Promise.resolve({
            data: randomData,
        }));
        const result = await thunk.callThunk({ password: '', username: '' });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(randomData));
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(randomData);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUserName);
        thunk.api.post.mockResolvedValueOnce(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ password: '', username: '' });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('Wrong password or login');
    });
});
