import React from 'react';

export function Pin({ position, color = '#61dafb' }) {
  return (
    <mesh position={position}>
      <cylinderGeometry args={[0.005, 0.005, 0.02, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
}
