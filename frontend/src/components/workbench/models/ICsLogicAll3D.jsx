import React from 'react';
import { Pin } from '../Pin';

export function ICsLogicAll3D({ instanceId, selected, onClick, pins, type }) {
  // DS3231 RTC Module with CR2032 Coin Cell
  if (type === 'ds3231-rtc') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[0.42, 0.1, 0.38]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Blue PCB */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.38, 0.02, 0.34]} />
          <meshStandardMaterial color="#0284c7" roughness={0.3} />
        </mesh>
        {/* CR2032 Coin Cell Battery Retainer & Cell */}
        <mesh position={[-0.04, 0.04, 0]} castShadow>
          <cylinderGeometry args={[0.1, 0.1, 0.025, 20]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.95} />
        </mesh>
        {/* DS3231 High-Precision RTC Chip (SOIC-16) */}
        <mesh position={[0.1, 0.03, 0]} castShadow>
          <boxGeometry args={[0.08, 0.015, 0.1]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>
        {/* AT24C32 EEPROM */}
        <mesh position={[0.1, 0.03, 0.1]} castShadow>
          <boxGeometry args={[0.05, 0.012, 0.05]} />
          <meshStandardMaterial color="#09090b" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Determine DIP IC Pin count and dimensions
  let pinCount = 8;
  let bodyLength = 0.2;
  if (type === '74hc00' || type === '74hc04') {
    pinCount = 14;
    bodyLength = 0.35;
  } else if (type === '74hc595' || type === 'cd4017') {
    pinCount = 16;
    bodyLength = 0.4;
  } else if (type === 'pc817') {
    pinCount = 4;
    bodyLength = 0.12;
  }

  const halfPins = pinCount / 2;

  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.035, 0]}>
          <boxGeometry args={[bodyLength + 0.04, 0.07, 0.2]} />
          <meshBasicMaterial color="#38bdf8" wireframe />
        </mesh>
      )}
      {/* Matte Black Epoxy Molded DIP Body */}
      <mesh position={[0, 0.03, 0]} castShadow receiveShadow>
        <boxGeometry args={[bodyLength, 0.025, 0.14]} />
        <meshStandardMaterial color="#18181b" roughness={0.4} />
      </mesh>
      {/* Pin 1 Polarity Semi-Circular Notch */}
      <mesh position={[-bodyLength / 2, 0.035, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.02, 10, 1, false, 0, Math.PI]} rotation={[0, -Math.PI / 2, 0]} />
        <meshStandardMaterial color="#09090b" />
      </mesh>
      {/* Silver Gull-Wing / Through-Hole DIP Legs on Left and Right */}
      {Array.from({ length: halfPins }).map((_, i) => {
        const x = -bodyLength / 2 + (bodyLength / (halfPins + 1)) * (i + 1);
        return (
          <group key={i}>
            {/* Leg side A (Z = -0.075) */}
            <mesh position={[x, 0.015, -0.075]} castShadow>
              <boxGeometry args={[0.01, 0.03, 0.015]} />
              <meshStandardMaterial color="#d1d5db" metalness={0.95} />
            </mesh>
            {/* Leg side B (Z = 0.075) */}
            <mesh position={[x, 0.015, 0.075]} castShadow>
              <boxGeometry args={[0.01, 0.03, 0.015]} />
              <meshStandardMaterial color="#d1d5db" metalness={0.95} />
            </mesh>
          </group>
        );
      })}
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
