import React from 'react';
import { Pin } from '../Pin';

export function ProtectionAll3D({ instanceId, selected, onClick, pins, type }) {
  // PTC Resettable Fuse (Polymeric Positive Temperature Coefficient - Yellow Disc)
  if (type === 'fuse-ptc') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[0.16, 0.12, 0.16]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Yellow Polymer Disc */}
        <mesh position={[0, 0.05, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.045, 0.045, 0.015, 16]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color="#eab308" roughness={0.5} />
        </mesh>
        {/* Radial wire leads */}
        <mesh position={[-0.02, 0.015, 0]}>
          <cylinderGeometry args={[0.003, 0.003, 0.04, 8]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.95} />
        </mesh>
        <mesh position={[0.02, 0.015, 0]}>
          <cylinderGeometry args={[0.003, 0.003, 0.04, 8]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.95} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // MOV Varistor (Metal Oxide Varistor - Blue Disc)
  if (type === 'varistor-mov') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.06, 0]}>
            <boxGeometry args={[0.18, 0.14, 0.18]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Blue Epoxy Encapsulated Disc */}
        <mesh position={[0, 0.06, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.055, 0.055, 0.02, 16]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color="#0284c7" roughness={0.4} />
        </mesh>
        {/* Radial Leads */}
        <mesh position={[-0.025, 0.018, 0]}>
          <cylinderGeometry args={[0.003, 0.003, 0.045, 8]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.95} />
        </mesh>
        <mesh position={[0.025, 0.018, 0]}>
          <cylinderGeometry args={[0.003, 0.003, 0.045, 8]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.95} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Battery Protection BMS Board
  if (type === 'bms-protection') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.03, 0]}>
            <boxGeometry args={[0.3, 0.06, 0.18]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Green / Blue Mini BMS PCB */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.26, 0.02, 0.14]} />
          <meshStandardMaterial color="#15803d" roughness={0.35} />
        </mesh>
        {/* DW01 / 8205A Dual MOSFETs */}
        <mesh position={[0, 0.028, 0]} castShadow>
          <boxGeometry args={[0.05, 0.01, 0.04]} />
          <meshStandardMaterial color="#09090b" />
        </mesh>
        {/* Solder Pads */}
        {[-0.09, 0.09].map((x, i) => (
          <mesh key={i} position={[x, 0.026, 0]}>
            <boxGeometry args={[0.03, 0.002, 0.08]} />
            <meshStandardMaterial color="#ca8a04" metalness={0.9} />
          </mesh>
        ))}
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Thermal Fuse / Default Protection
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.03, 0]}>
          <boxGeometry args={[0.24, 0.06, 0.14]} />
          <meshBasicMaterial color="#38bdf8" wireframe />
        </mesh>
      )}
      {/* Silver Cylinder Casing with Colored Ceramic Cone */}
      <mesh position={[0, 0.02, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, 0.12, 16]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.95} />
      </mesh>
      <mesh position={[0.07, 0.02, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.02, 0.025, 16]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
