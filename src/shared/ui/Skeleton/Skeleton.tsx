import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    borderRadius?: string;
}

export const Skeleton = memo(({
    className,
    height,
    width,
    borderRadius,
}: SkeletonProps) => {
    const styles: CSSProperties = {
        height,
        width,
        borderRadius,
    };

    return (
        <div
            className={classNames(cls.skeleton, {}, [className])}
            style={styles}
        />
    );
});
