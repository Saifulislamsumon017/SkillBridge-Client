'use client';

import { Toaster } from 'sonner';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Toaster richColors position="top-right" />
    </>
  );
};

export default Providers;
