export interface Nav {
    companyName: string;
    navItems: NavItem[];
    rightNavItem: NavItem[];
}

export interface NavItem {
    linkName: string;
    link: string;
    subMenu: NavItem[];
}
