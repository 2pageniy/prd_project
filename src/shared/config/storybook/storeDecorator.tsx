import { StoryFn } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StateSchemaAsync, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slices/loginSlice';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice';

const defaultAsyncReducers: ReducersMapObject<StateSchemaAsync> = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsPage: undefined, // не работает, надо поправить тип articleDetailsPageReducer,
    addCommentForm: addCommentFormReducer,
    articlesPage: articlesPageReducer,
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
