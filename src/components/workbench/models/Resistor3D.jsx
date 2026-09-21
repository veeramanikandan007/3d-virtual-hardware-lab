import React from 'react';
import { Pin } from '../Pin';

export function Resistor3D({ instanceId, selected, onClick, pins }) {
  return (
    <group onClick={onClick}>
      {/* Selection Box */}
      {selected && (
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[0.5, 0.08, 0.12]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}

      {/* Main Ceramic Body (Bulbous Ends, Tan/Beige) */}
      <group position={[0, 0.05, 0]} rotation={[0, 0, Math.PI / 2]}>
        {/* Center Cylinder */}
        <mesh castShadow>
          <cylinderGeometry args={[0.026, 0.026, 0.16, 20]} />
          <meshStandardMaterial color="#e5c8a3" roughness={0.4} />
        </mesh>
        {/* Left Bulbous Cap */}
        <mesh position={[0, -0.07, 0]} castShadow>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#e5c8a3" roughness={0.4} />
        </mesh>
        {/* Right Bulbous Cap */}
        <mesh position={[0, 0.07, 0]} castShadow>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#e5c8a3" roughness={0.4} />
        </mesh>

        {/* Band 1: Red (2) */}
        <mesh position={[0, -0.05, 0]}>
          <cylinderGeometry args={[0.027, 0.027, 0.015, 20]} />
          <meshStandardMaterial color="#dc2626" roughness={0.2} />
        </mesh>
        {/* Band 2: Red (2) */}
        <mesh position={[0, -0.02, 0]}>
          <cylinderGeometry args={[0.027, 0.027, 0.015, 20]} />
          <meshStandardMaterial color="#dc2626" roughness={0.2} />
        </mesh>
        {/* Band 3: Brown (x10) */}
        <mesh position={[0, 0.015, 0]}>
          <cylinderGeometry args={[0.027, 0.027, 0.015, 20]} />
          <meshStandardMaterial color="#78350f" roughness={0.2} />
        </mesh>
        {/* Band 4: Gold (+-5%) */}
        <mesh position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.027, 0.027, 0.015, 20]} />
          <meshStandardMaterial color="#eab308" metalness={0.9} roughness={0.15} />
        </mesh>
      </group>

      {/* Bent Silver Metal Wire Leads (extending left and right, then bending downward) */}
      <group position={[0, 0.05, 0]}>
        {/* Left Horizontal Lead */}
        <mesh position={[-0.13, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.004, 0.004, 0.09, 8]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.95} />
        </mesh>
        {/* Left Downward Bent Leg */}
        <mesh position={[-0.175, -0.025, 0]} castShadow>
          <cylinderGeometry args={[0.004, 0.004, 0.05, 8]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.95} />
        </mesh>

        {/* Right Horizontal Lead */}
        <mesh position={[0.13, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.004, 0.004, 0.09, 8]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.95} />
        </mesh>
        {/* Right Downward Bent Leg */}
        <mesh position={[0.175, -0.025, 0]} castShadow>
          <cylinderGeometry args={[0.004, 0.004, 0.05, 8]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.95} />
        </mesh>
      </group>

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
