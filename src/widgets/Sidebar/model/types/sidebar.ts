import React from 'react';

export interface SidebarItemType {
    path: string;
    title: string;
    Icon: React.FC<React.SVGAttributes<SVGElement>>;
    authOnly?: boolean;
}
