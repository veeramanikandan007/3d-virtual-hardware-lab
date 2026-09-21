import React, { useState } from 'react';
import { useSerial } from '../../hooks/useSerial';

export function SerialMonitor() {
  const { connected, logs } = useSerial();
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: '#FFFFFF',
          border: '1px solid #DCE8E8',
          boxShadow: '0 2px 8px rgba(20, 70, 70, 0.06)',
          padding: '6px 14px',
          borderRadius: '8px',
          fontSize: '12px',
          fontWeight: '600',
          color: '#123047',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#159C9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
        <span>Console</span>
        <span style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: connected ? '#10B981' : '#587184'
        }} />
      </button>

      {/* Console Modal / Popover */}
      {open && (
        <div style={{
          position: 'absolute',
          bottom: '48px',
          left: 0,
          width: '340px',
          background: '#FFFFFF',
          border: '1px solid var(--border-subtle)',
          borderRadius: '10px',
          boxShadow: 'var(--shadow-hover)',
          overflow: 'hidden',
          zIndex: 100
        }}>
          <div style={{
            padding: '10px 14px',
            background: 'var(--bg-muted)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            fontSize: '13px',
            fontWeight: '600'
          }}>
            <span>Console ({connected ? '115200 Baud' : 'Disconnected'})</span>
            <button onClick={() => setOpen(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '14px' }}>
              ✕
            </button>
          </div>
          <div style={{
            height: '160px',
            overflowY: 'auto',
            background: '#0D1117',
            padding: '10px 12px',
            color: '#F0F6FC',
            fontFamily: 'monospace',
            fontSize: '12px'
          }}>
            {logs && logs.length > 0 ? (
              logs.map((log, i) => <div key={i} style={{ marginBottom: '4px' }}>{log}</div>)
            ) : (
              <div style={{ color: '#8B949E', fontStyle: 'italic' }}>No active serial device output...</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


