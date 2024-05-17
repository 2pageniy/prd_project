import { HTMLAttributeAnchorTarget, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { Icon } from 'shared/ui/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(({
    article,
    view,
    target,
    className,
}: ArticleListItemProps) => {
    const { t } = useTranslation();

    const content = useMemo(() => {
        const types = (
            <Text
                text={article.type.join(', ')}
                className={cls.types}
            />
        );
        const views = (
            <>
                <Text
                    text={article.views.toString()}
                    className={cls.views}
                />
                <Icon
                    Svg={EyeIcon}
                />
            </>
        );
        switch (view) {
        case ArticleView.BIG: {
            const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
            return (
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar
                            src={article.user.avatar}
                            size={30}
                        />
                        <Text
                            className={cls.username}
                            text={article.user.username}
                        />
                        <Text
                            className={cls.date}
                            text={article.createdAt}
                        />
                    </div>
                    <Text
                        className={cls.title}
                        title={article.title}
                    />
                    {types}
                    <img src={article.img} alt={article.title} className={cls.img} />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            className={cls['text-block']}
                            block={textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={`${RoutePath.article_details}/${article.id}`}
                        >
                            <Button
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t('Read more')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            );
        }
        case ArticleView.SMALL: {
            return (
                <AppLink
                    target={target}
                    to={`${RoutePath.article_details}/${article.id}`}
                >
                    <Card>
                        <div className={cls['image-wrapper']}>
                            <img
                                src={article.img}
                                alt={article.title}
                                className={cls.img}
                            />
                            <Text
                                text={article.createdAt}
                                className={cls.date}
                            />
                        </div>
                        <div className={cls['info-wrapper']}>
                            {types}
                            {views}
                        </div>
                        <Text
                            className={cls.title}
                            text={article.title}
                        />
                    </Card>
                </AppLink>
            );
        }
        default: {
            return null;
        }
        }
    }, [article, view, target, t]);

    return (
        <div
            className={classNames(cls['article-list-item'], {}, [className, cls[view]])}
        >
            {content}
        </div>
    );
});
