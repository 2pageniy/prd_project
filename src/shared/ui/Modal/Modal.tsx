import {
    FC, MouseEvent, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal';

import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = ({
    className,
    children,
    isOpen,
    onClose,
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const { theme } = useTheme();

    const closeHandler = useCallback(() => {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, ANIMATION_DELAY);
    }, [onClose]);

    const onContentClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls['is-closing']]: isClosing,
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return isOpen ? (
        <Portal>
            <div className={classNames(cls.modal, mods, [className, theme])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    ) : null;
};
