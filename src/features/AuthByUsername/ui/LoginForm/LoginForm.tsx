import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/Text';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slices/loginSlice';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls['login-form'], {}, [className])}>
            <Text
                title={t('Form authorization')}
            />
            {error && (
                <Text
                    theme={TextTheme.ERROR}
                    text={t(error)}
                />
            )}
            <Input
                autoFocus
                placeholder={t('Username')}
                className={cls.input}
                onChange={onChangeUsername}
                value={username}
                type='text'
            />
            <Input
                placeholder={t('Password')}
                className={cls.input}
                onChange={onChangePassword}
                value={password}
                type='text'
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls['login-btn']}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Enter')}
            </Button>
        </div>
    );
});
