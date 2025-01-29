import RandomValue from '@/shared/lib/tests/randomValue/randomValue';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { FetchProfileErrors } from '../../consts/consts';
import { fetchProfileData } from './fetchProfileData';

describe('thunk/fetchProfileData', () => {
    let randomData = {};

    beforeEach(() => {
        randomData = {
            first: RandomValue.string('first'),
            lastname: RandomValue.string('lastname'),
            age: RandomValue.numberInterval(1, 100),
            currency: RandomValue.enum(Currency),
            country: RandomValue.enum(Country),
            city: RandomValue.string('city'),
            username: RandomValue.string('username'),
        };
    });

    test('successful fetch', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockResolvedValueOnce(Promise.resolve({
            data: randomData,
        }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(randomData);
    });

    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockResolvedValueOnce(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(FetchProfileErrors.FORBIDDEN);
    });
});
