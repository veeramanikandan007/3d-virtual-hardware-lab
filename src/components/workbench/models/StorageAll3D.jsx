import React from 'react';
import { Pin } from '../Pin';

export function StorageAll3D({ instanceId, selected, onClick, pins, type }) {
  // MicroSD Card SPI Adapter Module
  if (type === 'microsd-module') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.34, 0.08, 0.28]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Blue PCB */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.3, 0.02, 0.24]} />
          <meshStandardMaterial color="#0284c7" roughness={0.3} />
        </mesh>
        {/* Metal Push-Push MicroSD Socket Housing */}
        <mesh position={[-0.04, 0.032, 0]} castShadow>
          <boxGeometry args={[0.18, 0.018, 0.16]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.95} />
        </mesh>
        {/* LVC125A Level Shifter IC */}
        <mesh position={[0.08, 0.028, 0]} castShadow>
          <boxGeometry args={[0.06, 0.012, 0.06]} />
          <meshStandardMaterial color="#09090b" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // SPI Flash / EEPROM / FRAM Breakout Module
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.03, 0]}>
          <boxGeometry args={[0.26, 0.06, 0.2]} />
          <meshBasicMaterial color="#38bdf8" wireframe />
        </mesh>
      )}
      {/* Blue / Purple PCB */}
      <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.22, 0.02, 0.16]} />
        <meshStandardMaterial color="#0369a1" roughness={0.35} />
      </mesh>
      {/* 8-Pin SOIC Memory IC */}
      <mesh position={[0, 0.028, 0]} castShadow>
        <boxGeometry args={[0.06, 0.012, 0.05]} />
        <meshStandardMaterial color="#18181b" />
      </mesh>
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
