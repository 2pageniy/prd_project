import { Profile } from 'entities/Profile';

export enum FetchProfileErrors {
    FORBIDDEN = 'No access'
}

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    SERVER_ERROR = 'SERVER_ERROR',
    NO_DATA = 'NO_DATA',
}

export interface ProfileSchema {
    data: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: FetchProfileErrors;
    readonly: boolean;
    validateProfileErrors?: ValidateProfileError[];
}
