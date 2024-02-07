import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls['login-form'], {}, [className])}>
            <Input
                autoFocus
                placeholder={t('Username')}
                className={cls.input}
                type='text'
            />
            <Input
                placeholder={t('Password')}
                className={cls.input}
                type='text'
            />
            <Button className={cls['login-btn']}>
                {t('Enter')}
            </Button>
        </div>
    );
};
