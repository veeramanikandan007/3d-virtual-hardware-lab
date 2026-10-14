import React from 'react';
import { Pin } from '../Pin';

export function IndustrialAll3D({ instanceId, selected, onClick, pins, type }) {
  // Inductive / Capacitive Proximity Sensor (Threaded M12/M18 Barrel LJ12A3)
  if (type === 'inductive-sensor' || type === 'capacitive-sensor') {
    const isCap = type === 'capacitive-sensor';
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[0.48, 0.1, 0.18]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Nickel-Plated Brass Threaded Cylinder Barrel */}
        <mesh position={[0, 0.04, 0]} rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.38, 20]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.3} />
        </mesh>
        {/* Hex Mounting Nuts */}
        {[-0.08, 0.08].map((x, i) => (
          <mesh key={i} position={[x, 0.04, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.058, 0.058, 0.02, 6]} />
            <meshStandardMaterial color="#94a3b8" metalness={0.95} />
          </mesh>
        ))}
        {/* Plastic Sensing Face Cap (Blue for inductive, Orange for capacitive) */}
        <mesh position={[0.2, 0.04, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.038, 0.038, 0.02, 20]} />
          <meshStandardMaterial color={isCap ? '#f97316' : '#0284c7'} roughness={0.3} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Industrial Pressure Sensor (G1/4 Stainless Steel Pressure Transducer)
  if (type === 'pressure-sensor') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.06, 0]}>
            <boxGeometry args={[0.22, 0.14, 0.22]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Stainless Steel Hex Base with Threaded Nipple */}
        <mesh position={[0, 0.025, 0]} castShadow>
          <cylinderGeometry args={[0.055, 0.055, 0.03, 6]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.95} />
        </mesh>
        <mesh position={[0, 0.005, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.015, 16]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.9} />
        </mesh>
        {/* Cylindrical Transducer Body */}
        <mesh position={[0, 0.06, 0]} castShadow>
          <cylinderGeometry args={[0.045, 0.045, 0.05, 20]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.9} />
        </mesh>
        {/* Packard/DIN Industrial Connector Head */}
        <mesh position={[0, 0.095, 0]} castShadow>
          <cylinderGeometry args={[0.038, 0.038, 0.025, 16]} />
          <meshStandardMaterial color="#18181b" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // RS232 / DB9 Serial Module
  if (type === 'rs232-module') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[0.42, 0.1, 0.36]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Blue PCB */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.38, 0.02, 0.32]} />
          <meshStandardMaterial color="#0284c7" roughness={0.3} />
        </mesh>
        {/* Trapezoidal Metal DB9 Female Serial Port */}
        <mesh position={[-0.1, 0.05, 0]} castShadow>
          <boxGeometry args={[0.14, 0.05, 0.22]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.95} />
        </mesh>
        {/* MAX3232 IC & Charge-Pump Capacitors */}
        <mesh position={[0.08, 0.028, 0]} castShadow>
          <boxGeometry args={[0.07, 0.012, 0.06]} />
          <meshStandardMaterial color="#09090b" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Industrial Relay / PLC I/O / DIN Rail Module
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.07, 0]}>
          <boxGeometry args={[0.34, 0.15, 0.38]} />
          <meshBasicMaterial color="#38bdf8" wireframe />
        </mesh>
      )}
      {/* DIN Rail Relay Base Socket (Black PBT) */}
      <mesh position={[0, 0.03, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.28, 0.05, 0.34]} />
        <meshStandardMaterial color="#1e293b" roughness={0.4} />
      </mesh>
      {/* Clear Polycarbonate Plug-In Relay Case with Internal Coil & Contacts */}
      <mesh position={[0, 0.085, 0]} castShadow>
        <boxGeometry args={[0.2, 0.06, 0.24]} />
        <meshPhysicalMaterial color="#38bdf8" transmission={0.7} roughness={0.2} transparent opacity={0.75} />
      </mesh>
      {/* Internal Copper Magnet Wire Coil */}
      <mesh position={[0, 0.085, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.025, 0.025, 0.1, 16]} />
        <meshStandardMaterial color="#d97706" metalness={0.7} />
      </mesh>
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
