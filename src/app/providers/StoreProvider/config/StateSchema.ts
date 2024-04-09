import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'entities/Profile';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage';

export interface StateSchemaAsync {
    loginForm: LoginSchema;
    profile: ProfileSchema;
    articleDetails: ArticleDetailsSchema;
    articleDetailsComments: ArticleDetailsCommentSchema;
}

export interface StateSchema extends Partial<StateSchemaAsync> {
    counter: CounterSchema;
    user: UserSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<RejectValue> {
    rejectValue: RejectValue;
    state: StateSchema;
    extra: ThunkExtraArg;
}
