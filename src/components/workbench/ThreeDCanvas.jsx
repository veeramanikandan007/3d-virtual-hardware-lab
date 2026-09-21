import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { useWorkbench } from '../../context/WorkbenchContext';
import { PlacedComponentContainer } from './PlacedComponentContainer';
import { Wire } from './Wire';
import { ActiveWireDraft } from './ActiveWireDraft';
import { componentsData } from '../../data/components';

function SceneContent() {
  const {
    placedComponents,
    placedWires,
    selectedWireId,
    removeWire,
    isDraggingObject,
    selectedWireId: currentSelectedWire
  } = useWorkbench();

  // Resolve absolute 3D world position of a pin
  const getPinWorldPos = (instanceId, pinId) => {
    const comp = placedComponents.find((c) => c.instanceId === instanceId);
    if (!comp) return [0, 0, 0];

    const meta = componentsData.find((item) => item.id === comp.componentId);
    if (!meta) return comp.position;

    const pinMeta = meta.pins.find((p) => p.id === pinId);
    if (!pinMeta) return comp.position;

    const localVec = new THREE.Vector3(...pinMeta.pos);
    if (comp.rotation) {
      const euler = new THREE.Euler(...comp.rotation, 'XYZ');
      localVec.applyEuler(euler);
    }
    const posVec = new THREE.Vector3(...comp.position);

    return [posVec.x + localVec.x, posVec.y + localVec.y, posVec.z + localVec.z];
  };

  // Keyboard shortcut listener to delete selected wire
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === 'Delete' || e.key === 'Backspace') && currentSelectedWire) {
        removeWire(currentSelectedWire);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSelectedWire, removeWire]);

  return (
    <>
      {/* Studio Lighting System */}
      <ambientLight intensity={0.9} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={2.0}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      {/* Subtle Blue Rim Fill Light */}
      <directionalLight position={[-6, 5, -5]} intensity={0.8} color="#38bdf8" />
      <hemisphereLight intensity={0.5} groundColor="#0f172a" />

      {/* Dark Studio Laboratory Grid Floor */}
      <Grid
        args={[12, 12]}
        cellSize={0.1}
        cellThickness={1}
        cellColor="#1e293b"
        sectionSize={0.5}
        sectionThickness={1.5}
        sectionColor="#334155"
        fadeDistance={14}
      />
      <ContactShadows position={[0, 0, 0]} opacity={0.65} scale={12} blur={1.8} far={0.8} />

      {/* Render Placed Hardware Components */}
      {placedComponents.map((comp) => (
        <PlacedComponentContainer key={comp.instanceId} componentData={comp} />
      ))}

      {/* Render Placed Jumper Wires */}
      {placedWires.map((wire) => {
        const startPos = getPinWorldPos(wire.from.instanceId, wire.from.pinId);
        const endPos = getPinWorldPos(wire.to.instanceId, wire.to.pinId);
        return (
          <Wire
            key={wire.wireId}
            wireId={wire.wireId}
            start={startPos}
            end={endPos}
            color={wire.color}
            selected={selectedWireId === wire.wireId}
          />
        );
      })}

      {/* Dynamic Wire Creation Tracker */}
      <ActiveWireDraft />

      {/* Orbit Controls */}
      <OrbitControls
        makeDefault
        enabled={!isDraggingObject}
        maxPolarAngle={Math.PI / 2 - 0.05}
        minDistance={0.3}
        maxDistance={7}
      />
    </>
  );
}

export function ThreeDCanvas() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#090d16', position: 'relative' }}>
      <Canvas camera={{ position: [0.8, 1.2, 1.4], fov: 45 }} shadows>
        <SceneContent />
      </Canvas>
    </div>
  );
}
