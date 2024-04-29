import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { Button } from '../Button';
import { Icon } from '../Icon';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    children: string;
}

export const Code = memo(({
    className,
    children,
}: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(children);
    }, [children]);

    return (
        <pre className={classNames(cls['code-wrapper'], {}, [className])}>
            <Button
                onClick={onCopy}
                className={cls['copy-btn']}
            >
                <Icon
                    className={cls['copy-icon']}
                    Svg={CopyIcon}
                />
            </Button>
            <div className={cls.code}>
                <code>
                    {children}
                </code>
            </div>
        </pre>

    );
});
