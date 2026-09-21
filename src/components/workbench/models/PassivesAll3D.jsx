import React from 'react';
import { Pin } from '../Pin';

export function PassivesAll3D({ instanceId, selected, onClick, pins, type }) {
  // Electrolytic Radial Capacitor
  if (type === 'cap-electrolytic') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.08, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 0.18, 16]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Dark Blue / Black Aluminum Can Body */}
        <mesh position={[0, 0.07, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.06, 0.06, 0.12, 24]} />
          <meshStandardMaterial color="#1e3a8a" roughness={0.3} />
        </mesh>
        {/* Silver Scored Top Vent */}
        <mesh position={[0, 0.131, 0]}>
          <cylinderGeometry args={[0.058, 0.058, 0.002, 24]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.9} />
        </mesh>
        {/* White Negative (-) Polarity Stripe */}
        <mesh position={[-0.055, 0.07, 0]}>
          <boxGeometry args={[0.015, 0.118, 0.03]} />
          <meshBasicMaterial color="#f8fafc" />
        </mesh>
        {/* 2 Lead Legs */}
        <mesh position={[-0.02, 0.005, 0]} castShadow>
          <cylinderGeometry args={[0.003, 0.003, 0.04, 8]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.9} />
        </mesh>
        <mesh position={[0.02, 0.005, 0]} castShadow>
          <cylinderGeometry args={[0.003, 0.003, 0.04, 8]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.9} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Ceramic Disc Capacitor
  if (type === 'cap-ceramic') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.06, 0]}>
            <boxGeometry args={[0.15, 0.14, 0.08]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Orange / Tan Circular Disc */}
        <mesh position={[0, 0.07, 0]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.015, 24]} />
          <meshStandardMaterial color="#ea580c" roughness={0.5} />
        </mesh>
        {/* 2 Wire Leads */}
        <mesh position={[-0.015, 0.025, 0]} castShadow>
          <cylinderGeometry args={[0.003, 0.003, 0.06, 8]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.9} />
        </mesh>
        <mesh position={[0.015, 0.025, 0]} castShadow>
          <cylinderGeometry args={[0.003, 0.003, 0.06, 8]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.9} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // 1N4007 Diode
  if (type === 'diode-rectifier') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.3, 0.08, 0.08]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Black DO-41 Plastic Cylinder Body */}
        <mesh position={[0, 0.035, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.022, 0.022, 0.12, 20]} />
          <meshStandardMaterial color="#18181b" roughness={0.4} />
        </mesh>
        {/* Silver Cathode Ring Band */}
        <mesh position={[-0.04, 0.035, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.023, 0.023, 0.02, 20]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.9} />
        </mesh>
        {/* Leads */}
        <mesh position={[-0.1, 0.035, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.003, 0.003, 0.08, 8]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.9} />
        </mesh>
        <mesh position={[0.1, 0.035, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.003, 0.003, 0.08, 8]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.9} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Glass Cartridge Fuse
  if (type === 'fuse-glass') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.34, 0.08, 0.08]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Clear Glass Center Tube */}
        <mesh position={[0, 0.035, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, 0.14, 16]} />
          <meshPhysicalMaterial color="#ffffff" transmission={0.95} transparent roughness={0.05} />
        </mesh>
        {/* Nickel Plated Brass Endcaps */}
        <mesh position={[-0.07, 0.035, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.023, 0.023, 0.04, 16]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.95} />
        </mesh>
        <mesh position={[0.07, 0.035, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.023, 0.023, 0.04, 16]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.95} />
        </mesh>
        {/* Internal Thin Fusible Wire Filament */}
        <mesh position={[0, 0.035, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.0015, 0.0015, 0.12, 8]} />
          <meshBasicMaterial color="#ca8a04" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Inductor
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 0.1, 16]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}
      {/* Black Ferrite Core Bobbin Drum */}
      <mesh position={[0, 0.04, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.07, 0.07, 0.06, 20]} />
        <meshStandardMaterial color="#18181b" roughness={0.6} />
      </mesh>
      {/* Copper Wire Coiled Winding */}
      <mesh position={[0, 0.04, 0]}>
        <cylinderGeometry args={[0.072, 0.072, 0.035, 20]} />
        <meshStandardMaterial color="#b45309" metalness={0.9} roughness={0.3} />
      </mesh>
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
