import React, { useState } from 'react';
import { COMPONENT_MANIFEST, CATEGORIES } from '../../data/componentManifest';
import { useWorkbench } from '../../context/WorkbenchContext';
import { ComponentThumbnail } from './ComponentThumbnail';
import { Plus, Search, Layers } from 'lucide-react';

export function ComponentPalette({ onSelect, onAddComponent }) {
  const workbench = useWorkbench();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredComponents = COMPONENT_MANIFEST.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      (item.type && item.type.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAdd = (item) => {
    if (workbench?.addComponent) {
      workbench.addComponent(item.id);
    }
    if (onAddComponent) {
      onAddComponent(item);
    }
  };

  const handleSelect = (item) => {
    if (workbench?.setSelectedCatalogId) {
      workbench.setSelectedCatalogId(item.id);
    }
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <div style={{ padding: '16px', color: '#e2e8f0', display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h4 style={{ margin: 0, color: '#94a3b8', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Layers size={14} color="#38bdf8" /> 3D Hardware Catalog
        </h4>
        <span style={{ fontSize: '11px', color: '#38bdf8', background: 'rgba(2,132,199,0.15)', padding: '2px 8px', borderRadius: '12px', border: '1px solid rgba(56,189,248,0.2)' }}>
          {COMPONENT_MANIFEST.length} Items
        </span>
      </div>

      {/* Search Bar */}
      <div style={{ position: 'relative', marginBottom: '10px' }}>
        <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
        <input
          type="text"
          placeholder="Search 190+ components..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '100%',
            background: '#0f172a',
            border: '1px solid #1e293b',
            color: '#fff',
            borderRadius: '8px',
            padding: '8px 12px 8px 32px',
            fontSize: '12px',
            boxSizing: 'border-box',
            outline: 'none'
          }}
        />
      </div>

      {/* Category Filter Pills */}
      <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '10px' }}>
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
            whiteSpace: 'nowrap',
            fontWeight: selectedCategory === 'All' ? '600' : '400'
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
              whiteSpace: 'nowrap',
              fontWeight: selectedCategory === cat.name ? '600' : '400'
            }}
          >
            {cat.name} ({cat.count})
          </button>
        ))}
      </div>

      {/* Component List */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', paddingRight: '4px' }}>
        {filteredComponents.map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('application/json', JSON.stringify(item));
            }}
            onClick={() => handleSelect(item)}
            style={{
              padding: '10px 12px',
              background: '#0f172a',
              border: '1px solid #1e293b',
              borderRadius: '8px',
              cursor: 'grab',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#38bdf8')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#1e293b')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
              <div style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ComponentThumbnail type={item.type} color={item.color} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: '600', fontSize: '12px', color: '#f8fafc', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {item.name}
                </div>
                <div style={{ fontSize: '10px', color: '#64748b' }}>
                  {item.category} • {item.pins?.length || 0} pins
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAdd(item);
              }}
              style={{
                background: '#0284c7',
                border: 'none',
                color: '#fff',
                padding: '5px 8px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '11px',
                flexShrink: 0
              }}
              title="Add to 3D Workbench"
            >
              <Plus size={12} /> Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
