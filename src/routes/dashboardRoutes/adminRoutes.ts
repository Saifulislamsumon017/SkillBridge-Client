import { Route } from '@/types/route.interface';

export const adminRoutes: Route[] = [
  {
    title: 'Admin Dashboard',
    items: [
      { title: 'Users', url: '/dashboard/admin/users' },
      { title: 'Categories', url: '/dashboard/admin/categories' },
      { title: 'Bookings', url: '/dashboard/admin/bookings' },
      { title: 'Analytics', url: '/dashboard/admin/analytics' },
    ],
  },
];
