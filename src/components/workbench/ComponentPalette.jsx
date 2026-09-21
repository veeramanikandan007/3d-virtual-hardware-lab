import React, { useState } from 'react';
import { COMPONENT_MANIFEST, CATEGORIES } from '../../data/componentManifest';
import { useWorkbench } from '../../context/WorkbenchContext';
import { Plus, Search, ShieldCheck, Box } from 'lucide-react';

export function ComponentPalette() {
  const { addComponent } = useWorkbench();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredComponents = COMPONENT_MANIFEST.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: '16px', color: '#e2e8f0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ margin: 0, color: '#94a3b8', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.05em' }}>
          3D Component Catalog
        </h4>
        <span style={{ fontSize: '11px', color: '#38bdf8', background: '#0284c722', padding: '2px 6px', borderRadius: '4px' }}>
          20 Categories
        </span>
      </div>

      {/* Search Bar */}
      <div style={{ position: 'relative' }}>
        <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
        <input
          type="text"
          placeholder="Search 200+ components..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '100%',
            background: '#0f172a',
            border: '1px solid #1e293b',
            color: '#fff',
            borderRadius: '6px',
            padding: '6px 10px 6px 30px',
            fontSize: '12px',
            boxSizing: 'border-box'
          }}
        />
      </div>

      {/* Category Pills (20 Categories) */}
      <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', paddingBottom: '6px' }}>
        <button
          onClick={() => setSelectedCategory('All')}
          style={{
            background: selectedCategory === 'All' ? '#0284c7' : '#1e293b',
            color: selectedCategory === 'All' ? '#fff' : '#94a3b8',
            border: 'none',
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '11px',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}
        >
          All ({COMPONENT_MANIFEST.length})
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.name)}
            style={{
              background: selectedCategory === cat.name ? '#0284c7' : '#1e293b',
              color: selectedCategory === cat.name ? '#fff' : '#94a3b8',
              border: 'none',
              padding: '4px 10px',
              borderRadius: '12px',
              fontSize: '11px',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Component Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: 'calc(100vh - 240px)', overflowY: 'auto' }}>
        {filteredComponents.map((item) => (
          <div
            key={item.id}
            onClick={() => addComponent(item.id)}
            style={{
              padding: '10px 12px',
              background: '#0f172a',
              border: '1px solid #1e293b',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#38bdf8')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#1e293b')}
          >
            <div style={{ flex: 1, paddingRight: '8px' }}>
              <div style={{ fontWeight: '500', fontSize: '13px', color: '#f8fafc' }}>{item.name}</div>
              <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>{item.category}</span>
                <span>•</span>
                <span>{item.dimensions.length}×{item.dimensions.width}mm</span>
              </div>
              <div style={{ marginTop: '4px', display: 'flex', gap: '4px' }}>
                <span style={{ fontSize: '9px', padding: '1px 5px', borderRadius: '3px', background: item.accuracy === 'verified_cad' ? '#10b98122' : '#f59e0b22', color: item.accuracy === 'verified_cad' ? '#10b981' : '#f59e0b' }}>
                  {item.accuracy === 'verified_cad' ? 'Verified CAD' : 'Informed Mesh'}
                </span>
                <span style={{ fontSize: '9px', padding: '1px 5px', borderRadius: '3px', background: '#33415544', color: '#94a3b8' }}>
                  {item.pins.length} Pins
                </span>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                addComponent(item.id);
              }}
              style={{
                background: '#0284c7',
                border: 'none',
                color: '#fff',
                padding: '6px 10px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '11px'
              }}
            >
              <Plus size={12} /> Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
