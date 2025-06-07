import React from 'react';

interface GridLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const GridLayout: React.FC<GridLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full ${className}`}>
      {children}
    </div>
  );
};

export default GridLayout;