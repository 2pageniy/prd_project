import { StoryFn } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StateSchemaAsync, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slices/loginSlice';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';

const defaultAsyncReducers: ReducersMapObject<StateSchemaAsync> = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
};

export const storeDecorator = (
    state: DeepPartial<StateSchema> = {},
    asyncReducers: DeepPartial<ReducersMapObject<StateSchemaAsync>> = {},
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
