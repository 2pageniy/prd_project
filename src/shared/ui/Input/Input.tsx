import {
    ChangeEvent, FC, InputHTMLAttributes, memo, MutableRefObject, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

export const Input: FC<InputProps> = memo(({
    className,
    value,
    onChange,
    placeholder = '',
    type = 'text',
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

    return (
        <div className={classNames(cls['input-wrapper'], {}, [className])}>
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
