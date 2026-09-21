import React from 'react';

export function Navbar({ currentPage, setCurrentPage }) {
  const pages = ['Home', 'Dashboard', 'Workbench', 'Projects', 'Login'];
  return (
    <nav style={{ height: '56px', background: '#1e1e24', borderBottom: '1px solid #2d2d35', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
      <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#61dafb' }}>⚡ 3D Hardware Lab</div>
      <div style={{ display: 'flex', gap: '15px' }}>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            style={{
              background: currentPage === page ? '#2d2d38' : 'transparent',
              border: 'none',
              color: currentPage === page ? '#61dafb' : '#ccc',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </nav>
  );
}
