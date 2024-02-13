import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUserName({ username, password }));

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, password, username]);

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
        >
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
