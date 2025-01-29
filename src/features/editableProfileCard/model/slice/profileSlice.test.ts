import RandomValue from '@/shared/lib/tests/randomValue/randomValue';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ValidateProfileError } from '../consts/consts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';
import { profileActions, profileReducer } from './profileSlice';

describe('slice/profileSlice', () => {
    let data = {};
    let updateData = {};

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
        updateData = {
            first: RandomValue.string('update_first'),
            lastname: RandomValue.string('update_lastname'),
            age: RandomValue.numberInterval(1, 100),
            currency: RandomValue.enum(Currency),
            country: RandomValue.enum(Country),
            city: RandomValue.string('update_city'),
            username: RandomValue.string('update_username'),
        };
    });

    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { };
        const readonly = RandomValue.bool();

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(readonly),
        )).toEqual({ readonly });
    });

    test('cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: {},
            readonly: false,
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            data,
            form: data,
            readonly: true,
            validateErrors: undefined,
        });
    });

    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: data,
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile(updateData),
        )).toEqual({
            data,
            form: updateData,
        });
    });

    test('update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateProfileErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending(''),
        )).toEqual({
            isLoading: true,
            validateProfileErrors: undefined,
        });
    });

    test('update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            data,
            form: data,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(updateData, ''),
        )).toEqual({
            isLoading: false,
            readonly: true,
            validateProfileErrors: undefined,
            form: updateData,
            data: updateData,
        });
    });
});
