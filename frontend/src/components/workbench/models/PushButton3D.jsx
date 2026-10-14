import React from 'react';
import { Pin } from '../Pin';

export function PushButton3D({ instanceId, selected, onClick, pins }) {
  return (
    <group onClick={onClick}>
      {/* Selection Box */}
      {selected && (
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[0.3, 0.12, 0.3]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}

      {/* Black Plastic Base Housing */}
      <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.22, 0.025, 0.22]} />
        <meshStandardMaterial color="#18181b" roughness={0.5} />
      </mesh>

      {/* Silver Metallic Stamped Cover Plate with Corner Prongs */}
      <mesh position={[0, 0.035, 0]} castShadow>
        <boxGeometry args={[0.23, 0.008, 0.23]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.95} roughness={0.15} />
      </mesh>
      {/* Center Bevel Opening for button */}
      <mesh position={[0, 0.039, 0]}>
        <cylinderGeometry args={[0.075, 0.075, 0.005, 24]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.8} />
      </mesh>

      {/* Raised Round Black Tactile Plunger Button */}
      <mesh position={[0, 0.056, 0]} castShadow>
        <cylinderGeometry args={[0.055, 0.055, 0.035, 24]} />
        <meshStandardMaterial color="#111827" roughness={0.3} />
      </mesh>

      {/* 4 Corner Curved/Bent Metal Legs */}
      {[
        [-0.12, 0.015, -0.12],
        [-0.12, 0.015, 0.12],
        [0.12, 0.015, -0.12],
        [0.12, 0.015, 0.12]
      ].map((pos, idx) => (
        <group key={idx} position={pos}>
          {/* Outward Tab */}
          <mesh position={[pos[0] > 0 ? 0.02 : -0.02, 0, 0]}>
            <boxGeometry args={[0.04, 0.008, 0.02]} />
            <meshStandardMaterial color="#d1d5db" metalness={0.9} />
          </mesh>
          {/* Downward Leg */}
          <mesh position={[pos[0] > 0 ? 0.04 : -0.04, -0.025, 0]}>
            <boxGeometry args={[0.008, 0.05, 0.02]} />
            <meshStandardMaterial color="#d1d5db" metalness={0.9} />
          </mesh>
        </group>
      ))}

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
