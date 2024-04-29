import RandomValue from 'shared/lib/tests/randomValue/randomValue';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

describe('services/validateProfileData', () => {
    let validateData = {};

    beforeEach(() => {
        validateData = {
            first: RandomValue.string('first'),
            lastname: RandomValue.string('lastname'),
            age: RandomValue.numberInterval(1, 100),
            currency: RandomValue.enum(Currency),
            country: RandomValue.enum(Country),
            city: RandomValue.string('city'),
            username: RandomValue.string('username'),
        };
    });
    test('success', () => {
        const result = validateProfileData(validateData);

        expect(result).toEqual([]);
    });

    test('without first or last name', () => {
        const result = validateProfileData({
            ...validateData,
            first: '',
            lastname: '',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', () => {
        const result = validateProfileData({
            ...validateData,
            age: 0,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', () => {
        const result = validateProfileData({
            ...validateData,
            country: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('multiply incorrect', () => {
        const result = validateProfileData({
            ...validateData,
            first: '',
            lastname: '',
            age: 0,
            country: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('incorrect all', () => {
        const result = validateProfileData({});

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
