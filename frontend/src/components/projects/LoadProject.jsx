import React from 'react';

export function LoadProject({ onLoad }) {
  return (
    <button onClick={onLoad} className="btn-outline" style={{ padding: '10px 18px', fontSize: '13px', borderWidth: '2px', minHeight: '44px' }}>
      📂 Open Project File (.json)
    </button>
  );
}

