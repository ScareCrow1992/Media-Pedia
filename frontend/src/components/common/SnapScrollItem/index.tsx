
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SnapScrollItem({ children, className = '' }: Props) {
  return (
    <div
      className={`
        flex-shrink-0 scroll-snap-start
        ${className}
      `}
    >
      {children}
    </div>
  );
}