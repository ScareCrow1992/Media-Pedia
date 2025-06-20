import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SnapScrollList({ children, className = '' }: Props) {
  return (
    <div
      className={`
        flex overflow-x-auto scroll-smooth gap-4 px-4 py-2
        scroll-snap-x scroll-snap-mandatory
        lg:scroll-snap-none
        ${className}
      `}
    >
      {children}
    </div>
  );
}