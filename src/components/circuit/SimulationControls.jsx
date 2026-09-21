import React from 'react';

export function SimulationControls({ onRun, onPause, onReset }) {
  return (
    <div style={{ display: 'flex', gap: '8px', padding: '10px', background: '#1a1a20', borderRadius: '6px' }}>
      <button onClick={onRun} style={{ flex: 1, padding: '8px', background: '#10b981', border: 'none', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>▶ Power On</button>
      <button onClick={onPause} style={{ flex: 1, padding: '8px', background: '#f59e0b', border: 'none', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>⏸ Pause</button>
      <button onClick={onReset} style={{ flex: 1, padding: '8px', background: '#ef4444', border: 'none', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>↺ Reset</button>
    </div>
  );
}
