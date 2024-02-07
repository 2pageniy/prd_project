import { FC } from 'react';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';

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
            <LoginForm />
        </Modal>
    );
};
