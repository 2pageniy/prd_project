import { FC, Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

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
            className={classNames('', {}, [className])}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync
                    onSuccess={onClose}
                />
            </Suspense>
        </Modal>
    );
};
