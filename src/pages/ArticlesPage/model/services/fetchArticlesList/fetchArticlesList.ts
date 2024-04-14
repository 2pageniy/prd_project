import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { FetchArticlesError } from '../../types/articlesPage';

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<FetchArticlesError>>(
    'articlePage/fetchArticlesList',
    async (_params, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.error(e);
            return rejectWithValue(FetchArticlesError.SERVER_ERROR);
        }
    },
);
