import { Article, FetchArticleErrors } from './Article';

export interface ArticleDetailsSchema {
    isLoading: boolean;
    error?: FetchArticleErrors;
    data?: Article;
}
