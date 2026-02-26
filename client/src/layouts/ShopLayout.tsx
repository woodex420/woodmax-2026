import React from 'react';

interface Props {
  children: React.ReactNode;
}

const ShopLayout: React.FC<Props> = ({ children }) => (
  <div>
    {/* TODO: add Navbar, Footer */}
    {children}
  </div>
);

export default ShopLayout;
