import React from 'react';
import { Pin } from '../Pin';

export function PrototypingAll3D({ instanceId, selected, onClick, pins, type }) {
  // 400-Point Half Breadboard
  if (type === 'bb-400') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[0.92, 0.1, 0.62]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* ABS Off-White Body */}
        <mesh position={[0, 0.04, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.88, 0.08, 0.58]} />
          <meshStandardMaterial color="#f1f5f9" roughness={0.35} />
        </mesh>
        {/* Center Divider Groove */}
        <mesh position={[0, 0.081, 0]}>
          <boxGeometry args={[0.86, 0.005, 0.04]} />
          <meshStandardMaterial color="#cbd5e1" roughness={0.6} />
        </mesh>
        {/* Top/Bottom Power Bus Red/Blue Stripes */}
        <mesh position={[0, 0.081, -0.25]}>
          <boxGeometry args={[0.84, 0.002, 0.015]} />
          <meshBasicMaterial color="#ef4444" />
        </mesh>
        <mesh position={[0, 0.081, -0.22]}>
          <boxGeometry args={[0.84, 0.002, 0.015]} />
          <meshBasicMaterial color="#3b82f6" />
        </mesh>
        <mesh position={[0, 0.081, 0.22]}>
          <boxGeometry args={[0.84, 0.002, 0.015]} />
          <meshBasicMaterial color="#3b82f6" />
        </mesh>
        <mesh position={[0, 0.081, 0.25]}>
          <boxGeometry args={[0.84, 0.002, 0.015]} />
          <meshBasicMaterial color="#ef4444" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // 170-Point Mini Breadboard
  if (type === 'bb-170') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[0.5, 0.1, 0.4]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Mini Breadboard Housing (Bright White/Blue) */}
        <mesh position={[0, 0.04, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.46, 0.08, 0.36]} />
          <meshStandardMaterial color="#0284c7" roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.081, 0]}>
          <boxGeometry args={[0.44, 0.004, 0.03]} />
          <meshStandardMaterial color="#0369a1" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Perfboard / Stripboard (Phenolic paper copper / FR-4)
  if (type === 'perfboard' || type === 'prototype-pcb') {
    const isGreen = type === 'prototype-pcb';
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.03, 0]}>
            <boxGeometry args={[0.74, 0.06, 0.54]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Board base */}
        <mesh position={[0, 0.01, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.7, 0.02, 0.5]} />
          <meshStandardMaterial color={isGreen ? '#166534' : '#b45309'} roughness={0.4} />
        </mesh>
        {/* Copper Solder Donut Rings array */}
        <mesh position={[0, 0.021, 0]}>
          <boxGeometry args={[0.66, 0.002, 0.46]} />
          <meshStandardMaterial color="#eab308" metalness={0.8} roughness={0.3} wireframe />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Pin Headers (Male 40-pin breakable header strip)
  if (type === 'pin-headers') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.06, 0]}>
            <boxGeometry args={[0.74, 0.14, 0.1]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Black plastic housing bar */}
        <mesh position={[0, 0.025, 0]} castShadow>
          <boxGeometry args={[0.7, 0.025, 0.04]} />
          <meshStandardMaterial color="#18181b" roughness={0.3} />
        </mesh>
        {/* Gold square pin posts */}
        <mesh position={[0, 0.06, 0]} castShadow>
          <boxGeometry args={[0.66, 0.11, 0.015]} />
          <meshStandardMaterial color="#eab308" metalness={0.95} roughness={0.1} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // IC Socket (DIP-16/28 dual row socket)
  if (type === 'ic-socket') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.42, 0.08, 0.22]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Black DIP Socket body */}
        <mesh position={[0, 0.02, 0]} castShadow>
          <boxGeometry args={[0.38, 0.035, 0.18]} />
          <meshStandardMaterial color="#1e293b" roughness={0.4} />
        </mesh>
        {/* Center cutout */}
        <mesh position={[0, 0.025, 0]}>
          <boxGeometry args={[0.32, 0.03, 0.1]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>
        {/* Dual rows of wipe contacts */}
        <mesh position={[0, 0.04, -0.06]}>
          <boxGeometry args={[0.34, 0.01, 0.02]} />
          <meshStandardMaterial color="#ca8a04" metalness={0.9} />
        </mesh>
        <mesh position={[0, 0.04, 0.06]}>
          <boxGeometry args={[0.34, 0.01, 0.02]} />
          <meshStandardMaterial color="#ca8a04" metalness={0.9} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Jumper Wire Harness / Cables (Male-Male, Male-Female, Female-Female)
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.03, 0]}>
          <boxGeometry args={[0.44, 0.06, 0.18]} />
          <meshBasicMaterial color="#38bdf8" wireframe />
        </mesh>
      )}
      {/* 4 Colored Dupont wires in a ribbon bundle */}
      {[-0.045, -0.015, 0.015, 0.045].map((z, i) => {
        const colors = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b'];
        return (
          <group key={i} position={[0, 0.01, z]}>
            {/* Left connector housing */}
            <mesh position={[-0.15, 0.01, 0]} castShadow>
              <boxGeometry args={[0.08, 0.025, 0.025]} />
              <meshStandardMaterial color="#18181b" />
            </mesh>
            {/* Left pin/socket */}
            <mesh position={[-0.2, 0.01, 0]}>
              <boxGeometry args={[0.03, 0.01, 0.01]} />
              <meshStandardMaterial color="#d1d5db" metalness={0.95} />
            </mesh>
            {/* Flexible insulated wire */}
            <mesh position={[0, 0.015, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.008, 0.008, 0.22, 10]} />
              <meshStandardMaterial color={colors[i]} roughness={0.5} />
            </mesh>
            {/* Right connector housing */}
            <mesh position={[0.15, 0.01, 0]} castShadow>
              <boxGeometry args={[0.08, 0.025, 0.025]} />
              <meshStandardMaterial color="#18181b" />
            </mesh>
            {/* Right pin */}
            <mesh position={[0.2, 0.01, 0]}>
              <boxGeometry args={[0.03, 0.01, 0.01]} />
              <meshStandardMaterial color="#d1d5db" metalness={0.95} />
            </mesh>
          </group>
        );
      })}
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
