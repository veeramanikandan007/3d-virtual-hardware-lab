import React from 'react';
import { Pin } from '../Pin';

export function Microcontrollers3D({ instanceId, selected, onClick, pins, type }) {
  // Arduino Nano
  if (type === 'arduino-nano') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.3, 0.08, 0.55]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Blue PCB */}
        <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.24, 0.025, 0.48]} />
          <meshStandardMaterial color="#0284c7" roughness={0.3} />
        </mesh>
        {/* ATmega328P QFP Chip */}
        <mesh position={[0, 0.038, 0.05]} castShadow>
          <boxGeometry args={[0.1, 0.015, 0.1]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
        {/* Mini-B USB Port */}
        <mesh position={[0, 0.045, -0.22]} castShadow>
          <boxGeometry args={[0.12, 0.035, 0.1]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.95} />
        </mesh>
        {/* Dual 15-pin Male Header Pins extending downward */}
        <mesh position={[-0.1, -0.01, 0]}>
          <boxGeometry args={[0.02, 0.04, 0.44]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.9} />
        </mesh>
        <mesh position={[0.1, -0.01, 0]}>
          <boxGeometry args={[0.02, 0.04, 0.44]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.9} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Arduino Mega 2560
  if (type === 'arduino-mega') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.85, 0.1, 1.35]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Teal Blue Long PCB */}
        <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.78, 0.03, 1.25]} />
          <meshStandardMaterial color="#00878f" roughness={0.3} />
        </mesh>
        {/* ATmega2560 Quad Chip */}
        <mesh position={[0.08, 0.04, 0.1]} castShadow>
          <boxGeometry args={[0.2, 0.02, 0.2]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
        {/* USB-B Port */}
        <mesh position={[-0.28, 0.055, -0.48]} castShadow>
          <boxGeometry args={[0.18, 0.05, 0.18]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.95} />
        </mesh>
        {/* DC Barrel Jack */}
        <mesh position={[-0.28, 0.055, 0.48]} castShadow>
          <boxGeometry args={[0.2, 0.05, 0.18]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
        {/* Dual 36-pin header bank at bottom */}
        <mesh position={[0.3, 0.05, 0.15]} castShadow>
          <boxGeometry args={[0.06, 0.04, 0.8]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Raspberry Pi Pico
  if (type === 'pico') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.32, 0.08, 0.65]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Green PCB */}
        <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.28, 0.02, 0.58]} />
          <meshStandardMaterial color="#15803d" roughness={0.35} />
        </mesh>
        {/* RP2040 Chip */}
        <mesh position={[0, 0.035, 0.05]} castShadow>
          <boxGeometry args={[0.1, 0.015, 0.1]} />
          <meshStandardMaterial color="#09090b" />
        </mesh>
        {/* Micro-USB port */}
        <mesh position={[0, 0.045, -0.28]} castShadow>
          <boxGeometry args={[0.12, 0.03, 0.1]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.95} />
        </mesh>
        {/* Castellated gold solder edges on left and right */}
        <mesh position={[-0.14, 0.02, 0]}>
          <boxGeometry args={[0.01, 0.025, 0.54]} />
          <meshStandardMaterial color="#eab308" metalness={0.9} />
        </mesh>
        <mesh position={[0.14, 0.02, 0]}>
          <boxGeometry args={[0.01, 0.025, 0.54]} />
          <meshStandardMaterial color="#eab308" metalness={0.9} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // STM32 Nucleo
  if (type === 'stm32-nucleo') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.9, 0.1, 1.1]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Crisp White PCB */}
        <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.82, 0.03, 1.0]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.4} />
        </mesh>
        {/* ST-LINK Breakaway Upper Section */}
        <mesh position={[0, 0.022, -0.38]}>
          <boxGeometry args={[0.8, 0.031, 0.2]} />
          <meshStandardMaterial color="#e2e8f0" />
        </mesh>
        {/* STM32 Microcontroller QFP Chip */}
        <mesh position={[0, 0.04, 0.1]} castShadow>
          <boxGeometry args={[0.18, 0.02, 0.18]} />
          <meshStandardMaterial color="#18181b" />
        </mesh>
        {/* Blue User Button & Black Reset Button */}
        <mesh position={[-0.25, 0.045, 0.35]}>
          <boxGeometry args={[0.06, 0.02, 0.06]} />
          <meshStandardMaterial color="#2563eb" />
        </mesh>
        <mesh position={[-0.15, 0.045, 0.35]}>
          <boxGeometry args={[0.06, 0.02, 0.06]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
        {/* Dual Morpho and Arduino Header Banks */}
        <mesh position={[-0.32, 0.05, 0.1]} castShadow>
          <boxGeometry args={[0.08, 0.04, 0.65]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
        <mesh position={[0.32, 0.05, 0.1]} castShadow>
          <boxGeometry args={[0.08, 0.04, 0.65]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // ESP8266 NodeMCU default
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.04, 0]}>
          <boxGeometry args={[0.42, 0.08, 0.7]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}
      <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.36, 0.025, 0.64]} />
        <meshStandardMaterial color="#18181b" roughness={0.4} />
      </mesh>
      {/* Silver ESP-12E Shield with Onboard Antenna */}
      <mesh position={[0, 0.045, -0.1]} castShadow>
        <boxGeometry args={[0.26, 0.025, 0.28]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.9} />
      </mesh>
      <mesh position={[0, 0.038, -0.28]}>
        <boxGeometry args={[0.24, 0.005, 0.06]} />
        <meshStandardMaterial color="#ca8a04" metalness={0.9} />
      </mesh>
      {/* Micro USB */}
      <mesh position={[0, 0.045, 0.31]} castShadow>
        <boxGeometry args={[0.12, 0.03, 0.08]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.95} />
      </mesh>
      {/* Header Strips */}
      <mesh position={[-0.15, 0.04, 0.05]} castShadow>
        <boxGeometry args={[0.04, 0.03, 0.5]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
      <mesh position={[0.15, 0.04, 0.05]} castShadow>
        <boxGeometry args={[0.04, 0.03, 0.5]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
