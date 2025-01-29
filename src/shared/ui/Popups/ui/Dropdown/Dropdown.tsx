import { Fragment, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '../../../../types/ui';
import { AppLink } from '../../../AppLink';

import cls from './Dropdown.module.scss';
import clsPopup from '../../styles/popup.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content: ReactNode;
    onClick?: () => void;
    href?: string;
    key: string;
}

interface DropdownProps {
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
    className?: string;
}

export const Dropdown = memo(({
    trigger,
    items,
    direction = 'bottom-right',
    className,
}: DropdownProps) => {
    return (
        <Menu
            as='div'
            className={classNames(clsPopup.dropdown, {}, [className, clsPopup.popup])}
        >
            <Menu.Button
                className={clsPopup.trigger}
            >
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, [clsPopup[direction]])}>
                {items.map((item) => {
                    const content = ({ active }: {active: boolean;}) => (
                        <button
                            type='button'
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(cls.item, { [clsPopup.active]: active })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item key={item.key} as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item key={item.key} as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
});
