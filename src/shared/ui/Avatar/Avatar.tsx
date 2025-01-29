import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar: FC<AvatarProps> = ({
    className,
    src,
    size = 100,
    alt = '',
}) => {
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            src={src}
            style={styles}
            className={classNames(cls.avatar, {}, [className])}
            alt={alt}
        />
    );
};
