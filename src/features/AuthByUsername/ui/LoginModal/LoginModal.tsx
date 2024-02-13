import { FC, Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({
    className,
    onClose,
    isOpen,
}) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls['login-modal'], {}, [className])}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync
                    onSuccess={onClose}
                />
            </Suspense>
        </Modal>
    );
};
