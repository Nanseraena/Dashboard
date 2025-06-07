import React from 'react';

const Footer: React.FC<{ className?: string }> = ({ className = '' }) => (
  <footer className={`fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 text-center z-10 ${className}`}>
    © 2025 Your App
  </footer>
);

export default Footer;