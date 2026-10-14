import React, { useState } from 'react';
import { Navbar } from './Navbar';

export function AppLayout({ children, currentPage, setCurrentPage }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {children}
      </main>
    </div>
  );
}
