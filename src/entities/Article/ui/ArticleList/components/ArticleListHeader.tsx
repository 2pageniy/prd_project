import { ArticlePageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlePageFilters';
import cls from '../ArticleList.module.scss';

export const Header = () => (
    <ArticlePageFilters className={cls.header} />
);
