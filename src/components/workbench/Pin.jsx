import React, { useState } from 'react';
import { Html } from '@react-three/drei';
import { useWorkbench } from '../../context/WorkbenchContext';

export function Pin({ instanceId, pinId, name, type, position }) {
  const { handlePinClick, activePinSource, setHoveredPin } = useWorkbench();
  const [hovered, setHovered] = useState(false);

  const isActiveSource =
    activePinSource &&
    activePinSource.instanceId === instanceId &&
    activePinSource.pinId === pinId;

  const getPinColor = () => {
    if (isActiveSource) return '#3b82f6';
    if (hovered) return '#f59e0b';
    if (type === 'power') return '#ef4444';
    if (type === 'ground') return '#3b82f6';
    if (type === 'analog') return '#10b981';
    return '#fbbf24';
  };

  const handlePointerOver = (e) => {
    e.stopPropagation();
    setHovered(true);
    setHoveredPin({ instanceId, pinId, name, type });
  };

  const handlePointerOut = (e) => {
    e.stopPropagation();
    setHovered(false);
    setHoveredPin(null);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    handlePinClick({
      instanceId,
      pinId,
      name,
      type,
      localPos: position
    });
  };

  return (
    <group position={position}>
      {/* Interactive Pin Mesh */}
      <mesh
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <cylinderGeometry args={[0.012, 0.012, 0.04, 12]} />
        <meshStandardMaterial color={getPinColor()} metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Hover & Active Ring */}
      {(hovered || isActiveSource) && (
        <mesh position={[0, 0.025, 0]}>
          <ringGeometry args={[0.015, 0.025, 16]} />
          <meshBasicMaterial
            color={isActiveSource ? '#3b82f6' : '#f59e0b'}
            side={2}
          />
        </mesh>
      )}

      {/* HTML Tooltip on Hover */}
      {hovered && (
        <Html position={[0, 0.06, 0]} center pointerEvents="none">
          <div
            style={{
              background: '#0f172a',
              color: '#f8fafc',
              border: '1px solid #334155',
              padding: '3px 8px',
              borderRadius: '4px',
              fontSize: '11px',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              pointerEvents: 'none'
            }}
          >
            <strong>{name}</strong> <span style={{ color: '#94a3b8' }}>({type})</span>
          </div>
        </Html>
      )}
    </group>
  );
}
