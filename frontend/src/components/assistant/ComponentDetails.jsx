import React from 'react';

export function ComponentDetails({ component }) {
  if (!component) return <div style={{ padding: '15px', color: '#888' }}>Select a component to inspect details.</div>;
  return (
    <div style={{ padding: '15px', background: '#1c1c24', borderRadius: '8px', border: '1px solid #2e2e3a' }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#61dafb' }}>{component.name}</h3>
      <p><strong>Operating Voltage:</strong> {component.voltage}</p>
      <p><strong>Category:</strong> {component.category}</p>
      <h4>Pinout Specification</h4>
      <ul>
        {component.pins.map((pin, i) => (
          <li key={i}>{pin}</li>
        ))}
      </ul>
    </div>
  );
}
