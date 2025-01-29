import { Fragment, memo, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../../../Stack';
import { Button, ButtonTheme } from '../../../Button';
import { DropdownDirection } from '../../../../types/ui';

import cls from './ListBox.module.scss';
import clsPopup from '../../styles/popup.module.scss';

export interface ListBoxItem<T> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T> {
    items: ListBoxItem<T>[];
    value?: T;
    defaultValue?: T;
    onChange: (value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
    className?: string;
}

export const ListBox = memo(({
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom-right',
    label,
    className,
}: ListBoxProps<string>) => {
    return (
        <HStack gap={4}>
            {label && (
                <span>{`${label}>`}</span>
            )}
            <HListBox
                disabled={readonly}
                as='div'
                className={classNames(cls['list-box'], {}, [className, clsPopup.popup])}
                value={value}
                onChange={onChange}
            >

                <HListBox.Button className={clsPopup.trigger}>
                    <Button
                        disabled={readonly}
                        theme={ButtonTheme.OUTLINE}
                    >
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, [clsPopup[direction]])}>
                    {items.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={
                                        classNames(cls.item, {
                                            [clsPopup.popup]: active,
                                            [clsPopup.popup]: item.disabled,
                                        })
                                    }
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}

                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>

    );
});
