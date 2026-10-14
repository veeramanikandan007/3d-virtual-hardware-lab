import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useWorkbench } from '../../context/WorkbenchContext';

export function Wire({ wireId, start, end, color = '#ef4444', selected }) {
  const { setSelectedWireId, removeWire } = useWorkbench();

  // Generate curved quadratic bezier path with realistic droop effect
  const curve = useMemo(() => {
    const vStart = new THREE.Vector3(...start);
    const vEnd = new THREE.Vector3(...end);

    const mid = new THREE.Vector3().addVectors(vStart, vEnd).multiplyScalar(0.5);
    const dist = vStart.distanceTo(vEnd);

    // Droop / curve upwards or downwards based on distance
    mid.y += Math.max(0.1, dist * 0.4);

    return new THREE.QuadraticBezierCurve3(vStart, mid, vEnd);
  }, [start, end]);

  const geometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 32, 0.008, 8, false);
  }, [curve]);

  const handleClick = (e) => {
    e.stopPropagation();
    if (wireId) {
      setSelectedWireId(wireId);
    }
  };

  const handleContextMenu = (e) => {
    e.stopPropagation();
    if (wireId) {
      removeWire(wireId);
    }
  };

  return (
    <group>
      {/* Wire Tube Mesh */}
      <mesh
        geometry={geometry}
        onClick={handleClick}
        onContextMenu={handleContextMenu}
      >
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.1}
          emissive={selected ? color : '#000000'}
          emissiveIntensity={selected ? 0.6 : 0}
        />
      </mesh>

      {/* Wire Endpoint Connectors (Pins Caps) */}
      <mesh position={start}>
        <sphereGeometry args={[0.012, 12, 12]} />
        <meshStandardMaterial color="#1f2937" metalness={0.8} />
      </mesh>
      <mesh position={end}>
        <sphereGeometry args={[0.012, 12, 12]} />
        <meshStandardMaterial color="#1f2937" metalness={0.8} />
      </mesh>
    </group>
  );
}
