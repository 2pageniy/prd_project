import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RoutePath } from '@/shared/config/routerConfig/routeConfig';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo(({
    className,
}: AvatarDropdownProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction='bottom-left'
            items={[
                ...(isAdminPanelAvailable ? [{
                    content: t('Admin panel'),
                    href: RoutePath.admin_panel,
                    key: 'admin',
                }] : []),
                {
                    content: t('My profile'),
                    href: `${RoutePath.profile}/${authData.id}`,
                    key: 'profile',
                },
                {
                    content: t('Logout'),
                    onClick: onLogout,
                    key: 'logout',
                },
            ]}
            trigger={(
                <Avatar size={30} src={authData.avatar} />
            )}
        />
    );
});
