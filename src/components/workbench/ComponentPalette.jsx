import React, { useState } from 'react';
import { componentsData } from '../../data/components';
import { ComponentThumbnail } from './ComponentThumbnail';

export function ComponentPalette({ onSelect, onAddComponent }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Basic',
    'Passive',
    'Semiconductor'
  ];

  const filteredComponents = componentsData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || 
      item.category === activeCategory || 
      (activeCategory === 'Basic' && (item.category === 'Breadboard' || item.category === 'Wire' || item.category === 'Switch' || item.type === 'battery')) ||
      (activeCategory === 'Passive' && (item.category === 'Resistor' || item.category === 'Capacitor')) ||
      (activeCategory === 'Semiconductor' && (item.category === 'LED' || item.category === 'Diode' || item.category === 'Transistor' || item.category === 'IC'));
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', padding: '16px' }}>
      <div>
        {/* Search Bar */}
        <div style={{ marginBottom: '14px', position: 'relative' }}>
          <input
            type="text"
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px 8px 34px',
              background: '#FFFFFF',
              border: '1px solid #DCE8E8',
              borderRadius: '8px',
              color: '#123047',
              fontSize: '13px',
              outline: 'none'
            }}
          />
          <span style={{ position: 'absolute', left: '10px', top: '9px', display: 'flex', alignItems: 'center', color: '#587184' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '10px', marginBottom: '14px' }}>
          {categories.map(cat => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: isSelected ? '#159C9C' : '#EFF9F8',
                  border: 'none',
                  color: isSelected ? '#FFFFFF' : '#587184',
                  fontSize: '12px',
                  fontWeight: isSelected ? '600' : '400',
                  padding: '5px 12px',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Component List Cards with Drag & Drop */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: 'calc(100vh - 240px)', overflowY: 'auto' }}>
          {filteredComponents.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData('application/json', JSON.stringify(item));
              }}
              onClick={() => onSelect && onSelect(item)}
              style={{
                padding: '10px 12px',
                borderRadius: '10px',
                cursor: 'grab',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#FFFFFF',
                border: '1px solid #DCE8E8',
                transition: 'border-color 0.2s ease, background 0.2s ease'
              }}
              className="theme-card-hover"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ComponentThumbnail type={item.type} color={item.color} />
                </div>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '13px', color: '#123047' }}>{item.name}</div>
                  <div style={{ fontSize: '11px', color: '#587184' }}>
                    {item.category === 'Passive' ? 'Passive component' : item.category === 'Semiconductor' ? 'Semiconductor' : item.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div style={{
        paddingTop: '12px',
        borderTop: '1px solid #DCE8E8',
        fontSize: '12px',
        color: '#587184',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }}>
        <span>Status</span>
        <span style={{ fontWeight: '600', color: '#159C9C', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#159C9C' }} />
          Ready
        </span>
      </div>
    </div>
  );
}



