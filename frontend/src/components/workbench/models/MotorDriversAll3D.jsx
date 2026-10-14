import React from 'react';
import { Pin } from '../Pin';

export function MotorDriversAll3D({ instanceId, selected, onClick, pins, type }) {
  // L298N Dual H-Bridge with Large Aluminum Heatsink
  if (type === 'l298n') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.08, 0]}>
            <boxGeometry args={[0.54, 0.18, 0.54]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Red PCB */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.48, 0.02, 0.48]} />
          <meshStandardMaterial color="#b91c1c" roughness={0.35} />
        </mesh>
        {/* Tall Black Anodized Finned Heatsink */}
        <group position={[0, 0.07, -0.06]}>
          <mesh castShadow>
            <boxGeometry args={[0.26, 0.1, 0.12]} />
            <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.4} />
          </mesh>
          {/* Heatsink Vertical Cooling Fins */}
          {[-0.1, -0.05, 0, 0.05, 0.1].map((x, i) => (
            <mesh key={i} position={[x, 0, 0.065]}>
              <boxGeometry args={[0.015, 0.09, 0.02]} />
              <meshStandardMaterial color="#0f172a" metalness={0.9} />
            </mesh>
          ))}
        </group>
        {/* Blue 2-Pin and 3-Pin Screw Terminal Blocks */}
        <mesh position={[-0.18, 0.04, 0.1]} castShadow>
          <boxGeometry args={[0.08, 0.045, 0.16]} />
          <meshStandardMaterial color="#2563eb" />
        </mesh>
        <mesh position={[0.18, 0.04, 0.1]} castShadow>
          <boxGeometry args={[0.08, 0.045, 0.16]} />
          <meshStandardMaterial color="#2563eb" />
        </mesh>
        <mesh position={[0, 0.04, 0.18]} castShadow>
          <boxGeometry args={[0.16, 0.045, 0.08]} />
          <meshStandardMaterial color="#2563eb" />
        </mesh>
        {/* 220uF Electrolytic Capacitor */}
        <mesh position={[-0.14, 0.055, -0.14]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.07, 16]} />
          <meshStandardMaterial color="#1e293b" metalness={0.5} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // A4988 / DRV8825 Stepper Driver Pololu Carrier with Anodized Heatsink
  if (type === 'a4988' || type === 'drv8825') {
    const isPurple = type === 'drv8825';
    const pcbColor = isPurple ? '#7e22ce' : '#15803d';
    const heatsinkColor = isPurple ? '#a855f7' : '#0284c7';

    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[0.26, 0.1, 0.32]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* PCB Carrier */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.22, 0.02, 0.28]} />
          <meshStandardMaterial color={pcbColor} roughness={0.35} />
        </mesh>
        {/* Square Anodized Aluminum Heatsink with Slotted Fins */}
        <group position={[0, 0.05, -0.02]}>
          <mesh castShadow>
            <boxGeometry args={[0.12, 0.05, 0.12]} />
            <meshStandardMaterial color={heatsinkColor} metalness={0.85} roughness={0.3} />
          </mesh>
        </group>
        {/* Current Limit Trimpot */}
        <mesh position={[0, 0.028, 0.09]}>
          <cylinderGeometry args={[0.02, 0.02, 0.01, 12]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.9} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // 1-Channel Relay Module
  if (type === 'relay-module') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.06, 0]}>
            <boxGeometry args={[0.42, 0.12, 0.32]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Blue PCB */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.38, 0.02, 0.28]} />
          <meshStandardMaterial color="#0284c7" roughness={0.3} />
        </mesh>
        {/* Songle Blue Electromechanical Cube Relay */}
        <mesh position={[-0.04, 0.06, 0]} castShadow>
          <boxGeometry args={[0.2, 0.07, 0.18]} />
          <meshStandardMaterial color="#2563eb" roughness={0.4} />
        </mesh>
        {/* 3-Terminal Output Screw Terminal (NO, COM, NC) */}
        <mesh position={[-0.14, 0.04, 0]} castShadow>
          <boxGeometry args={[0.06, 0.045, 0.16]} />
          <meshStandardMaterial color="#16a34a" />
        </mesh>
        {/* Indicator SMD LEDs & Optocoupler */}
        <mesh position={[0.1, 0.026, 0.06]}>
          <boxGeometry args={[0.02, 0.01, 0.02]} />
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0.1, 0.028, -0.04]} castShadow>
          <boxGeometry args={[0.04, 0.015, 0.05]} />
          <meshStandardMaterial color="#09090b" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // ULN2003 Stepper Driver Board
  if (type === 'uln2003') {
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
          <meshStandardMaterial color="#0369a1" roughness={0.3} />
        </mesh>
        {/* ULN2003 DIP-16 IC */}
        <mesh position={[-0.04, 0.035, 0]} castShadow>
          <boxGeometry args={[0.22, 0.02, 0.1]} />
          <meshStandardMaterial color="#18181b" />
        </mesh>
        {/* 4 Red Activity LEDs (A, B, C, D) */}
        {[-0.06, -0.02, 0.02, 0.06].map((z, i) => (
          <mesh key={i} position={[0.1, 0.035, z]} castShadow>
            <cylinderGeometry args={[0.015, 0.015, 0.02, 12]} />
            <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.5} />
          </mesh>
        ))}
        {/* White JST-XH 5-Pin Stepper Connector */}
        <mesh position={[-0.14, 0.04, 0]} castShadow>
          <boxGeometry args={[0.06, 0.04, 0.18]} />
          <meshStandardMaterial color="#f8fafc" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Default compact H-bridge (TB6612 / DRV8833 / MOSFET)
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.04, 0]}>
          <boxGeometry args={[0.3, 0.08, 0.28]} />
          <meshBasicMaterial color="#38bdf8" wireframe />
        </mesh>
      )}
      <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.26, 0.02, 0.24]} />
        <meshStandardMaterial color="#dc2626" roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.03, 0]} castShadow>
        <boxGeometry args={[0.08, 0.015, 0.08]} />
        <meshStandardMaterial color="#09090b" />
      </mesh>
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
