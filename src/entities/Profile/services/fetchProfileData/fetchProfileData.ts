import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../model/types/profile';

enum FetchProfileErrors {
    FORBIDDEN = 'No access'
}

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_params, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<Profile>('/profile');
            console.log(123);
            if (!response.data) {
                throw new Error();
            }
            console.log(1234);

            return response.data;
        } catch (e) {
            console.error(e);
            return rejectWithValue(FetchProfileErrors.FORBIDDEN);
        }
    },

);
