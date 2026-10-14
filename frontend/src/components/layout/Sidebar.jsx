import React from 'react';

export function Sidebar({ children, title, icon }) {
  return (
    <aside style={{
      width: '100%',
      height: '100%',
      background: '#FFFFFF',
      borderRight: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto'
    }} className="workbench-sidebar">
      {title && (
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#FFFFFF'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {title === 'Components' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#159C9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="8" height="8" rx="2"></rect>
                <rect x="14" y="2" width="8" height="8" rx="2"></rect>
                <rect x="2" y="14" width="8" height="8" rx="2"></rect>
                <rect x="14" y="14" width="8" height="8" rx="2"></rect>
              </svg>
            ) : title === 'Properties' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#159C9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
            ) : icon ? (
              <span style={{ fontSize: '15px' }}>{icon}</span>
            ) : null}
            <span style={{ 
              fontSize: '16px', 
              fontWeight: '600', 
              color: '#123047' 
            }}>
              {title}
            </span>
          </div>
        </div>
      )}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {children}
      </div>
    </aside>
  );
}


