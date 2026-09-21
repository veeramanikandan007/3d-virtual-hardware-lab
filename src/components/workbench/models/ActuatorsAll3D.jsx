import React from 'react';
import { Pin } from '../Pin';

export function ActuatorsAll3D({ instanceId, selected, onClick, pins, type }) {
  // NEMA 17 Stepper Motor
  if (type === 'nema17-stepper') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.15, 0]}>
            <boxGeometry args={[0.5, 0.35, 0.5]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Square Body with Chamfered Corners */}
        <mesh position={[0, 0.12, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.42, 0.22, 0.42]} />
          <meshStandardMaterial color="#18181b" roughness={0.4} />
        </mesh>
        {/* Top Aluminum Faceplate */}
        <mesh position={[0, 0.235, 0]} castShadow>
          <boxGeometry args={[0.42, 0.02, 0.42]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Center Bearing Hub */}
        <mesh position={[0, 0.26, 0]} castShadow>
          <cylinderGeometry args={[0.11, 0.11, 0.03, 24]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.9} />
        </mesh>
        {/* 5mm D-cut Steel Output Shaft */}
        <mesh position={[0, 0.34, 0]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.14, 16]} />
          <meshStandardMaterial color="#f1f5f9" metalness={0.95} roughness={0.1} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // TT Gear Motor (Yellow)
  if (type === 'tt-motor') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.08, 0]}>
            <boxGeometry args={[0.65, 0.16, 0.3]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Bright Yellow Plastic Gearbox Housing */}
        <mesh position={[-0.08, 0.07, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.38, 0.12, 0.18]} />
          <meshStandardMaterial color="#eab308" roughness={0.35} />
        </mesh>
        {/* Small DC Motor attached at rear */}
        <mesh position={[0.18, 0.07, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.06, 0.06, 0.18, 20]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.9} />
        </mesh>
        {/* White Output Shaft on both sides */}
        <mesh position={[-0.18, 0.07, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.26, 16]} />
          <meshStandardMaterial color="#f8fafc" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // 28BYJ-48 Stepper Motor (Round Blue Can)
  if (type === '28byj-stepper') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.08, 0]}>
            <boxGeometry args={[0.42, 0.2, 0.42]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Round Metallic Blue Stator Can */}
        <mesh position={[0, 0.07, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.14, 0.14, 0.1, 32]} />
          <meshStandardMaterial color="#0284c7" metalness={0.8} roughness={0.25} />
        </mesh>
        {/* Brass Output Gear Shaft */}
        <mesh position={[0.05, 0.15, 0]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.07, 16]} />
          <meshStandardMaterial color="#ca8a04" metalness={0.9} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // 40mm Cooling Fan
  if (type === 'cooling-fan') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.08, 0]}>
            <boxGeometry args={[0.44, 0.18, 0.44]} />
            <meshBasicMaterial color="#3b82f6" wireframe />
          </mesh>
        )}
        {/* Black Square Frame Housing */}
        <mesh position={[0, 0.08, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.4, 0.12, 0.4]} />
          <meshStandardMaterial color="#18181b" roughness={0.4} />
        </mesh>
        {/* Center Circular Impeller Opening */}
        <mesh position={[0, 0.08, 0]}>
          <cylinderGeometry args={[0.17, 0.17, 0.121, 24]} />
          <meshStandardMaterial color="#09090b" />
        </mesh>
        {/* Center Fan Hub */}
        <mesh position={[0, 0.08, 0]}>
          <cylinderGeometry args={[0.07, 0.07, 0.08, 20]} />
          <meshStandardMaterial color="#27272a" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // MG996R Metal Gear Servo default
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.09, 0]}>
          <boxGeometry args={[0.3, 0.22, 0.48]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}
      {/* Matte Black Tough Heavy-Duty Casing */}
      <mesh position={[0, 0.08, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.2, 0.14, 0.4]} />
        <meshStandardMaterial color="#18181b" roughness={0.5} />
      </mesh>
      {/* Brass Metal Output Spline Gear */}
      <mesh position={[0, 0.17, -0.1]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.04, 20]} />
        <meshStandardMaterial color="#ca8a04" metalness={0.9} />
      </mesh>
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
