import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';

import { FetchProfileErrors } from '../../consts/consts';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<FetchProfileErrors>>(
    'profile/fetchProfileData',
    async (profileId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`);

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
