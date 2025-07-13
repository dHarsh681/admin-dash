import { MenuItem } from '../interfaces/menu-item.interface';

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'bi bi-house',
    route: 'dashboard',
  },
  {
    label: 'Users',
    icon: 'bi bi-people',
    route: 'users',
  },
  {
    label: 'Reports',
    // icon: 'bi bi-bar-chart-fill',
    icon: 'fas fa-chart-column',
    route: '',
    submenu: [
      {
        label: 'User Report',
        icon: 'bi bi-bar-chart-fill',
        route: 'user-report',
      },
      {
        label: 'Manager Report',
        icon: 'bi bi-bar-chart-fill',
        route: 'manager-report',
      },
    ],
  },
];
