import { Article, FetchArticleErrors } from './article';

export interface ArticleDetailsSchema {
    isLoading: boolean;
    error?: FetchArticleErrors;
    data?: Article;
}
