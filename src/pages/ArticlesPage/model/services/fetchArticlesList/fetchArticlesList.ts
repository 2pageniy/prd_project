import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { FetchArticlesError } from '../../consts/consts';
import {
    getArticlePageLimit,
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
} from '../../selectors/articlesPageSelector';

interface FetchArticlesListProps {
    page?: number;
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<FetchArticlesError>>(
    'articlePage/fetchArticlesList',
    async (params, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const {
            page = 1,
        } = params;
        const limit = getArticlePageLimit(getState());
        const sort = getArticlePageSort(getState());
        const order = getArticlePageOrder(getState());
        const search = getArticlePageSearch(getState());
        const type = getArticlePageType(getState());

        try {
            addQueryParams({
                sort, order, search, type,
            });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type.toUpperCase(),
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
