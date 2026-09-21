import React from 'react';

export function Sidebar({ children }) {
  return (
    <aside style={{ width: '320px', background: '#18181c', borderRight: '1px solid #2d2d35', height: 'calc(100vh - 56px)', overflowY: 'auto' }}>
      {children}
    </aside>
  );
}
