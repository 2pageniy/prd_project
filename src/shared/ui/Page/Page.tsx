import {
    memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import cls from './Page.module.scss';

interface PageProps {
    children: ReactNode;
    className?: string;
    onScrollEnd?: () => void;
}

export const Page = memo(({
    children,
    onScrollEnd = () => {},
    className,
}: PageProps) => {
    const wrapperRef = useRef<HTMLElement>() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfinityScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });
    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.page, {}, [className])}
        >
            {children}
            <div
                ref={triggerRef}
            />
        </section>
    );
});
