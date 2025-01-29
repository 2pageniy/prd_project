import {
    EnhancedStore, Reducer, ReducersMapObject, UnknownAction,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';
import { ArticleDetailsSchema } from '@/entities/Article';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { AddCommentFormSchema } from '@/features/addCommentForm';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { ScrollRestorationSchema } from '@/features/scrollRestoration';
import { rtkApi } from '@/shared/api/rtkApi';
import { ProfileSchema } from '@/features/editableProfileCard';

export interface StateSchemaAsync {
    loginForm: LoginSchema;
    profile: ProfileSchema;
    articleDetails: ArticleDetailsSchema;
    addCommentForm: AddCommentFormSchema;
    articlesPage: ArticlesPageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
}

export interface StateSchema extends Partial<StateSchemaAsync> {
    counter: CounterSchema;
    user: UserSchema;
    scrollRestoration: ScrollRestorationSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<RejectValue> {
    rejectValue: RejectValue;
    state: StateSchema;
    extra: ThunkExtraArg;
}
