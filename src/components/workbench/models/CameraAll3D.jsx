import React from 'react';
import { Pin } from '../Pin';

export function CameraAll3D({ instanceId, selected, onClick, pins, type }) {
  // ESP32-CAM Development Board with OV2640 Lens
  if (type === 'esp32-cam') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[0.34, 0.1, 0.46]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Black PCB */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.3, 0.02, 0.42]} />
          <meshStandardMaterial color="#18181b" roughness={0.4} />
        </mesh>
        {/* Silver ESP32-S Metal RF Shield */}
        <mesh position={[0, 0.035, -0.08]} castShadow>
          <boxGeometry args={[0.22, 0.02, 0.2]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.9} />
        </mesh>
        {/* Onboard High-Brightness Flash SMD LED */}
        <mesh position={[-0.08, 0.03, 0.1]}>
          <boxGeometry args={[0.03, 0.015, 0.03]} />
          <meshStandardMaterial color="#fef08a" emissive="#fef08a" emissiveIntensity={0.6} />
        </mesh>
        {/* Camera Sensor Mount & Cylindrical Optical Lens */}
        <group position={[0, 0.045, 0.1]}>
          <mesh castShadow>
            <boxGeometry args={[0.1, 0.03, 0.1]} />
            <meshStandardMaterial color="#09090b" />
          </mesh>
          <mesh position={[0, 0.02, 0]} castShadow>
            <cylinderGeometry args={[0.035, 0.035, 0.03, 16]} />
            <meshStandardMaterial color="#1e293b" />
          </mesh>
          <mesh position={[0, 0.036, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.002, 16]} />
            <meshStandardMaterial color="#0284c7" roughness={0.1} />
          </mesh>
        </group>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Raspberry Pi Camera Module / OV7670
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.04, 0]}>
          <boxGeometry args={[0.32, 0.09, 0.32]} />
          <meshBasicMaterial color="#38bdf8" wireframe />
        </mesh>
      )}
      {/* Green PCB */}
      <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.28, 0.02, 0.28]} />
        <meshStandardMaterial color="#15803d" roughness={0.35} />
      </mesh>
      {/* Square Camera Housing & Dark Glass Lens */}
      <mesh position={[0, 0.035, 0]} castShadow>
        <boxGeometry args={[0.12, 0.03, 0.12]} />
        <meshStandardMaterial color="#18181b" />
      </mesh>
      <mesh position={[0, 0.052, 0]} castShadow>
        <cylinderGeometry args={[0.035, 0.035, 0.015, 16]} />
        <meshStandardMaterial color="#0369a1" roughness={0.1} />
      </mesh>
      {/* White FFC Cable Connector Clip */}
      <mesh position={[0, 0.025, 0.11]}>
        <boxGeometry args={[0.18, 0.015, 0.03]} />
        <meshStandardMaterial color="#f8fafc" />
      </mesh>
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
