// import { userService } from '@/services/user.service';
// import { redirect } from 'next/navigation';

interface Props {
  children: React.ReactNode;
}

const MainLayout = async ({ children }: Props) => {
  // const { data } = await userService.getSession();

  // if (!data?.user) {
  //   redirect('/login');
  // }

  return (
    <div className="flex min-h-screen">
      {/* <DashboardSidebar user={data.user} /> */}
      <div className="flex-1 p-8 bg-gray-50">{children}</div>
    </div>
  );
};

export default MainLayout;
