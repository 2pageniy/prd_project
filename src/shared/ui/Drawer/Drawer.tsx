import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal';
import { Overlay } from '../Overlay';
import { Portal } from '../Portal';

import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo(({
    className,
    children,
    isOpen,
    onClose,
}: DrawerProps) => {
    const {
        isClosing,
        close,
    } = useModal({ animationDelay: 300, onClose, isOpen });
    const { theme } = useTheme();

    const mods = {
        [cls.opened]: isOpen,
        [cls['is-closing']]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(cls.drawer, mods, [theme, className, 'app-drawer'])}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
});
