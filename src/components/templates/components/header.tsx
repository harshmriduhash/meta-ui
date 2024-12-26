'use client';

import React, { useState } from 'react';

import Navbar from './navbar';
import Sidebar from './sidebar';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Navbar setShowSidebar={setShowSidebar} />
    </>
  );
};
export default Header;
