import React from 'react';

export function ProjectList({ onSelect }) {
  const projects = [
    { id: 'proj-1', name: 'ESP32 Ultrasonic Radar', updated: '2026-09-20' },
    { id: 'proj-2', name: 'DHT11 Climate Monitor', updated: '2026-09-19' },
  ];

  return (
    <div style={{ padding: '15px' }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#61dafb' }}>Saved Lab Projects</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {projects.map(p => (
          <div key={p.id} onClick={() => onSelect && onSelect(p)} style={{ padding: '10px', background: '#22222a', border: '1px solid #333', borderRadius: '4px', cursor: 'pointer' }}>
            <div style={{ fontWeight: '500' }}>{p.name}</div>
            <div style={{ fontSize: '11px', color: '#888' }}>Last edited: {p.updated}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
