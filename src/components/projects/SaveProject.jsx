import React, { useState } from 'react';

export function SaveProject({ onSave }) {
  const [title, setTitle] = useState('');

  return (
    <div style={{ display: 'flex', gap: '8px', padding: '12px', background: 'var(--cream-surface)', borderRadius: '10px', border: '2px solid var(--red-dark)' }}>
      <input
        type="text"
        placeholder="Project Name..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ flex: 1, padding: '10px 14px', background: 'var(--white)', border: '2px solid var(--border-red)', color: 'var(--dark-neutral)', borderRadius: '6px', fontSize: '13px', outline: 'none', fontWeight: '500' }}
      />
      <button onClick={() => onSave && onSave(title)} className="btn-secondary" style={{ padding: '8px 18px', fontSize: '13px', border: '1px solid var(--red-dark)', minHeight: '38px' }}>
        Save
      </button>
    </div>
  );
}

