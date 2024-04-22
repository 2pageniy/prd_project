import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsRecommendationsReducer } from '../slices/articleDetailsPageRecommendationSlice';
import { articleDetailsCommentsReducer } from '../slices/articleDetailsCommentsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
