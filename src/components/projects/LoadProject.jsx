import React from 'react';

export function LoadProject({ onLoad }) {
  return (
    <button onClick={onLoad} style={{ padding: '8px 16px', background: '#3b82f6', border: 'none', color: '#fff', borderRadius: '4px', cursor: 'pointer' }}>
      📂 Open Project File (.json)
    </button>
  );
}
