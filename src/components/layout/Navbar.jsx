import React, { useState } from 'react';

export function Navbar({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const pages = [
    { name: 'Dashboard', label: 'Dashboard' },
    { name: 'Circuit Designer', label: 'Circuit Designer' },
    { name: 'Workbench', label: '3D Simulation' },
    { name: 'Components', label: 'Components' },
    { name: 'Projects', label: 'Projects' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: '#FFFFFF',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '0 28px',
      height: '72px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: 'var(--shadow-subtle)'
    }}>
      {/* Left: Brand Logo (AERO LAB) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div 
          onClick={() => setCurrentPage('Home')} 
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '8px',
            background: '#DDF5F3',
            color: '#159C9C',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ 
              fontFamily: 'var(--font-main)', 
              fontWeight: '700', 
              fontSize: '18px', 
              letterSpacing: '-0.01em',
              color: '#123047' 
            }}>
              AERO
            </span>
            <span style={{
              background: '#DDF5F3',
              color: '#159C9C',
              padding: '2px 8px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '700'
            }}>
              LAB
            </span>
          </div>
        </div>
      </div>

      {/* Center: Desktop Navigation */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: '28px',
      }} className="nav-desktop">
        {pages.map((p) => {
          const isActive = currentPage === p.name;
          return (
            <button
              key={p.name}
              onClick={() => setCurrentPage(p.name)}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: isActive ? '2px solid #159C9C' : '2px solid transparent',
                color: isActive ? '#159C9C' : '#587184',
                fontSize: '14px',
                fontWeight: isActive ? '600' : '400',
                padding: '22px 4px 20px 4px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {p.label}
            </button>
          );
        })}
      </nav>

      {/* Right Actions: Search, Notifications, Settings, Profile & Run Simulation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            title="Search"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#587184',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          {searchOpen && (
            <input
              type="text"
              placeholder="Search components, circuits..."
              autoFocus
              onBlur={() => setSearchOpen(false)}
              style={{
                position: 'absolute',
                right: 0,
                top: '46px',
                width: '240px',
                padding: '8px 12px',
                background: '#FFFFFF',
                border: '1px solid #159C9C',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-hover)',
                color: '#123047',
                outline: 'none',
                fontSize: '13px',
                zIndex: 150
              }}
            />
          )}
        </div>

        <button
          title="Notifications"
          onClick={() => alert('No new notifications')}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#587184',
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </button>

        <button
          title="Settings"
          onClick={() => alert('Lab Settings')}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#587184',
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </button>

        <button
          onClick={() => setCurrentPage('Login')}
          title="Profile"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#587184',
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </button>

        <button
          onClick={() => setCurrentPage('Workbench')}
          className="btn-primary"
          style={{
            fontSize: '13px',
            fontWeight: '600',
            padding: '8px 18px',
            height: '38px',
            background: '#159C9C',
            color: '#FFFFFF'
          }}
        >
          Run Simulation
        </button>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: '#159C9C',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            width: '36px',
            height: '36px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
          className="mobile-hamburger-btn"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '72px',
          left: 0,
          right: 0,
          background: '#FFFFFF',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: 'var(--shadow-hover)',
          zIndex: 140
        }}>
          {pages.map((p) => (
            <button
              key={p.name}
              onClick={() => {
                setCurrentPage(p.name);
                setMobileMenuOpen(false);
              }}
              style={{
                background: currentPage === p.name ? '#EFF9F8' : 'transparent',
                color: currentPage === p.name ? '#159C9C' : '#123047',
                border: 'none',
                padding: '10px 12px',
                borderRadius: '6px',
                textAlign: 'left',
                fontSize: '14px',
                fontWeight: '600'
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}
      
      <style>{`
        @media (max-width: 992px) {
          .nav-desktop { display: none !important; }
          .mobile-hamburger-btn { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  );
}




