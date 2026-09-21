import React from 'react';
import { Pin } from '../Pin';

export function SensorsAll3D({ instanceId, selected, onClick, pins, type }) {
  // PIR HC-SR501
  if (type === 'pir-sensor') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.08, 0]}>
            <boxGeometry args={[0.42, 0.2, 0.34]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Green PCB */}
        <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.38, 0.02, 0.28]} />
          <meshStandardMaterial color="#15803d" roughness={0.35} />
        </mesh>
        {/* White Faceted Domed Fresnel Lens */}
        <mesh position={[0, 0.08, 0]} castShadow>
          <sphereGeometry args={[0.08, 20, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.4} />
        </mesh>
        {/* Dual Orange Trimmer Pots (Time / Sensitivity) */}
        <mesh position={[-0.12, 0.035, 0.08]}>
          <boxGeometry args={[0.04, 0.02, 0.04]} />
          <meshStandardMaterial color="#f97316" />
        </mesh>
        <mesh position={[-0.06, 0.035, 0.08]}>
          <boxGeometry args={[0.04, 0.02, 0.04]} />
          <meshStandardMaterial color="#f97316" />
        </mesh>
        {/* 3-pin Header at bottom */}
        <mesh position={[0.12, 0.02, 0.12]}>
          <boxGeometry args={[0.08, 0.02, 0.03]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // MQ-2 Gas Sensor
  if (type === 'mq2-gas') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.08, 0]}>
            <boxGeometry args={[0.38, 0.22, 0.38]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Blue PCB */}
        <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.34, 0.02, 0.34]} />
          <meshStandardMaterial color="#0284c7" roughness={0.3} />
        </mesh>
        {/* Stainless Steel Mesh Chimney Cylinder */}
        <mesh position={[0, 0.09, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.1, 24]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Top Mesh Screen */}
        <mesh position={[0, 0.141, 0]}>
          <cylinderGeometry args={[0.075, 0.075, 0.005, 24]} />
          <meshStandardMaterial color="#475569" roughness={0.8} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Soil Moisture Sensor
  if (type === 'soil-moisture') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[0.26, 0.12, 0.8]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Blue PCB Handle */}
        <mesh position={[0, 0.02, -0.2]} castShadow receiveShadow>
          <boxGeometry args={[0.22, 0.02, 0.24]} />
          <meshStandardMaterial color="#0284c7" roughness={0.3} />
        </mesh>
        {/* Dual Gold-Plated PCB Soil Prongs */}
        <mesh position={[-0.05, 0.015, 0.16]} castShadow>
          <boxGeometry args={[0.04, 0.015, 0.44]} />
          <meshStandardMaterial color="#eab308" metalness={0.95} roughness={0.2} />
        </mesh>
        <mesh position={[0.05, 0.015, 0.16]} castShadow>
          <boxGeometry args={[0.04, 0.015, 0.44]} />
          <meshStandardMaterial color="#eab308" metalness={0.95} roughness={0.2} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // GPS NEO-6M with Ceramic Patch Antenna
  if (type === 'gps-module') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.06, 0]}>
            <boxGeometry args={[0.38, 0.14, 0.38]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Blue PCB Module */}
        <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.34, 0.025, 0.34]} />
          <meshStandardMaterial color="#0284c7" roughness={0.3} />
        </mesh>
        {/* Square Ceramic GPS Patch Antenna (Beige / Gold Top) */}
        <mesh position={[0, 0.06, 0]} castShadow>
          <boxGeometry args={[0.22, 0.05, 0.22]} />
          <meshStandardMaterial color="#e2d3c1" roughness={0.5} />
        </mesh>
        {/* Center Metal Dot Electrode */}
        <mesh position={[0, 0.086, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 0.003, 16]} />
          <meshStandardMaterial color="#eab308" metalness={0.9} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Load Cell Bar + HX711
  if (type === 'load-cell') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.06, 0]}>
            <boxGeometry args={[0.95, 0.12, 0.25]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Silver Aluminum Beam Bar with Mounting Holes */}
        <mesh position={[0, 0.04, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.88, 0.045, 0.16]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.92} roughness={0.2} />
        </mesh>
        {/* Center White Silicone Strain Gauge Sealing */}
        <mesh position={[0, 0.04, 0]}>
          <boxGeometry args={[0.26, 0.046, 0.162]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.6} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // DHT22 (White Body)
  if (type === 'dht22') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.08, 0]}>
            <boxGeometry args={[0.38, 0.22, 0.3]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* White Plastic Slotted Cage Housing */}
        <mesh position={[0, 0.09, -0.04]} castShadow>
          <boxGeometry args={[0.3, 0.14, 0.24]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.3} />
        </mesh>
        {/* Vents */}
        {[-0.08, 0, 0.08].map((x, xi) => (
          <mesh key={xi} position={[x, 0.161, -0.04]}>
            <boxGeometry args={[0.04, 0.002, 0.18]} />
            <meshBasicMaterial color="#cbd5e1" />
          </mesh>
        ))}
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Generic Sensor Module default (IR obstacle, sound, flame, hall, MPU6050, BMP280)
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.04, 0]}>
          <boxGeometry args={[0.38, 0.08, 0.38]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}
      {/* Blue PCB */}
      <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.32, 0.02, 0.32]} />
        <meshStandardMaterial color="#0284c7" roughness={0.3} />
      </mesh>
      {/* IC Chip */}
      <mesh position={[0, 0.035, 0]} castShadow>
        <boxGeometry args={[0.1, 0.015, 0.1]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
      {/* Indicator LEDs & Trimmer */}
      <mesh position={[-0.08, 0.035, 0.08]}>
        <boxGeometry args={[0.02, 0.01, 0.02]} />
        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[0.08, 0.035, 0.08]}>
        <boxGeometry args={[0.04, 0.015, 0.04]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
