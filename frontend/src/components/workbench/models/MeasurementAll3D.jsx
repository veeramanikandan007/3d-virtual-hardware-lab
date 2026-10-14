import React from 'react';
import { Pin } from '../Pin';

export function MeasurementAll3D({ instanceId, selected, onClick, pins, type }) {
  // Digital Multimeter (Handheld DMM with Yellow Protective Holster)
  if (type === 'digital-multimeter') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[0.34, 0.1, 0.54]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Yellow Rubber Shockproof Holster */}
        <mesh position={[0, 0.035, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.3, 0.07, 0.5]} />
          <meshStandardMaterial color="#eab308" roughness={0.6} />
        </mesh>
        {/* Grey LCD Display Window */}
        <mesh position={[0, 0.072, -0.12]}>
          <boxGeometry args={[0.2, 0.005, 0.1]} />
          <meshStandardMaterial color="#94a3b8" roughness={0.2} />
        </mesh>
        {/* Central Circular Rotary Range Switch */}
        <mesh position={[0, 0.075, 0.05]} castShadow>
          <cylinderGeometry args={[0.065, 0.07, 0.02, 24]} />
          <meshStandardMaterial color="#18181b" roughness={0.4} />
        </mesh>
        {/* 10A, COM, V-Ohm-mA Banana Sockets */}
        {[-0.08, 0, 0.08].map((x, i) => (
          <mesh key={i} position={[x, 0.072, 0.19]} castShadow>
            <cylinderGeometry args={[0.015, 0.015, 0.01, 12]} />
            <meshStandardMaterial color={i === 1 ? '#09090b' : '#dc2626'} />
          </mesh>
        ))}
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Bench Power Supply / Laboratory Instrument
  if (type === 'bench-power-supply') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.1, 0]}>
            <boxGeometry args={[0.54, 0.22, 0.54]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Metal Enclosure Cabinet */}
        <mesh position={[0, 0.09, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.48, 0.18, 0.48]} />
          <meshStandardMaterial color="#f1f5f9" roughness={0.3} metalness={0.2} />
        </mesh>
        {/* Front Panel Bezel */}
        <mesh position={[0, 0.09, 0.242]}>
          <boxGeometry args={[0.46, 0.16, 0.01]} />
          <meshStandardMaterial color="#334155" />
        </mesh>
        {/* Dual 7-Segment Digital Readouts (Voltage & Current) */}
        <mesh position={[-0.1, 0.12, 0.25]}>
          <boxGeometry args={[0.16, 0.05, 0.01]} />
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0.1, 0.12, 0.25]}>
          <boxGeometry args={[0.16, 0.05, 0.01]} />
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.6} />
        </mesh>
        {/* Banana Binding Posts (+ Red, - Black, GND Green) */}
        {[-0.1, 0, 0.1].map((x, idx) => {
          const c = idx === 0 ? '#ef4444' : idx === 1 ? '#18181b' : '#22c55e';
          return (
            <mesh key={idx} position={[x, 0.045, 0.255]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.018, 0.018, 0.02, 16]} />
              <meshStandardMaterial color={c} />
            </mesh>
          );
        })}
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Mini Voltmeter / Ammeter Panel Module (0.36" LED)
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.03, 0]}>
          <boxGeometry args={[0.3, 0.07, 0.2]} />
          <meshBasicMaterial color="#38bdf8" wireframe />
        </mesh>
      )}
      {/* Black Plastic Bezel */}
      <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.26, 0.035, 0.16]} />
        <meshStandardMaterial color="#0f172a" roughness={0.5} />
      </mesh>
      {/* 3-Digit Red LED Segment Display */}
      <mesh position={[0, 0.038, 0]}>
        <boxGeometry args={[0.22, 0.005, 0.12]} />
        <meshStandardMaterial color="#dc2626" emissive="#dc2626" emissiveIntensity={0.5} />
      </mesh>
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
