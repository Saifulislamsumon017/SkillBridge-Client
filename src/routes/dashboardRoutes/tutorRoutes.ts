import { Route } from '@/types/route.interface';

export const tutorRoutes: Route[] = [
  {
    title: 'Tutor Dashboard',
    items: [
      { title: 'Profile', url: '/dashboard/tutor/profile' },
      { title: 'Availability', url: '/dashboard/tutor/availability' },
      { title: 'Sessions', url: '/dashboard/tutor/sessions' },
      { title: 'Reviews', url: '/dashboard/tutor/reviews' },
    ],
  },
];
