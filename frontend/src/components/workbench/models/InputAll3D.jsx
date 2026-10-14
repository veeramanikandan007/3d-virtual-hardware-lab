import React from 'react';
import { Pin } from '../Pin';

export function InputAll3D({ instanceId, selected, onClick, pins, type }) {
  // Joystick Module
  if (type === 'joystick-module') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.09, 0]}>
            <boxGeometry args={[0.45, 0.22, 0.45]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Blue PCB */}
        <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.4, 0.025, 0.4]} />
          <meshStandardMaterial color="#0284c7" roughness={0.3} />
        </mesh>
        {/* Dual Axis Gimbal Potentiometer Box */}
        <mesh position={[0, 0.055, 0]} castShadow>
          <boxGeometry args={[0.22, 0.05, 0.22]} />
          <meshStandardMaterial color="#64748b" metalness={0.7} />
        </mesh>
        {/* Black Concave Thumbstick Rubber Cap */}
        <mesh position={[0, 0.12, 0]} castShadow>
          <sphereGeometry args={[0.07, 24, 16]} />
          <meshStandardMaterial color="#18181b" roughness={0.6} />
        </mesh>
        {/* 5-Pin Header */}
        <mesh position={[0, 0.03, 0.16]}>
          <boxGeometry args={[0.18, 0.02, 0.03]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Rotary Encoder
  if (type === 'rotary-encoder') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.08, 0]}>
            <boxGeometry args={[0.34, 0.22, 0.34]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Blue PCB */}
        <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.28, 0.02, 0.28]} />
          <meshStandardMaterial color="#0284c7" roughness={0.3} />
        </mesh>
        {/* Metallic Threaded Collar */}
        <mesh position={[0, 0.06, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.07, 0.05, 24]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.9} />
        </mesh>
        {/* Knurled Metal Shaft */}
        <mesh position={[0, 0.13, 0]} castShadow>
          <cylinderGeometry args={[0.035, 0.035, 0.09, 16]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.95} roughness={0.2} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // 4x4 Keypad
  if (type === 'keypad-4x4') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.03, 0]}>
            <boxGeometry args={[0.7, 0.08, 0.7]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Black Membrane Sheet */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.65, 0.01, 0.65]} />
          <meshStandardMaterial color="#09090b" roughness={0.6} />
        </mesh>
        {/* 16 Colored Buttons Grid */}
        {Array.from({ length: 4 }).map((_, r) =>
          Array.from({ length: 4 }).map((_, c) => (
            <mesh key={`${r}-${c}`} position={[-0.21 + c * 0.14, 0.025, -0.21 + r * 0.14]}>
              <boxGeometry args={[0.09, 0.015, 0.09]} />
              <meshStandardMaterial color={c === 3 ? '#dc2626' : '#2563eb'} roughness={0.3} />
            </mesh>
          ))
        )}
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Toggle Switch
  if (type === 'toggle-switch') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.08, 0]}>
            <boxGeometry args={[0.26, 0.22, 0.26]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Blue/Silver Rectangular Body */}
        <mesh position={[0, 0.04, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.18, 0.07, 0.16]} />
          <meshStandardMaterial color="#0284c7" roughness={0.3} />
        </mesh>
        {/* Chrome Threaded Bushing */}
        <mesh position={[0, 0.09, 0]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 0.03, 16]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.95} />
        </mesh>
        {/* Chrome Bat Toggle Lever (Angled) */}
        <mesh position={[0.02, 0.14, 0]} rotation={[0, 0, -0.3]} castShadow>
          <cylinderGeometry args={[0.015, 0.022, 0.09, 16]} />
          <meshStandardMaterial color="#f1f5f9" metalness={0.98} roughness={0.1} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Touch Sensor TTP223
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.03, 0]}>
          <boxGeometry args={[0.26, 0.07, 0.26]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}
      {/* Red PCB Touch Pad */}
      <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.22, 0.018, 0.22]} />
        <meshStandardMaterial color="#dc2626" roughness={0.3} />
      </mesh>
      {/* Concentric Touch Pad Sensor Ring */}
      <mesh position={[0, 0.025, -0.02]}>
        <ringGeometry args={[0.03, 0.06, 24]} />
        <meshBasicMaterial color="#f8fafc" />
      </mesh>
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
