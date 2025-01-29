import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LoginModal } from '@/features/AuthByUsername';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { getUserAuthData } from '@/entities/User';
import { Text } from '@/shared/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { RoutePath } from '@/shared/config/routerConfig/routeConfig';
import { TextTheme } from '@/shared/ui/Text/Text';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';

interface NavBarProps {
    className?: string;
}

export const Navbar = memo(({
    className,
}: NavBarProps) => {
    const { t } = useTranslation();
    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsOpenAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsOpenAuthModal(true);
    }, []);

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
                <HStack gap='16' className={cls.actions}>

                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
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
