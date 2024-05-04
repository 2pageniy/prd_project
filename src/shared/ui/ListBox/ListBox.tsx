import { Fragment, memo, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import { Button, ButtonTheme } from '../Button';
import cls from './ListBox.module.scss';
import { DropdownDirection } from '../../types/ui';

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
                className={classNames(cls['list-box'], {}, [className])}
                value={value}
                onChange={onChange}
            >

                <HListBox.Button className={cls.trigger}>
                    <Button
                        disabled={readonly}
                        theme={ButtonTheme.OUTLINE}
                    >
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, [cls[direction]])}>
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
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled,
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
