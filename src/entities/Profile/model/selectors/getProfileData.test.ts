import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import RandomValue from 'shared/lib/tests/randomValue/randomValue';
import { getProfileData } from './getProfileData';

describe('selector/getProfileData', () => {
    let data = {};

    beforeEach(() => {
        data = {
            first: RandomValue.string('first'),
            lastname: RandomValue.string('lastname'),
            age: RandomValue.numberInterval(1, 100),
            currency: RandomValue.enum(Currency),
            country: RandomValue.enum(Country),
            city: RandomValue.string('city'),
            username: RandomValue.string('username'),
        };
    });

    test('should return state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should return with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
