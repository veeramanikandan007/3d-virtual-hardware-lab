import React, { useState } from 'react';
import { useWorkbench } from '../../context/WorkbenchContext';
import { COMPONENT_MANIFEST } from '../../data/componentManifest';
import { Trash2, Cpu, Zap, Code, RotateCw, Move, ShieldCheck, Ruler } from 'lucide-react';

export function DetailsPanel() {
  const {
    placedComponents,
    selectedComponentId,
    removeComponent,
    updateComponentPosition,
    rotateComponent,
    placedWires,
    getExportableDeliverable
  } = useWorkbench();

  const [showJson, setShowJson] = useState(false);

  const activeComponent = placedComponents.find((c) => c.instanceId === selectedComponentId);
  const manifestMeta = activeComponent
    ? COMPONENT_MANIFEST.find((item) => item.id === activeComponent.componentId)
    : null;

  if (!activeComponent || !manifestMeta) {
    return (
      <div style={{ padding: '20px', color: '#64748b', textAlign: 'center' }}>
        <Cpu size={36} style={{ marginBottom: '10px', opacity: 0.5 }} />
        <h4 style={{ margin: '0 0 6px 0', color: '#94a3b8' }}>No Component Selected</h4>
        <p style={{ fontSize: '12px', margin: 0 }}>
          Click or drag any 3D hardware component on the canvas to inspect real-world dimensions, GPIO pins & 3D position.
        </p>
      </div>
    );
  }

  const handlePosChange = (axis, val) => {
    const newPos = [...activeComponent.position];
    if (axis === 'x') newPos[0] = parseFloat(val);
    if (axis === 'y') newPos[1] = parseFloat(val);
    if (axis === 'z') newPos[2] = parseFloat(val);
    updateComponentPosition(activeComponent.instanceId, newPos);
  };

  return (
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px', color: '#e2e8f0' }}>
      {/* Header Info */}
      <div style={{ borderBottom: '1px solid #334155', pb: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '16px', color: '#f8fafc' }}>{activeComponent.name}</h3>
          <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
            <span style={{ fontSize: '10px', color: '#38bdf8', background: '#0284c722', padding: '2px 6px', borderRadius: '4px' }}>
              {manifestMeta.category}
            </span>
            <span style={{ fontSize: '10px', color: '#10b981', background: '#10b98122', padding: '2px 6px', borderRadius: '4px' }}>
              {manifestMeta.voltage || 'N/A'}
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            onClick={() => rotateComponent(activeComponent.instanceId)}
            title="Rotate 90°"
            style={{ background: '#334155', border: '1px solid #475569', color: '#fff', padding: '6px', borderRadius: '6px', cursor: 'pointer' }}
          >
            <RotateCw size={16} />
          </button>
          <button
            onClick={() => removeComponent(activeComponent.instanceId)}
            title="Delete Component"
            style={{ background: '#ef444422', border: '1px solid #ef444466', color: '#ef4444', padding: '6px', borderRadius: '6px', cursor: 'pointer' }}
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* Real-World CAD Dimensions Box */}
      <div style={{ background: '#0f172a', padding: '10px 12px', borderRadius: '8px', border: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Ruler size={16} color="#38bdf8" />
          <div>
            <div style={{ fontSize: '11px', color: '#94a3b8' }}>Real-World Dimensions</div>
            <div style={{ fontSize: '12px', fontWeight: '600', color: '#f8fafc' }}>
              {manifestMeta.dimensions.length} × {manifestMeta.dimensions.width} × {manifestMeta.dimensions.height} mm
            </div>
          </div>
        </div>
        <span style={{ fontSize: '10px', padding: '2px 6px', borderRadius: '4px', background: manifestMeta.accuracy === 'verified_cad' ? '#10b98122' : '#f59e0b22', color: manifestMeta.accuracy === 'verified_cad' ? '#10b981' : '#f59e0b' }}>
          {manifestMeta.accuracy === 'verified_cad' ? 'Verified CAD' : 'Informed Mesh'}
        </span>
      </div>

      {/* Drag Helper Box */}
      <div style={{ background: '#0284c715', border: '1px solid #0284c744', padding: '8px 10px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#38bdf8' }}>
        <Move size={14} />
        <span>Click & hold left-mouse on this object in 3D to slide it across the grid.</span>
      </div>

      <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>{manifestMeta.description}</p>

      {/* 3D Coordinate Controls */}
      <div style={{ background: '#0f172a', padding: '12px', borderRadius: '8px', border: '1px solid #1e293b' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#94a3b8' }}>3D Position Coordinates</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
          <div>
            <label style={{ fontSize: '10px', color: '#64748b' }}>X (m)</label>
            <input
              type="number"
              step="0.05"
              value={activeComponent.position[0]}
              onChange={(e) => handlePosChange('x', e.target.value)}
              style={{ width: '100%', background: '#1e293b', border: '1px solid #334155', color: '#fff', borderRadius: '4px', padding: '4px', fontSize: '11px' }}
            />
          </div>
          <div>
            <label style={{ fontSize: '10px', color: '#64748b' }}>Y (m)</label>
            <input
              type="number"
              step="0.01"
              value={activeComponent.position[1]}
              onChange={(e) => handlePosChange('y', e.target.value)}
              style={{ width: '100%', background: '#1e293b', border: '1px solid #334155', color: '#fff', borderRadius: '4px', padding: '4px', fontSize: '11px' }}
            />
          </div>
          <div>
            <label style={{ fontSize: '10px', color: '#64748b' }}>Z (m)</label>
            <input
              type="number"
              step="0.05"
              value={activeComponent.position[2]}
              onChange={(e) => handlePosChange('z', e.target.value)}
              style={{ width: '100%', background: '#1e293b', border: '1px solid #334155', color: '#fff', borderRadius: '4px', padding: '4px', fontSize: '11px' }}
            />
          </div>
        </div>
      </div>

      {/* GPIO Pins Spec Table */}
      <div style={{ background: '#0f172a', padding: '12px', borderRadius: '8px', border: '1px solid #1e293b' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Zap size={14} color="#f59e0b" /> Verified Pin Anchors ({manifestMeta.pins.length})
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '160px', overflowY: 'auto' }}>
          {manifestMeta.pins.map((pin) => {
            const connectedWire = placedWires.find(
              (w) =>
                (w.from.instanceId === activeComponent.instanceId && w.from.pinId === pin.id) ||
                (w.to.instanceId === activeComponent.instanceId && w.to.pinId === pin.id)
            );
            return (
              <div
                key={pin.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: '#1e293b',
                  padding: '6px 8px',
                  borderRadius: '4px',
                  fontSize: '11px'
                }}
              >
                <div>
                  <span style={{ fontWeight: '600' }}>{pin.name}</span>
                  <span style={{ color: '#64748b', marginLeft: '6px' }}>({pin.type})</span>
                </div>
                <span
                  style={{
                    fontSize: '10px',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    background: connectedWire ? '#10b98122' : '#64748b22',
                    color: connectedWire ? '#10b981' : '#64748b'
                  }}
                >
                  {connectedWire ? 'Wired' : 'Open'}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* State Payload JSON Export */}
      <div>
        <button
          onClick={() => setShowJson(!showJson)}
          style={{
            width: '100%',
            background: '#334155',
            border: 'none',
            color: '#f8fafc',
            padding: '8px',
            borderRadius: '6px',
            fontSize: '12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}
        >
          <Code size={14} /> {showJson ? 'Hide State Payload' : 'Export State Deliverable JSON'}
        </button>

        {showJson && (
          <pre
            style={{
              marginTop: '10px',
              background: '#090d16',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #1e293b',
              fontSize: '10px',
              color: '#38bdf8',
              maxHeight: '180px',
              overflowY: 'auto'
            }}
          >
            {JSON.stringify(getExportableDeliverable(), null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
