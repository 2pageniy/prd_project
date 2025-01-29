import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routerConfig/routeConfig';
import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
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
        ];
        if (userData) {
            sidebarItemsList.push(
                {
                    path: `${RoutePath.profile}/${userData.id}`,
                    title: 'Profile',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    title: 'Article',
                    Icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
