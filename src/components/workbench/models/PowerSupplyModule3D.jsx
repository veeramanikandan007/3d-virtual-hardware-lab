import React from 'react';
import { Pin } from '../Pin';

export function PowerSupplyModule3D({ instanceId, selected, onClick, pins }) {
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.06, 0]}>
          <boxGeometry args={[0.68, 0.14, 0.42]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}

      {/* Main Green PCB */}
      <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.64, 0.025, 0.38]} />
        <meshStandardMaterial color="#15803d" roughness={0.35} />
      </mesh>

      {/* Black DC Barrel Power Input Jack (Left) */}
      <mesh position={[-0.2, 0.06, 0.04]} castShadow>
        <boxGeometry args={[0.18, 0.06, 0.16]} />
        <meshStandardMaterial color="#18181b" roughness={0.5} />
      </mesh>
      {/* DC Jack Center Hole */}
      <mesh position={[-0.291, 0.06, 0.04]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.035, 0.035, 0.005, 16]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* Silver USB Type-A Female Port (Right) */}
      <mesh position={[0.2, 0.06, 0.04]} castShadow>
        <boxGeometry args={[0.18, 0.055, 0.18]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.95} roughness={0.15} />
      </mesh>
      {/* USB Port Front Opening */}
      <mesh position={[0.291, 0.06, 0.04]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.04, 0.005, 0.12]} />
        <meshBasicMaterial color="#1e293b" />
      </mesh>

      {/* 2 Cylindrical Black Electrolytic Filter Capacitors */}
      <mesh position={[-0.05, 0.065, -0.05]} castShadow>
        <cylinderGeometry args={[0.035, 0.035, 0.065, 20]} />
        <meshStandardMaterial color="#18181b" roughness={0.3} />
      </mesh>
      <mesh position={[0.05, 0.065, -0.05]} castShadow>
        <cylinderGeometry args={[0.035, 0.035, 0.065, 20]} />
        <meshStandardMaterial color="#18181b" roughness={0.3} />
      </mesh>

      {/* Pushbutton Power Switch with White Cap */}
      <mesh position={[-0.05, 0.045, 0.1]}>
        <boxGeometry args={[0.06, 0.02, 0.06]} />
        <meshStandardMaterial color="#9ca3af" metalness={0.8} />
      </mesh>
      <mesh position={[-0.05, 0.06, 0.1]}>
        <cylinderGeometry args={[0.02, 0.02, 0.015, 16]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.3} />
      </mesh>

      {/* Green Power Indicator LED */}
      <mesh position={[0.05, 0.04, 0.1]}>
        <boxGeometry args={[0.025, 0.015, 0.025]} />
        <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={1.2} />
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
