import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './Navbar.module.scss';

interface NavBarProps {
    className?: string;
}

export const Navbar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsOpenAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsOpenAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
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
        </div>
    );
};
