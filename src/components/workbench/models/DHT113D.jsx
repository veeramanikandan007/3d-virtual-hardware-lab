import React from 'react';
import { Pin } from '../Pin';

export function DHT113D({ instanceId, selected, onClick, pins }) {
  return (
    <group onClick={onClick}>
      {/* Selection Box */}
      {selected && (
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[0.36, 0.18, 0.32]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}

      {/* Blue PCB Substrate Base */}
      <mesh position={[0, 0.02, 0.04]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 0.02, 0.12]} />
        <meshStandardMaterial color="#0f2b5c" roughness={0.3} />
      </mesh>

      {/* Bright Sky-Blue Perforated Plastic Housing */}
      <mesh position={[0, 0.09, -0.04]} castShadow>
        <boxGeometry args={[0.26, 0.12, 0.22]} />
        <meshStandardMaterial color="#38bdf8" roughness={0.3} />
      </mesh>

      {/* 4x4 Array of Square Ventilation Vents on Front/Top */}
      {[-0.08, -0.025, 0.025, 0.08].map((x, xi) =>
        [-0.07, -0.02, 0.02, 0.07].map((z, zi) => (
          <mesh key={`${xi}-${zi}`} position={[x, 0.151, -0.04 + z]}>
            <boxGeometry args={[0.035, 0.002, 0.035]} />
            <meshBasicMaterial color="#0369a1" />
          </mesh>
        ))
      )}

      {/* 4 Straight Metal Pins at bottom */}
      <mesh position={[0, 0.015, 0.1]}>
        <boxGeometry args={[0.2, 0.02, 0.03]} />
        <meshStandardMaterial color="#111827" />
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
