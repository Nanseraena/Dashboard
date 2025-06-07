// components/GridItem.tsx
import React from 'react';

interface GridItemProps {
  children: React.ReactNode;
  className?: string;
}

const GridItem: React.FC<GridItemProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow p-6 h-full min-h-[200px] ${className}`}>
      {children}
    </div>
  );
};

export default GridItem;