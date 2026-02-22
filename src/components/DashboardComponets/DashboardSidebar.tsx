'use client';

import { UserRole } from '@/constants/role';
import { adminRoutes } from '@/routes/dashboardRoutes/adminRoutes';
import { studentRoutes } from '@/routes/dashboardRoutes/studentRoutes';
import { tutorRoutes } from '@/routes/dashboardRoutes/tutorRoutes';
import Link from 'next/link';

interface Props {
  role: UserRole;
}

const DashboardSidebar = ({ role }: Props) => {
  let routes;

  if (role === UserRole.STUDENT) routes = studentRoutes;
  else if (role === UserRole.TUTOR) routes = tutorRoutes;
  else routes = adminRoutes;

  return (
    <aside className="w-64 border-r min-h-screen p-4">
      {routes.map(section => (
        <div key={section.title} className="mb-6">
          <h3 className="font-bold mb-2">{section.title}</h3>
          <div className="space-y-2">
            {section.items.map(item => (
              <Link key={item.url} href={item.url}>
                <p className="hover:text-blue-600">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
};
export default DashboardSidebar;
