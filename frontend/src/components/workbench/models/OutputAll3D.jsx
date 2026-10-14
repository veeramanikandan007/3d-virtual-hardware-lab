import React from 'react';
import { Pin } from '../Pin';

export function OutputAll3D({ instanceId, selected, onClick, pins, type }) {
  // 1-Digit 7-Segment Display
  if (type === '7seg-1digit') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[0.26, 0.1, 0.36]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Grey/Black Module Housing */}
        <mesh position={[0, 0.04, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.22, 0.07, 0.32]} />
          <meshStandardMaterial color="#1e293b" roughness={0.5} />
        </mesh>
        {/* Milky White Segments (a-g and decimal point) */}
        {/* Top bar (a) */}
        <mesh position={[0, 0.076, -0.09]}>
          <boxGeometry args={[0.1, 0.005, 0.02]} />
          <meshStandardMaterial color="#f1f5f9" emissive="#ef4444" emissiveIntensity={0.3} />
        </mesh>
        {/* Middle bar (g) */}
        <mesh position={[0, 0.076, 0]}>
          <boxGeometry args={[0.1, 0.005, 0.02]} />
          <meshStandardMaterial color="#f1f5f9" emissive="#ef4444" emissiveIntensity={0.3} />
        </mesh>
        {/* Bottom bar (d) */}
        <mesh position={[0, 0.076, 0.09]}>
          <boxGeometry args={[0.1, 0.005, 0.02]} />
          <meshStandardMaterial color="#f1f5f9" emissive="#ef4444" emissiveIntensity={0.3} />
        </mesh>
        {/* Vertical bars (b, c, e, f) */}
        <mesh position={[0.05, 0.076, -0.045]}>
          <boxGeometry args={[0.02, 0.005, 0.08]} />
          <meshStandardMaterial color="#f1f5f9" emissive="#ef4444" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[-0.05, 0.076, -0.045]}>
          <boxGeometry args={[0.02, 0.005, 0.08]} />
          <meshStandardMaterial color="#f1f5f9" emissive="#ef4444" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0.05, 0.076, 0.045]}>
          <boxGeometry args={[0.02, 0.005, 0.08]} />
          <meshStandardMaterial color="#f1f5f9" emissive="#ef4444" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[-0.05, 0.076, 0.045]}>
          <boxGeometry args={[0.02, 0.005, 0.08]} />
          <meshStandardMaterial color="#f1f5f9" emissive="#ef4444" emissiveIntensity={0.3} />
        </mesh>
        {/* DP dot */}
        <mesh position={[0.08, 0.076, 0.1]}>
          <cylinderGeometry args={[0.012, 0.012, 0.005, 12]} />
          <meshStandardMaterial color="#f1f5f9" emissive="#ef4444" emissiveIntensity={0.3} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Addressable LED Strip (WS2812B NeoPixel Segment)
  if (type === 'led-strip') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.02, 0]}>
            <boxGeometry args={[0.74, 0.04, 0.16]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Flexible white PCB ribbon */}
        <mesh position={[0, 0.005, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.7, 0.01, 0.12]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.4} />
        </mesh>
        {/* 3x 5050 RGB LEDs with gold solder pads */}
        {[-0.22, 0, 0.22].map((x, idx) => (
          <group key={idx} position={[x, 0.012, 0]}>
            <mesh castShadow>
              <boxGeometry args={[0.07, 0.015, 0.07]} />
              <meshStandardMaterial color="#f1f5f9" roughness={0.2} />
            </mesh>
            {/* Center phosphor die window */}
            <mesh position={[0, 0.008, 0]}>
              <cylinderGeometry args={[0.022, 0.022, 0.002, 16]} />
              <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.8} />
            </mesh>
          </group>
        ))}
        {/* Copper solder pads at edges */}
        {[-0.32, 0.32].map((x, idx) => (
          <mesh key={idx} position={[x, 0.011, 0]}>
            <boxGeometry args={[0.03, 0.002, 0.1]} />
            <meshStandardMaterial color="#ca8a04" metalness={0.9} />
          </mesh>
        ))}
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // RGB LED (4-lead diffused 5mm LED)
  if (type === 'led-rgb') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.07, 0]}>
            <boxGeometry args={[0.16, 0.16, 0.16]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Frosted Milky RGB Dome */}
        <group position={[0, 0.06, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.035, 0.035, 0.05, 16]} />
            <meshPhysicalMaterial color="#ffffff" transmission={0.7} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.025, 0]} castShadow>
            <sphereGeometry args={[0.035, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshPhysicalMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.6} transmission={0.6} roughness={0.2} />
          </mesh>
          {/* Base Rim Flange */}
          <mesh position={[0, -0.025, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 0.01, 16]} />
            <meshStandardMaterial color="#e2e8f0" />
          </mesh>
        </group>
        {/* 4 Silver Wire Leads (R, Anode/Cathode, G, B) */}
        {[-0.03, -0.01, 0.01, 0.03].map((x, idx) => (
          <mesh key={idx} position={[x, 0.015, 0]}>
            <cylinderGeometry args={[0.003, 0.003, 0.04, 8]} />
            <meshStandardMaterial color="#d1d5db" metalness={0.95} />
          </mesh>
        ))}
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Piezo Speaker / Transducer (Gold/Brass and Ceramic Disc Casing)
  if (type === 'piezo-speaker') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.03, 0]}>
            <boxGeometry args={[0.34, 0.06, 0.34]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Black Low-Profile Plastic Casing */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.14, 0.14, 0.03, 24]} />
          <meshStandardMaterial color="#1e293b" roughness={0.5} />
        </mesh>
        {/* Center Sound Cavity Hole with Piezo Diaphragm visible */}
        <mesh position={[0, 0.031, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.002, 16]} />
          <meshStandardMaterial color="#ca8a04" metalness={0.8} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Standard Colored LED (Green, Blue)
  const isBlue = type === 'led-blue';
  const colorHex = isBlue ? '#3b82f6' : '#22c55e';

  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.06, 0]}>
          <boxGeometry args={[0.14, 0.14, 0.14]} />
          <meshBasicMaterial color="#38bdf8" wireframe />
        </mesh>
      )}
      {/* 5mm Tinted LED Dome */}
      <group position={[0, 0.05, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.04, 16]} />
          <meshPhysicalMaterial color={colorHex} emissive={colorHex} emissiveIntensity={0.5} transmission={0.6} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.02, 0]} castShadow>
          <sphereGeometry args={[0.03, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshPhysicalMaterial color={colorHex} emissive={colorHex} emissiveIntensity={0.7} transmission={0.5} roughness={0.1} />
        </mesh>
        <mesh position={[0, -0.02, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.008, 16]} />
          <meshStandardMaterial color={colorHex} />
        </mesh>
      </group>
      {/* Anode & Cathode Leads */}
      <mesh position={[-0.015, 0.015, 0]}>
        <cylinderGeometry args={[0.003, 0.003, 0.04, 8]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.95} />
      </mesh>
      <mesh position={[0.015, 0.015, 0]}>
        <cylinderGeometry args={[0.003, 0.003, 0.04, 8]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.95} />
      </mesh>
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
