import React from 'react';
import { Pin } from '../Pin';

export function Buzzer3D({ instanceId, selected, onClick, pins }) {
  return (
    <group onClick={onClick}>
      {/* Selection Box */}
      {selected && (
        <mesh position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.13, 0.13, 0.12, 24]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}

      {/* Main Matte Black Cylindrical Plastic Body */}
      <mesh position={[0, 0.05, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.11, 0.11, 0.09, 32]} />
        <meshStandardMaterial color="#18181b" roughness={0.4} />
      </mesh>

      {/* Top Center Sound Port Hole */}
      <mesh position={[0, 0.096, 0]}>
        <cylinderGeometry args={[0.022, 0.022, 0.005, 20]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* White Circle Polarity Sticker */}
      <mesh position={[0.045, 0.096, 0]}>
        <cylinderGeometry args={[0.018, 0.018, 0.002, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      {/* Black Plus (+) Symbol on Sticker */}
      <mesh position={[0.045, 0.098, 0]}>
        <boxGeometry args={[0.02, 0.001, 0.005]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      <mesh position={[0.045, 0.098, 0]}>
        <boxGeometry args={[0.005, 0.001, 0.02]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* 2 Bottom Metal Wire Leads */}
      <mesh position={[-0.04, 0.002, 0]} castShadow>
        <cylinderGeometry args={[0.004, 0.004, 0.03, 8]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.9} />
      </mesh>
      <mesh position={[0.04, -0.005, 0]} castShadow>
        <cylinderGeometry args={[0.004, 0.004, 0.045, 8]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.9} />
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
