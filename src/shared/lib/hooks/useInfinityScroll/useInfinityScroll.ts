import { MutableRefObject, useEffect } from 'react';

export interface UseInfinityScroll {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfinityScroll({
    callback,
    triggerRef,
    wrapperRef,
}: UseInfinityScroll) {
    useEffect(() => {
        let observer: IntersectionObserver;
        let triggerElement: HTMLElement;
        if (callback) {
            const wrapperElement = wrapperRef.current;
            triggerElement = triggerRef.current;
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElement);
        }
        return () => {
            if (callback && observer) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
