import React from 'react';

export function ComponentCard({ component }) {
  return (
    <div style={{ padding: '12px', background: '#22222a', border: '1px solid #33333f', borderRadius: '6px' }}>
      <div style={{ fontWeight: 'bold', color: '#61dafb' }}>{component.name}</div>
      <div style={{ fontSize: '12px', color: '#aaa', marginTop: '4px' }}>Category: {component.category}</div>
      <div style={{ fontSize: '12px', color: '#aaa' }}>Pins: {component.pins.join(', ')}</div>
    </div>
  );
}
