import { FetchArticleErrors } from '../consts/consts';
import { Article } from './article';

export interface ArticleDetailsSchema {
    isLoading: boolean;
    error?: FetchArticleErrors;
    data?: Article;
}
