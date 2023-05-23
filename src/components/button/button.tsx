import type { ReactNode } from 'react';
import React from 'react';

interface IButton {
  children: ReactNode;
  className?: string;
}
const Button = ({ children, className }: IButton) => {
  return (
    <button
      className={`rounded-[100px] border border-neutral-700  bg-white py-3 px-5 text-sm font-semibold leading-snug shadow-button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
