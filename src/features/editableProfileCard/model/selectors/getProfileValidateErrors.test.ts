import { StateSchema } from 'app/providers/StoreProvider';
import RandomValue from 'shared/lib/tests/randomValue/randomValue';
import { ValidateProfileError } from '../consts/consts';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('selector/getProfileValidateErrors', () => {
    const validateErrors: ValidateProfileError[] = [];

    beforeEach(() => {
        const validateErrors = [];
        const number = RandomValue.numberInterval(0, Object.keys(ValidateProfileError).length);

        for (let i = 0; i < number; i += 1) {
            validateErrors.push(RandomValue.enum(ValidateProfileError));
        }
    });

    test('should return validate errors state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateProfileErrors: validateErrors,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
    });

    test('should return with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
