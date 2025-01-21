import { memo } from 'react';

import { Button, ButtonTheme } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(({
    className,
}: NotificationButtonProps) => {
    return (
        <Popover
            direction='bottom-left'
            className={classNames(cls['notification-button'], {}, [className])}
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon
                        className={cls.icon}
                        inverted
                        Svg={NotificationIcon}
                    />
                </Button>
            )}
        >
            <NotificationList className={cls.notification} />
        </Popover>
    );
});
