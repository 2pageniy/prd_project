import { FC, ReactNode } from 'react';
import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal';
import { Overlay } from '../Overlay';
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
    const {
        isClosing,
        close,
    } = useModal({ animationDelay: ANIMATION_DELAY, onClose, isOpen });
    const { theme } = useTheme();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls['is-closing']]: isClosing,
    };

    return isOpen ? (
        <Portal>
            <div className={classNames(cls.modal, mods, [className, theme, 'app-modal'])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    ) : null;
};
