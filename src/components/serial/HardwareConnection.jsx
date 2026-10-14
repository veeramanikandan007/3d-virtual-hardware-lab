import React from 'react';
import { useSerial } from '../../hooks/useSerial';

export function HardwareConnection() {
  const { connected, connect } = useSerial();

  return (
    <button
      onClick={connect}
      style={{
        padding: '6px 14px',
        fontSize: '12px',
        fontWeight: '600',
        minHeight: '36px',
        background: '#FFFFFF',
        border: '1px solid #DCE8E8',
        borderRadius: '8px',
        color: '#123047',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#159C9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6"></path>
        <path d="M6 8h12v4a6 6 0 0 1-12 0V8z"></path>
        <path d="M12 18v4"></path>
      </svg>
      <span>{connected ? 'Connected' : 'Connect Device'}</span>
    </button>
  );
}


