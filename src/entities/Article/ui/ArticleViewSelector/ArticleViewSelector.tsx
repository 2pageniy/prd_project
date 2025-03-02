import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import BurgerIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/tiled.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import { ArticleView } from '../../model/consts/consts';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
    className?: string;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: BurgerIcon,
    },
];

export const ArticleViewSelector = memo(({
    view,
    onViewClick,
    className,
}: ArticleViewSelectorProps) => {
    const onClick = (newView: ArticleView) => {
        return () => {
            onViewClick(newView);
        };
    };

    return (
        <div className={classNames(cls['article-view-selector'], {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        className={classNames(cls.icon, { [cls.selected]: viewType.view === view })}
                        Svg={viewType.icon}
                    />
                </Button>
            ))}
        </div>
    );
});
