import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export enum AddCommentForArticleErrors {
    SERVER_ERROR = 'server_error',
    NO_DATA = 'no data',
}

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<AddCommentForArticleErrors>>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const {
            extra, rejectWithValue, getState, dispatch,
        } = thunkAPI;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !article || !text) {
            return rejectWithValue(AddCommentForArticleErrors.NO_DATA);
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (e) {
            console.error(e);
            return rejectWithValue(AddCommentForArticleErrors.SERVER_ERROR);
        }
    },

);
