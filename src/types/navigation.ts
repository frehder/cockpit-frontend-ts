export interface INavigationItem {
    link: string;
    label: string;
}

export type TNavigationItems = Record<string, INavigationItem>;
