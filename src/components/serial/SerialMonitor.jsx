import React from 'react';
import { useSerial } from '../../hooks/useSerial';

export function SerialMonitor() {
  const { connected, logs } = useSerial();

  return (
    <div style={{ padding: '15px', background: '#0a0a0f', fontFamily: 'monospace', borderRadius: '6px', border: '1px solid #222' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ color: '#10b981' }}>Serial Console ({connected ? '115200 Baud' : 'Disconnected'})</span>
      </div>
      <div style={{ height: '140px', overflowY: 'auto', background: '#121218', padding: '8px', color: '#38bdf8', fontSize: '12px' }}>
        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>
    </div>
  );
}
