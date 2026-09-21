import React from 'react';
import { useWorkbench } from '../../context/WorkbenchContext';
import { Sparkles, XCircle } from 'lucide-react';

const WIRE_COLORS = [
  { hex: '#ef4444', label: 'Red (VCC)' },
  { hex: '#3b82f6', label: 'Blue (GND)' },
  { hex: '#eab308', label: 'Yellow' },
  { hex: '#22c55e', label: 'Green' },
  { hex: '#a855f7', label: 'Purple' },
  { hex: '#f97316', label: 'Orange' },
  { hex: '#ffffff', label: 'White' },
  { hex: '#0f172a', label: 'Black' }
];

export function WireColorPicker() {
  const {
    wireColor,
    setWireColor,
    activePinSource,
    setActivePinSource,
    placedWires,
    hoveredPin
  } = useWorkbench();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        background: '#0f172a99',
        backdropFilter: 'blur(8px)',
        border: '1px solid #334155',
        padding: '6px 14px',
        borderRadius: '30px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
        color: '#f8fafc',
        fontSize: '12px'
      }}
    >
      <span style={{ color: '#94a3b8', fontWeight: '500' }}>Wire Color:</span>
      <div style={{ display: 'flex', gap: '6px' }}>
        {WIRE_COLORS.map((c) => (
          <button
            key={c.hex}
            onClick={() => setWireColor(c.hex)}
            title={c.label}
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: c.hex,
              border: wireColor === c.hex ? '2px solid #ffffff' : '1px solid #475569',
              cursor: 'pointer',
              transform: wireColor === c.hex ? 'scale(1.2)' : 'scale(1)',
              transition: 'all 0.15s ease'
            }}
          />
        ))}
      </div>

      <div style={{ width: '1px', height: '18px', background: '#334155' }} />

      {activePinSource ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b' }}>
          <Sparkles size={14} className="animate-spin" />
          <span>Click target pin to connect...</span>
          <button
            onClick={() => setActivePinSource(null)}
            style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', display: 'flex' }}
          >
            <XCircle size={16} />
          </button>
        </div>
      ) : hoveredPin ? (
        <div style={{ color: '#38bdf8' }}>
          Pin: <strong>{hoveredPin.name}</strong> ({hoveredPin.type})
        </div>
      ) : (
        <div style={{ color: '#94a3b8' }}>{placedWires.length} Wires Connected</div>
      )}
    </div>
  );
}
