import React from 'react';
import { Pin } from '../Pin';

export function DisplaysAll3D({ instanceId, selected, onClick, pins, type }) {
  // 16x2 or 20x4 Alphanumeric LCD Display
  if (type === 'lcd-1602' || type === 'lcd-2004') {
    const is2004 = type === 'lcd-2004';
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[1.05, 0.1, is2004 ? 0.65 : 0.45]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Dark Green PCB */}
        <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.0, 0.025, is2004 ? 0.6 : 0.4]} />
          <meshStandardMaterial color="#166534" roughness={0.3} />
        </mesh>
        {/* Metal Screen Bezel Frame */}
        <mesh position={[0, 0.045, 0]} castShadow>
          <boxGeometry args={[0.88, 0.025, is2004 ? 0.48 : 0.28]} />
          <meshStandardMaterial color="#1e293b" roughness={0.4} metalness={0.8} />
        </mesh>
        {/* Glowing Green LCD Glass Screen */}
        <mesh position={[0, 0.058, 0]}>
          <boxGeometry args={[0.8, 0.005, is2004 ? 0.4 : 0.2]} />
          <meshStandardMaterial color="#84cc16" emissive="#65a30d" emissiveIntensity={0.6} roughness={0.1} />
        </mesh>
        {/* 16-Pin Header along top edge */}
        <mesh position={[-0.32, 0.045, is2004 ? -0.26 : -0.16]}>
          <boxGeometry args={[0.3, 0.025, 0.03]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // 4-Digit 7-Segment Display Module
  if (type === '7seg-4digit') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[0.62, 0.1, 0.28]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Black Plastic Module Housing */}
        <mesh position={[0, 0.04, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.56, 0.06, 0.22]} />
          <meshStandardMaterial color="#18181b" roughness={0.5} />
        </mesh>
        {/* Dark Red Transparent Display Face */}
        <mesh position={[0, 0.071, 0]}>
          <boxGeometry args={[0.54, 0.005, 0.2]} />
          <meshPhysicalMaterial color="#991b1b" transmission={0.7} transparent roughness={0.1} />
        </mesh>
        {/* 4 Glowing Red Digits ("8.8.8.8.") */}
        {[-0.18, -0.06, 0.06, 0.18].map((x, idx) => (
          <mesh key={idx} position={[x, 0.072, 0]}>
            <boxGeometry args={[0.07, 0.002, 0.14]} />
            <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={1.5} />
          </mesh>
        ))}
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // 8x8 LED Matrix Display
  if (type === 'led-matrix-8x8') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[0.46, 0.1, 0.46]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Black Square Module Shell */}
        <mesh position={[0, 0.04, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.4, 0.06, 0.4]} />
          <meshStandardMaterial color="#111827" roughness={0.4} />
        </mesh>
        {/* 64 Round Red LED Dot Lenses */}
        {Array.from({ length: 8 }).map((_, r) =>
          Array.from({ length: 8 }).map((_, c) => (
            <mesh key={`${r}-${c}`} position={[-0.155 + c * 0.044, 0.071, -0.155 + r * 0.044]}>
              <cylinderGeometry args={[0.015, 0.015, 0.005, 12]} />
              <meshStandardMaterial color="#ef4444" emissive="#dc2626" emissiveIntensity={0.8} />
            </mesh>
          ))
        )}
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // TFT Display or E-Paper
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[0.62, 0.08, 0.85]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}
      <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.56, 0.025, 0.78]} />
        <meshStandardMaterial color="#0284c7" roughness={0.3} />
      </mesh>
      {/* High-Res Screen Area */}
      <mesh position={[0, 0.038, 0]} castShadow>
        <boxGeometry args={[0.48, 0.015, 0.68]} />
        <meshStandardMaterial color="#09090b" roughness={0.1} metalness={0.9} />
      </mesh>
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
