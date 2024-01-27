import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavBarProps {
    className?: string;
}

export const Navbar: FC<NavBarProps> = ({ className }) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links} />
    </div>
);
