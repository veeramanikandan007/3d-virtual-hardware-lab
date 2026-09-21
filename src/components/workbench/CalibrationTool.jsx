import React, { useState } from 'react';
import { useWorkbench } from '../../context/WorkbenchContext';
import { componentsData } from '../../data/components';
import { Crosshair, Sliders, Check, Copy } from 'lucide-react';

export function CalibrationTool() {
  const { selectedComponentId, placedComponents } = useWorkbench();
  const [activePinId, setActivePinId] = useState(null);
  const [copied, setCopied] = useState(false);

  const activeComp = placedComponents.find((c) => c.instanceId === selectedComponentId);
  const catalogMeta = activeComp
    ? componentsData.find((item) => item.id === activeComp.componentId)
    : null;

  if (!activeComp || !catalogMeta) return null;

  const currentPin = catalogMeta.pins.find((p) => p.id === activePinId) || catalogMeta.pins[0];

  const handleCopyCalibration = () => {
    const json = JSON.stringify(catalogMeta.pins, null, 2);
    navigator.clipboard.writeText(json);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        background: '#090d16dd',
        backdropFilter: 'blur(10px)',
        border: '1px solid #334155',
        borderRadius: '8px',
        padding: '12px',
        color: '#f8fafc',
        fontSize: '11px',
        maxWidth: '280px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600', color: '#38bdf8' }}>
          <Crosshair size={14} /> Pin Anchor Calibrator
        </span>
        <button
          onClick={handleCopyCalibration}
          style={{
            background: copied ? '#10b981' : '#334155',
            border: 'none',
            color: '#fff',
            padding: '3px 6px',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copied' : 'Export'}
        </button>
      </div>

      <div style={{ color: '#94a3b8', marginBottom: '8px' }}>
        Calibrating: <strong>{activeComp.name}</strong>
      </div>

      <select
        value={currentPin ? currentPin.id : ''}
        onChange={(e) => setActivePinId(e.target.value)}
        style={{
          width: '100%',
          background: '#1e293b',
          border: '1px solid #334155',
          color: '#f8fafc',
          padding: '4px 6px',
          borderRadius: '4px',
          fontSize: '11px',
          marginBottom: '8px'
        }}
      >
        {catalogMeta.pins.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name} ({p.type})
          </option>
        ))}
      </select>

      {currentPin && (
        <div style={{ background: '#0f172a', padding: '6px 8px', borderRadius: '4px', fontFamily: 'monospace' }}>
          <div>X Local: {currentPin.pos[0].toFixed(3)}</div>
          <div>Y Local: {currentPin.pos[1].toFixed(3)}</div>
          <div>Z Local: {currentPin.pos[2].toFixed(3)}</div>
        </div>
      )}
    </div>
  );
}
