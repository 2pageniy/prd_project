import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo(({
    className,
}: NotificationListProps) => {
    const { data, isLoading } = useNotifications(undefined, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack
                gap='16'
                max
                className={classNames('', {}, [className])}
            >
                <Skeleton width='100%' borderRadius='8px' height='80px' />
                <Skeleton width='100%' borderRadius='8px' height='80px' />
                <Skeleton width='100%' borderRadius='8px' height='80px' />
            </VStack>
        );
    }

    return (
        <VStack
            gap='16'
            max
            className={classNames('', {}, [className])}
        >
            {data?.map((item) => (
                <NotificationItem
                    key={item.id}
                    item={item}
                />
            ))}
        </VStack>
    );
});
