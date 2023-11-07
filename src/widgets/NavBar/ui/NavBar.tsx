import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink";
import cls from './NavBar.module.scss';
import {ThemeSwitcher} from "shared/ui/ThemeSwitrcher";

interface NavBarProps {
    className?: string;
}

export const NavBar: FC<NavBarProps> = ({className}) => {
    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <ThemeSwitcher  />
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls.mainLink}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>О сайте</AppLink>
            </div>
        </div>
    );
};
