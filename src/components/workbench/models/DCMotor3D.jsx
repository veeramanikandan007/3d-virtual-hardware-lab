import React from 'react';
import { Pin } from '../Pin';

export function DCMotor3D({ instanceId, selected, onClick, pins }) {
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[0.5, 0.2, 0.3]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}

      {/* Main Steel Motor Can Body (horizontal cylinder) */}
      <group position={[0, 0.08, 0]} rotation={[0, 0, Math.PI / 2]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.09, 0.09, 0.24, 32]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Side Ventilation Slots */}
        <mesh position={[0.085, 0.02, 0]}>
          <boxGeometry args={[0.01, 0.08, 0.03]} />
          <meshBasicMaterial color="#1e293b" />
        </mesh>
        <mesh position={[-0.085, 0.02, 0]}>
          <boxGeometry args={[0.01, 0.08, 0.03]} />
          <meshBasicMaterial color="#1e293b" />
        </mesh>

        {/* Front Brass Bearing Collar */}
        <mesh position={[0, 0.13, 0]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.02, 20]} />
          <meshStandardMaterial color="#ca8a04" metalness={0.9} roughness={0.3} />
        </mesh>

        {/* Output Steel Drive Shaft */}
        <mesh position={[0, 0.18, 0]} castShadow>
          <cylinderGeometry args={[0.01, 0.01, 0.1, 16]} />
          <meshStandardMaterial color="#f1f5f9" metalness={0.95} roughness={0.1} />
        </mesh>

        {/* Rear Black Plastic Endcap */}
        <mesh position={[0, -0.125, 0]} castShadow>
          <cylinderGeometry args={[0.088, 0.088, 0.015, 32]} />
          <meshStandardMaterial color="#18181b" roughness={0.5} />
        </mesh>

        {/* Two Brass Solder Terminals */}
        <mesh position={[0.04, -0.145, 0]}>
          <boxGeometry args={[0.012, 0.025, 0.018]} />
          <meshStandardMaterial color="#eab308" metalness={0.9} />
        </mesh>
        <mesh position={[-0.04, -0.145, 0]}>
          <boxGeometry args={[0.012, 0.025, 0.018]} />
          <meshStandardMaterial color="#eab308" metalness={0.9} />
        </mesh>
      </group>

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
