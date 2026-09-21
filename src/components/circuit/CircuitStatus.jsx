import React from 'react';

export function CircuitStatus({ active = true, voltage = '5.0V' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: '#22222a', borderRadius: '4px' }}>
      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: active ? '#10b981' : '#ef4444' }} />
      <span style={{ fontSize: '13px', fontWeight: '500' }}>{active ? 'Circuit Active' : 'Circuit Idle'} ({voltage})</span>
    </div>
  );
}
