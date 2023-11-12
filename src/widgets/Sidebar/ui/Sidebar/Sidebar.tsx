import {FC, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "shared/ui/ThemeSwitrcher";
import {LangSwitcher} from "shared/ui/LangSwitcher";

import cls from './Sidebar.module.scss';


interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button
                onClick={onToggle}
            >
                toggle
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
