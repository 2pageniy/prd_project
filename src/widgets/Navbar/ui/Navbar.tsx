import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink";
import cls from './Navbar.module.scss';

interface NavBarProps {
    className?: string;
}

export const Navbar: FC<NavBarProps> = ({className}) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls['main-link']}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>О сайте</AppLink>
            </div>
        </div>
    );
};
