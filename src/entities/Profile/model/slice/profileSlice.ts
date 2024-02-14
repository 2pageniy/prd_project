import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../../services/fetchProfileData/fetchProfileData';

const initialState: ProfileSchema = {
    data: null,
    isLoading: false,
    readonly: true,
    error: null,
};

export const profileSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
