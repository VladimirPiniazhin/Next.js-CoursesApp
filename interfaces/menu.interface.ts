import { TopLevelCategory } from './page.interface';
import { ReactNode } from 'react';

export interface PageItem {
    _id: string;
    title: string;
    alias: string;
    category: string;
}

export interface MenuItem {
    _id: {
        secondCategory: string;
    };
    isOpened?: boolean;
    pages: PageItem[];
}


export interface FirstLevelMenuItem {
    route: string;
    name: string;
    icon: ReactNode;
    id: TopLevelCategory;
}
