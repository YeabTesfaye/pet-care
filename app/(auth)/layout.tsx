import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex items-center justify-center h-screen w-full overflow-hidden">
  {children}
</div>
;
};

export default AuthLayout;
