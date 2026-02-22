import DashboardSidebar from '@/components/DashboardComponets/DashboardSidebar';
import { userService } from '@/services/user.service';
import { redirect } from 'next/navigation';

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = async ({ children }: Props) => {
  const session = await userService.getSession();

  if (!session) {
    redirect('/login');
  }

  const role = session.data.user.role;

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar role={role} />

      <main className="flex-1 p-8 bg-gray-50">{children}</main>
    </div>
  );
};

export default DashboardLayout;
