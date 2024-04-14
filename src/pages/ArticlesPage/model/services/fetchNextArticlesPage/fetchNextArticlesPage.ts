import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlePageHasMore, getArticlePageIsLoading, getArticlePageNum } from '../../selectors/articlesPageSelector';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlePage/fetchNextArticlesPage',
    async (params, thunkAPI) => {
        const {
            getState, dispatch,
        } = thunkAPI;

        const hasMore = getArticlePageHasMore(getState());
        const page = getArticlePageNum(getState());
        const isLoading = getArticlePageIsLoading(getState());
        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({
                page: page + 1,
            }));
        }
    },
);
