import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlePageLimit } from '../../selectors/articlesPageSelector';
import { FetchArticlesError } from '../../types/articlesPage';

interface FetchArticlesListProps {
    page: number;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<FetchArticlesError>>(
    'articlePage/fetchArticlesList',
    async (params, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const {
            page = 1,
        } = params;
        const limit = getArticlePageLimit(getState());
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
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
