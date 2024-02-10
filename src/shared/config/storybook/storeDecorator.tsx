import { StoryFn } from '@storybook/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slices/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};

export const storeDecorator = (
    state: DeepPartial<StateSchema> = {},
    asyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {},
) => (StoryComponent: StoryFn) => (
    <StoreProvider
        asyncReducers={{
            ...defaultAsyncReducers,
            ...asyncReducers,
        }}
        initialState={state}
    >
        <StoryComponent />
    </StoreProvider>
);
