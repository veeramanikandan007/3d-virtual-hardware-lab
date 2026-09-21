import React, { useState } from 'react';

export function SaveProject({ onSave }) {
  const [title, setTitle] = useState('');

  return (
    <div style={{ display: 'flex', gap: '8px', padding: '10px', background: '#1e1e26', borderRadius: '6px' }}>
      <input
        type="text"
        placeholder="Project Name..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ flex: 1, padding: '8px', background: '#121218', border: '1px solid #333', color: '#fff', borderRadius: '4px' }}
      />
      <button onClick={() => onSave && onSave(title)} style={{ padding: '8px 16px', background: '#10b981', border: 'none', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
        Save
      </button>
    </div>
  );
}
