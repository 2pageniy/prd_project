import { ChangeEvent, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>({
    className,
    label = '',
    value,
    onChange = () => {},
    options = [],
    readonly,
}: SelectProps<T>) => {
    const optionList = useMemo(() => (
        options.map(({ value, content }) => (
            <option
                className={cls.option}
                value={value}
                key={value}
            >
                {content}
            </option>
        ))
    ), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as T);
    };

    return (
        <div className={classNames(cls['wrapper-select'], {}, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                disabled={readonly}
                value={value}
                onChange={onChangeHandler}
                className={cls.select}
            >
                {optionList}
            </select>
        </div>
    );
};
