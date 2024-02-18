import { ChangeEvent, FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select: FC<SelectProps> = ({
    className,
    label = '',
    value,
    onChange = () => {},
    options = [],
    readonly,
}) => {
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
        onChange(e.target.value);
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
