import React from 'react';

export function ProjectList({ onSelect }) {
  const projects = [
    { id: 'proj-1', name: 'ESP32 Ultrasonic Radar', updated: '2026-09-20', type: 'Radar Sensor' },
    { id: 'proj-2', name: 'DHT11 Climate Monitor', updated: '2026-09-19', type: 'Environmental' },
    { id: 'proj-3', name: 'Smart Motor Controller', updated: '2026-09-18', type: 'EV Drive' }
  ];

  return (
    <div style={{ padding: '8px' }}>
      <h4 style={{ margin: '0 0 16px 0', color: 'var(--red-dark)', fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '18px' }}>
        Saved Hardware Projects
      </h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {projects.map(p => (
          <div 
            key={p.id} 
            onClick={() => onSelect && onSelect(p)} 
            className="theme-card theme-card-hover"
            style={{ 
              padding: '16px', 
              background: 'var(--white)', 
              border: '2px solid var(--border-red)', 
              borderRadius: '10px', 
              cursor: 'pointer',
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ fontWeight: '800', color: 'var(--red-dark)', fontSize: '15px' }}>{p.name}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Type: {p.type} • Last edited: {p.updated}</div>
            </div>
            <button className="btn-secondary" style={{ padding: '6px 14px', fontSize: '12px', minHeight: '34px', border: '1px solid var(--red-dark)' }}>
              Open →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

