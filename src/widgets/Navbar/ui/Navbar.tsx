import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavBarProps {
    className?: string;
}

export const Navbar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsOpenAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Sign in')}
            </Button>
            <Modal isOpen={isOpenAuthModal} onClose={onToggleModal}>
                lorem
            </Modal>
        </div>
    );
};
