import { memo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { NotificationList } from '@/entities/Notification';
import { Popover } from '@/shared/ui/Popups';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Drawer } from '@/shared/ui/Drawer';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(({
    className,
}: NotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onCloseDrawer = () => {
        setIsOpen(false);
    };

    const onOpenDrawer = () => {
        setIsOpen(true);
    };

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon
                className={cls.icon}
                inverted
                Svg={NotificationIcon}
            />
        </Button>
    );

    return (
        <>
            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer
                        isOpen={isOpen}
                        onClose={onCloseDrawer}
                    >
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            </MobileView>
            <BrowserView>
                <Popover
                    direction='bottom-left'
                    className={classNames(cls['notification-button'], {}, [className])}
                    trigger={trigger}
                >
                    <NotificationList className={cls.notification} />
                </Popover>
            </BrowserView>
        </>
    );
});
