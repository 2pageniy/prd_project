import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Profile } from '../../model/types/profile';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
    readonly?: boolean;
    isLoading?: boolean;
    error?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({
    className,
    data,
    onChangeFirstName = () => {},
    onChangeLastName = () => {},
    onChangeAge = () => {},
    onChangeCity = () => {},
    onChangeUsername = () => {},
    onChangeAvatar = () => {},
    onChangeCurrency = () => {},
    onChangeCountry = () => {},
    readonly = true,
    isLoading,
    error,
}) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack justify='center' max className={classNames(cls['profile-card'], {}, [className, cls.loading])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify='center' max className={classNames(cls['profile-card'], {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Error occurred while downloading')}
                    text={t(error)}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack gap={16} max className={classNames(cls['profile-card'], mods, [className])}>
            {data?.avatar && (
                <HStack justify='center' max className={cls['avatar-wrapper']}>
                    <Avatar
                        src={data.avatar}
                        alt='avatar'
                    />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t('Your name')}
                className={cls.input}
                onChange={onChangeFirstName}
                readonly={readonly}
                data-testid='profile-card.first-name'
            />
            <Input
                value={data?.lastname}
                placeholder={t('Your lastname')}
                className={cls.input}
                onChange={onChangeLastName}
                readonly={readonly}
                data-testid='profile-card.last-name'
            />
            <Input
                value={data?.age}
                placeholder={t('Your age')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('Your city')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('Your username')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={readonly ? '' : data?.avatar}
                placeholder={t('Your avatar')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};
