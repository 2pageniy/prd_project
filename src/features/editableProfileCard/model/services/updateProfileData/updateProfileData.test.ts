import RandomValue from '@/shared/lib/tests/randomValue/randomValue';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ValidateProfileError } from '../../consts/consts';
import { updateProfileData } from './updateProfileData';

describe('thunk/updateProfileData', () => {
    let randomData = {};
    let updatedData = {};

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
        updatedData = {
            first: RandomValue.string('update_first'),
            lastname: RandomValue.string('update_lastname'),
            age: RandomValue.numberInterval(1, 100),
            currency: RandomValue.enum(Currency),
            country: RandomValue.enum(Country),
            city: RandomValue.string('update_city'),
            username: RandomValue.string('update_username'),
        };
    });

    test('successful update', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: randomData,
            },
        });
        thunk.api.put.mockResolvedValueOnce(Promise.resolve({
            data: updatedData,
        }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(updatedData);
    });

    test('error update', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: randomData,
            },
        });
        thunk.api.put.mockResolvedValueOnce(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {
                    ...randomData,
                    lastname: '',
                },
            },
        });
        thunk.api.put.mockResolvedValueOnce(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalledTimes(0);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});
