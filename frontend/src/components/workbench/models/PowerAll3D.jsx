import React from 'react';
import { Pin } from '../Pin';

export function PowerAll3D({ instanceId, selected, onClick, pins, type }) {
  // 9V Battery
  if (type === 'battery-9v') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.08, 0]}>
            <boxGeometry args={[0.3, 0.18, 0.19]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Prismatic battery body with matte dark/gold label */}
        <mesh position={[0, 0.07, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.26, 0.14, 0.16]} />
          <meshStandardMaterial color="#1c1917" roughness={0.4} />
        </mesh>
        {/* Gold brand band */}
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[0.262, 0.04, 0.162]} />
          <meshStandardMaterial color="#d97706" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Snap Terminal (+ Male circular stud) */}
        <mesh position={[-0.06, 0.15, 0]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.02, 16]} />
          <meshStandardMaterial color="#e5e7eb" metalness={0.95} />
        </mesh>
        {/* Snap Terminal (- Female hexagonal crown) */}
        <mesh position={[0.06, 0.15, 0]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.02, 6]} />
          <meshStandardMaterial color="#e5e7eb" metalness={0.95} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // AA Battery Pack (2x/4x Holder)
  if (type === 'battery-aa-pack') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.38, 0.08, 0.38]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Molded black battery tray */}
        <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.34, 0.04, 0.34]} />
          <meshStandardMaterial color="#0f172a" roughness={0.6} />
        </mesh>
        {/* Two AA Cylindrical Cells seated inside */}
        {[-0.07, 0.07].map((z, idx) => (
          <group key={idx} position={[0, 0.03, z]} rotation={[0, 0, Math.PI / 2]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.035, 0.035, 0.28, 16]} />
              <meshStandardMaterial color="#2563eb" roughness={0.3} />
            </mesh>
            {/* Positive button nib */}
            <mesh position={[0, 0.145, 0]}>
              <cylinderGeometry args={[0.015, 0.015, 0.01, 12]} />
              <meshStandardMaterial color="#d1d5db" metalness={0.9} />
            </mesh>
          </group>
        ))}
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // 18650 Li-ion Battery Cell
  if (type === 'battery-18650') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.42, 0.08, 0.14]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* 18650 Cyan-Blue shrink wrap cylinder */}
        <group position={[0, 0.035, 0]} rotation={[0, 0, Math.PI / 2]}>
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.04, 0.04, 0.36, 20]} />
            <meshStandardMaterial color="#0284c7" roughness={0.3} />
          </mesh>
          {/* Positive flat top terminal */}
          <mesh position={[0, 0.182, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.005, 16]} />
            <meshStandardMaterial color="#d1d5db" metalness={0.95} />
          </mesh>
          {/* Negative flat bottom */}
          <mesh position={[0, -0.182, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 0.005, 16]} />
            <meshStandardMaterial color="#d1d5db" metalness={0.95} />
          </mesh>
        </group>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // LM2596 DC-DC Step-Down Buck Converter
  if (type === 'lm2596-buck') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[0.48, 0.1, 0.28]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Blue PCB */}
        <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.44, 0.02, 0.24]} />
          <meshStandardMaterial color="#0369a1" roughness={0.35} />
        </mesh>
        {/* Toroidal/Shielded Power Inductor */}
        <mesh position={[0.06, 0.045, 0]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 0.04, 16]} />
          <meshStandardMaterial color="#1e293b" roughness={0.5} />
        </mesh>
        {/* LM2596 TO-263 Power IC with Heatsink Tab */}
        <mesh position={[-0.08, 0.035, 0]} castShadow>
          <boxGeometry args={[0.08, 0.02, 0.08]} />
          <meshStandardMaterial color="#18181b" />
        </mesh>
        {/* Multi-turn Blue Trimmer Potentiometer */}
        <mesh position={[-0.04, 0.05, 0.07]} castShadow>
          <boxGeometry args={[0.06, 0.04, 0.04]} />
          <meshStandardMaterial color="#2563eb" />
        </mesh>
        {/* Dual SMT Aluminum Electrolytic Capacitors */}
        {[-0.15, 0.15].map((x, i) => (
          <mesh key={i} position={[x, 0.045, 0]} castShadow>
            <cylinderGeometry args={[0.03, 0.03, 0.04, 14]} />
            <meshStandardMaterial color="#94a3b8" metalness={0.9} />
          </mesh>
        ))}
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // MT3608 Step-Up Boost Converter
  if (type === 'mt3608-boost') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.4, 0.08, 0.22]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Compact Blue PCB */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.36, 0.02, 0.18]} />
          <meshStandardMaterial color="#0284c7" roughness={0.35} />
        </mesh>
        {/* Ferrite Power Inductor (220) */}
        <mesh position={[0.04, 0.035, 0]} castShadow>
          <boxGeometry args={[0.07, 0.03, 0.07]} />
          <meshStandardMaterial color="#18181b" roughness={0.4} />
        </mesh>
        {/* Blue Precision Trimmer */}
        <mesh position={[-0.08, 0.045, 0]} castShadow>
          <boxGeometry args={[0.08, 0.045, 0.05]} />
          <meshStandardMaterial color="#1d4ed8" />
        </mesh>
        {/* SOT-23-6 MT3608 IC */}
        <mesh position={[0.04, 0.028, -0.05]}>
          <boxGeometry args={[0.03, 0.01, 0.02]} />
          <meshStandardMaterial color="#09090b" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // TP4056 Lithium Battery Charger Module with USB-C/Micro
  if (type === 'tp4056-charger') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.34, 0.08, 0.24]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Blue/Red PCB */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.3, 0.02, 0.2]} />
          <meshStandardMaterial color="#0369a1" roughness={0.3} />
        </mesh>
        {/* USB-C Receptacle */}
        <mesh position={[-0.12, 0.03, 0]} castShadow>
          <boxGeometry args={[0.08, 0.025, 0.09]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.95} />
        </mesh>
        {/* TP4056 SOIC-8 IC */}
        <mesh position={[0.02, 0.028, 0]} castShadow>
          <boxGeometry args={[0.06, 0.012, 0.05]} />
          <meshStandardMaterial color="#09090b" />
        </mesh>
        {/* Red / Blue Status SMD LEDs */}
        <mesh position={[0.06, 0.026, 0.06]}>
          <boxGeometry args={[0.02, 0.01, 0.02]} />
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0.06, 0.026, -0.06]}>
          <boxGeometry args={[0.02, 0.01, 0.02]} />
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // AMS1117 Voltage Regulator Breakout Module (3.3V / 5V)
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.03, 0]}>
          <boxGeometry args={[0.26, 0.06, 0.18]} />
          <meshBasicMaterial color="#38bdf8" wireframe />
        </mesh>
      )}
      {/* Red / Green breakout PCB */}
      <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.22, 0.02, 0.14]} />
        <meshStandardMaterial color="#b91c1c" roughness={0.35} />
      </mesh>
      {/* SOT-223 AMS1117 IC with Metal Heat Tab */}
      <mesh position={[0, 0.03, 0]} castShadow>
        <boxGeometry args={[0.07, 0.015, 0.05]} />
        <meshStandardMaterial color="#18181b" />
      </mesh>
      <mesh position={[0, 0.026, -0.035]}>
        <boxGeometry args={[0.04, 0.008, 0.02]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.9} />
      </mesh>
      {/* Filter Tantalum SMD Capacitors */}
      {[-0.06, 0.06].map((x, idx) => (
        <mesh key={idx} position={[x, 0.028, 0]}>
          <boxGeometry args={[0.03, 0.015, 0.02]} />
          <meshStandardMaterial color="#ca8a04" />
        </mesh>
      ))}
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
