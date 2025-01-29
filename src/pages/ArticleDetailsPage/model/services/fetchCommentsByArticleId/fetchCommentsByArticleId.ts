import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { FetchCommentsByArticleIdErrors } from '../../consts/consts';

export const fetchCommentsByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<FetchCommentsByArticleIdErrors>
>(
    'articleDetailsComments/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        if (!articleId) {
            return rejectWithValue(FetchCommentsByArticleIdErrors.ARTICLE_UNDEFINED);
        }

        try {
            const response = await extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.error(e);
            return rejectWithValue(FetchCommentsByArticleIdErrors.SERVER_ERROR);
        }
    },

);
