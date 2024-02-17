import {
    ChangeEvent, FC, InputHTMLAttributes, memo, MutableRefObject, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    readonly?: boolean;
}

export const Input: FC<InputProps> = memo(({
    className,
    value,
    onChange,
    placeholder = '',
    type = 'text',
    readonly = false,
    autoFocus = false,
    ...props
}: InputProps) => {
    const ref = useRef() as MutableRefObject<HTMLInputElement>;
    const [caretPosition, setCaretPosition] = useState(0);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if (autoFocus) {
            ref.current.focus();
        }
    }, [autoFocus]);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls['input-wrapper'], mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls['caret-wrapper']}>
                <input
                    ref={ref}
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...props}
                />
                <span
                    className={cls.caret}
                    style={{ left: `${caretPosition * 9}px` }}
                />
            </div>
        </div>
    );
});
