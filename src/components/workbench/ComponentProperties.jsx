import React, { useState } from 'react';
import { ComponentThumbnail } from './ComponentThumbnail';

export function ComponentProperties({ selectedComponent }) {
  const component = selectedComponent || {
    id: 'resistor-220',
    name: 'Resistor R1',
    category: 'Passive Component',
    type: 'resistor',
    resistance: '220 Ω',
    power: '0.25 W',
    voltage: '5.0 V',
    current: '22.7 mA',
    temperature: '32.4 °C',
    status: 'Active',
  };

  const [resValue, setResValue] = useState('220');
  const [showDiagnostics, setShowDiagnostics] = useState(true);

  return (
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Selected Component Preview Card (Teal Light Background) */}
      <div style={{
        background: '#EFF9F8',
        border: '1px solid #DCE8E8',
        borderRadius: '12px',
        padding: '14px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '8px',
            background: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
          }}>
            <ComponentThumbnail type={component.type || 'resistor'} color={component.color} />
          </div>
          <div>
            <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#123047', margin: 0 }}>
              {component.name}
            </h3>
            <span style={{ fontSize: '12px', color: '#587184' }}>
              {component.category || 'Passive Component'}
            </span>
          </div>
        </div>

        {/* Status Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 10px',
          background: '#159C9C',
          borderRadius: '14px',
          fontSize: '11px',
          fontWeight: '600',
          color: '#FFFFFF'
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFFFFF' }} />
          {component.status || 'Active'}
        </div>
      </div>

      {/* Property Rows - Two-Column Layout */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '4px 2px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
          <span style={{ color: '#587184' }}>Resistance</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <input
              type="text"
              value={resValue}
              onChange={(e) => setResValue(e.target.value)}
              style={{
                width: '60px',
                padding: '2px 6px',
                background: '#FFFFFF',
                border: '1px solid #DCE8E8',
                borderRadius: '6px',
                color: '#123047',
                fontSize: '13px',
                fontWeight: '600',
                textAlign: 'right',
                outline: 'none'
              }}
            />
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#123047' }}>Ω</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
          <span style={{ color: '#587184' }}>Voltage Drop</span>
          <span style={{ fontWeight: '600', color: '#123047' }}>{component.voltage || '5.0 V'}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
          <span style={{ color: '#587184' }}>Current Flow</span>
          <span style={{ fontWeight: '600', color: '#123047' }}>{component.current || '22.7 mA'}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
          <span style={{ color: '#587184' }}>Power</span>
          <span style={{ fontWeight: '600', color: '#123047' }}>{component.power || '0.25 W'}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
          <span style={{ color: '#587184' }}>Temperature</span>
          <span style={{ fontWeight: '600', color: '#123047' }}>{component.temperature || '32.4 °C'}</span>
        </div>
      </div>

      {/* Diagnostics Card */}
      <div style={{
        border: '1px solid #DCE8E8',
        borderRadius: '10px',
        background: '#FFFFFF',
        overflow: 'hidden',
        marginTop: '8px'
      }}>
        <button
          onClick={() => setShowDiagnostics(!showDiagnostics)}
          style={{
            width: '100%',
            padding: '12px 14px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#FFFFFF',
            border: 'none',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: '600',
            color: '#123047'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Diagnostics</span>
          </div>
          <span style={{ fontSize: '12px', color: '#587184' }}>{showDiagnostics ? '∧' : '∨'}</span>
        </button>

        {showDiagnostics && (
          <div style={{ padding: '0 14px 14px 14px', display: 'flex', gap: '16px', fontSize: '12px' }}>
            <span style={{ color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500' }}>
              ✓ 0 Errors
            </span>
            <span style={{ color: '#D97706', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500' }}>
              ⚠ 2 Warnings
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
