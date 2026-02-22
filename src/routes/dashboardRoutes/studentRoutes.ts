import { Route } from '@/types/route.interface';

export const studentRoutes: Route[] = [
  {
    title: 'Student Dashboard',
    items: [
      { title: 'Bookings', url: '/dashboard/student/bookings' },
      { title: 'Reviews', url: '/dashboard/student/reviews' },
      { title: 'Profile', url: '/dashboard/student/profile' },
    ],
  },
];
