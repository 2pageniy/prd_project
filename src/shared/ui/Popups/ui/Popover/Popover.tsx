import { memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from '@/shared/types/ui';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import clsPopup from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export const Popover = memo(({
    className,
    trigger,
    direction = 'bottom-right',
    children,
}: PopoverProps) => {
    return (
        <HPopover className={classNames(clsPopup.popover, {}, [className, clsPopup.popup])}>
            <HPopover.Button as='div' className={clsPopup.trigger}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel
                className={classNames(cls.panel, {}, [clsPopup[direction]])}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
