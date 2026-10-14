import React from 'react';
import { Pin } from '../Pin';

export function LED3D({ instanceId, selected, onClick, pins }) {
  return (
    <group onClick={onClick}>
      {/* Selection Ring */}
      {selected && (
        <mesh position={[0, 0.08, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.16, 20]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}

      {/* Red Transparent Dome Lens (Upper Hemispherical Top) */}
      <mesh position={[0, 0.12, 0]} castShadow>
        <sphereGeometry args={[0.045, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial
          color="#ef4444"
          transmission={0.8}
          opacity={0.95}
          transparent
          roughness={0.05}
          ior={1.52}
        />
      </mesh>

      {/* Red Transparent Cylinder Body */}
      <mesh position={[0, 0.08, 0]} castShadow>
        <cylinderGeometry args={[0.045, 0.045, 0.08, 24]} />
        <meshPhysicalMaterial
          color="#ef4444"
          transmission={0.8}
          opacity={0.95}
          transparent
          roughness={0.05}
          ior={1.52}
        />
      </mesh>

      {/* Bottom Flange Rim Ring with Flat Cathode Side */}
      <mesh position={[0, 0.038, 0]} castShadow>
        <cylinderGeometry args={[0.052, 0.052, 0.01, 24]} />
        <meshPhysicalMaterial
          color="#dc2626"
          transmission={0.6}
          transparent
          roughness={0.1}
        />
      </mesh>

      {/* Internal Reflective Leadframe Cup (Anvil & Post) */}
      <mesh position={[-0.012, 0.08, 0]}>
        <boxGeometry args={[0.015, 0.03, 0.01]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.95} roughness={0.1} />
      </mesh>
      <mesh position={[0.012, 0.08, 0]}>
        <boxGeometry args={[0.008, 0.03, 0.008]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.95} roughness={0.1} />
      </mesh>

      {/* Internal Glowing Semiconductor Die */}
      <mesh position={[0, 0.088, 0]}>
        <sphereGeometry args={[0.014, 16, 16]} />
        <meshStandardMaterial
          color="#ff0000"
          emissive="#ff1111"
          emissiveIntensity={2.5}
        />
      </mesh>
      <pointLight position={[0, 0.09, 0]} color="#ef4444" intensity={0.6} distance={0.35} />

      {/* Two Silver Lead Legs (Long Anode on Left, Short Cathode on Right) */}
      <mesh position={[-0.02, 0.01, 0]} castShadow>
        <cylinderGeometry args={[0.003, 0.003, 0.05, 8]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.95} roughness={0.15} />
      </mesh>
      <mesh position={[0.02, 0.018, 0]} castShadow>
        <cylinderGeometry args={[0.003, 0.003, 0.035, 8]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.95} roughness={0.15} />
      </mesh>

      {/* Pins */}
      {pins &&
        pins.map((pin) => (
          <Pin
            key={pin.id}
            instanceId={instanceId}
            pinId={pin.id}
            name={pin.name}
            type={pin.type}
            position={pin.pos}
          />
        ))}
    </group>
  );
}
