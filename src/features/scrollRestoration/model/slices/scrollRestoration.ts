import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollRestorationSchema } from '../types/scrollRestoration';

const initialState: ScrollRestorationSchema = {
    scroll: {},
};

export const scrollRestoration = createSlice({
    name: 'scrollRestoration',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{path: string; position: number;}>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },

});

export const { actions: scrollRestorationActions } = scrollRestoration;
export const { reducer: scrollRestorationReducer } = scrollRestoration;
