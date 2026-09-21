import React from 'react';
import { Pin } from '../Pin';

export function ConnectorsAll3D({ instanceId, selected, onClick, pins, type }) {
  // DC Barrel Jack 5.5mm x 2.1mm
  if (type === 'dc-barrel-jack') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.2, 0.08, 0.2]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Black Plastic Outer Housing */}
        <mesh position={[0, 0.035, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.16, 0.06, 0.16]} />
          <meshStandardMaterial color="#18181b" roughness={0.4} />
        </mesh>
        {/* Metal Barrel Receptacle Rim */}
        <mesh position={[-0.081, 0.035, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.025, 0.025, 0.02, 16]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.95} />
        </mesh>
        {/* Center Positive Pin */}
        <mesh position={[-0.075, 0.035, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.008, 0.008, 0.025, 12]} />
          <meshStandardMaterial color="#eab308" metalness={0.9} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Screw Terminal (2-Pin / 3-Pin Green Terminal Block)
  if (type === 'screw-terminal') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.2, 0.09, 0.2]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Green Polyamide Housing */}
        <mesh position={[0, 0.035, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.16, 0.07, 0.15]} />
          <meshStandardMaterial color="#16a34a" roughness={0.35} />
        </mesh>
        {/* Slotted Clamping Screws */}
        {[-0.04, 0.04].map((z, i) => (
          <mesh key={i} position={[0, 0.072, z]} castShadow>
            <cylinderGeometry args={[0.015, 0.015, 0.005, 12]} />
            <meshStandardMaterial color="#cbd5e1" metalness={0.9} />
          </mesh>
        ))}
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Alligator Clips
  if (type === 'alligator-clips') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.03, 0]}>
            <boxGeometry args={[0.3, 0.07, 0.18]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Red / Black Insulated Boot */}
        <mesh position={[-0.06, 0.02, 0]} castShadow>
          <cylinderGeometry args={[0.02, 0.025, 0.12, 12]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#dc2626" roughness={0.5} />
        </mesh>
        {/* Serrated Steel Jaws */}
        <mesh position={[0.06, 0.02, 0]} castShadow>
          <boxGeometry args={[0.1, 0.025, 0.03]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.95} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Default USB Receptacle (USB-A / USB-C / Micro USB)
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.03, 0]}>
          <boxGeometry args={[0.24, 0.07, 0.22]} />
          <meshBasicMaterial color="#38bdf8" wireframe />
        </mesh>
      )}
      {/* Stainless Steel Shielding Shell */}
      <mesh position={[0, 0.025, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.2, 0.04, 0.18]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.95} roughness={0.2} />
      </mesh>
      {/* Inner Contact Tongue */}
      <mesh position={[0, 0.025, 0]}>
        <boxGeometry args={[0.14, 0.01, 0.12]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
