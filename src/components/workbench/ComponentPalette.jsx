import React from 'react';
import { componentsData } from '../../data/components';

export function ComponentPalette({ onSelect }) {
  return (
    <div style={{ padding: '15px' }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#888', textTransform: 'uppercase', fontSize: '12px' }}>Component Library</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {componentsData.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelect && onSelect(item)}
            style={{
              padding: '10px',
              background: '#222228',
              border: '1px solid #33333e',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ fontWeight: '500' }}>{item.name}</div>
              <div style={{ fontSize: '11px', color: '#aaa' }}>{item.category} • {item.voltage}</div>
            </div>
            <button style={{ background: '#3b82f6', border: 'none', color: '#fff', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}
