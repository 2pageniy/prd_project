import { Profile } from '@/entities/Profile';
import { FetchProfileErrors, ValidateProfileError } from '../consts/consts';

export interface ProfileSchema {
    data: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: FetchProfileErrors;
    readonly: boolean;
    validateProfileErrors?: ValidateProfileError[];
}
