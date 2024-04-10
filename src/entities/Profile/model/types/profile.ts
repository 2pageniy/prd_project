import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    SERVER_ERROR = 'SERVER_ERROR',
    NO_DATA = 'NO_DATA',
}

export enum FetchProfileErrors {
    FORBIDDEN = 'No access'
}

export interface Profile {
    id?: string;
    first?: string;
    lastname?: string;
    age?: number,
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: FetchProfileErrors;
    readonly: boolean;
    validateProfileErrors?: ValidateProfileError[];
}
