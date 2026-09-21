import React from 'react';
import { useSerial } from '../../hooks/useSerial';

export function HardwareConnection() {
  const { connected, connect } = useSerial();

  return (
    <div style={{ padding: '15px', background: '#1c1c24', borderRadius: '6px', border: '1px solid #333344', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <div style={{ fontWeight: 'bold' }}>ESP32 Hardware Bridge</div>
        <div style={{ fontSize: '12px', color: connected ? '#10b981' : '#f59e0b' }}>
          {connected ? '● Web Serial Connected' : '○ Disconnected'}
        </div>
      </div>
      <button onClick={connect} style={{ padding: '8px 16px', background: '#2563eb', border: 'none', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontWeight: '500' }}>
        {connected ? 'Reconnect' : 'Connect Device'}
      </button>
    </div>
  );
}
