import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { FetchProfileErrors, Profile } from '../../model/types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<FetchProfileErrors>>(
    'profile/fetchProfileData',
    async (_params, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<Profile>('/profile');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.error(e);
            return rejectWithValue(FetchProfileErrors.FORBIDDEN);
        }
    },

);
