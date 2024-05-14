import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { Text } from 'shared/ui/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';
import { TextTheme } from 'shared/ui/Text/Text';
import { Dropdown } from 'shared/ui/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';

import cls from './Navbar.module.scss';

interface NavBarProps {
    className?: string;
}

export const Navbar = memo(({
    className,
}: NavBarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onCloseModal = useCallback(() => {
        setIsOpenAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsOpenAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text
                    title={t('Production project')}
                    theme={TextTheme.INVERTED}
                    className={cls['app-name']}
                />
                <AppLink
                    theme={AppLinkTheme.PRIMARY_INVERTED}
                    to={RoutePath.article_create}
                    className={cls['create-link']}
                >
                    {t('Create article')}
                </AppLink>
                <Dropdown
                    className={cls.dropdown}
                    direction='bottom-left'
                    items={[
                        ...(isAdminPanelAvailable ? [{
                            content: t('Admin panel'),
                            href: RoutePath.admin_panel,
                        }] : []),
                        {
                            content: t('My profile'),
                            href: `${RoutePath.profile}/${authData.id}`,
                        },
                        {
                            content: t('Logout'),
                            onClick: onLogout,
                        },
                    ]}
                    trigger={(
                        <Avatar size={30} src={authData.avatar} />
                    )}
                />
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Sign in')}
            </Button>
            <LoginModal
                isOpen={isOpenAuthModal}
                onClose={onCloseModal}
            />
        </header>
    );
});
