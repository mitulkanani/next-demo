import type { ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';

interface IContainer {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: IContainer) => {
  return (
    <div className={twJoin('mx-auto w-full max-w-7xl bg-white', className)}>
      {children}
    </div>
  );
};

export default Container;
