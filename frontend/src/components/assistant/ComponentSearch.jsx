import React, { useState } from 'react';
import { componentsData } from '../../data/components';
import { ComponentCard } from './ComponentCard';

export function ComponentSearch() {
  const [search, setSearch] = useState('');
  const filtered = componentsData.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ padding: '15px' }}>
      <input
        type="text"
        placeholder="🔍 Search components..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', padding: '10px', background: '#252530', border: '1px solid #3b3b4a', color: '#fff', borderRadius: '6px', boxSizing: 'border-box' }}
      />
      <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {filtered.map(comp => (
          <ComponentCard key={comp.id} component={comp} />
        ))}
      </div>
    </div>
  );
}
