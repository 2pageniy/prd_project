import React from 'react';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    path: string;
    title: string;
    Icon: React.FC<React.SVGAttributes<SVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        title: 'Main',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        title: 'About',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        title: 'Profile',
        Icon: ProfileIcon,
    },
];
