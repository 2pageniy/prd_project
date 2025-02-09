import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import Star from '@/shared/assets/icons/star.svg';

import cls from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo(({
    className,
    onSelect,
    size = 30,
    selectedStars = 0,
}: StarRatingProps) => {
    const [currentStartCount, setCurrentStartCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStartCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStartCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStartCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(cls['star-rating'], {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(
                        cls['star-icon'],
                        {
                            [cls.hovered]: currentStartCount >= starNumber,
                            [cls.normal]: currentStartCount < starNumber,
                            [cls.selected]: isSelected,
                        },
                        [],
                    )}
                    key={starNumber}
                    Svg={Star}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
});
