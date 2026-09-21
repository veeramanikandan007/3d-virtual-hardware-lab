import React, { useMemo } from 'react';
import * as THREE from 'three';
import { Pin } from '../Pin';

// Texture for 10K label on side of potentiometer
function createPotTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0284c7';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 50px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('10K', canvas.width / 2, 80);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function Potentiometer3D({ instanceId, selected, onClick, pins }) {
  const potLabelTexture = useMemo(() => createPotTexture(), []);

  return (
    <group onClick={onClick}>
      {/* Selection Box */}
      {selected && (
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[0.3, 0.22, 0.3]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}

      {/* Blue Plastic Cuboid Base Housing */}
      <mesh position={[0, 0.04, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.22, 0.08, 0.22]} />
        <meshStandardMaterial color="#0284c7" roughness={0.3} />
      </mesh>

      {/* Front Face with 10K Label */}
      <mesh position={[0, 0.04, 0.111]}>
        <planeGeometry args={[0.2, 0.07]} />
        <meshStandardMaterial map={potLabelTexture} roughness={0.4} />
      </mesh>

      {/* Metallic Round Collar / Bushing */}
      <mesh position={[0, 0.09, 0]} castShadow>
        <cylinderGeometry args={[0.07, 0.07, 0.03, 24]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.95} roughness={0.15} />
      </mesh>

      {/* Fluted / Knurled Metal Rotary Shaft with Flat Notch */}
      <mesh position={[0, 0.15, 0]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 16]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.95} roughness={0.2} />
      </mesh>
      {/* Shaft Flat Notch Cutout */}
      <mesh position={[0.03, 0.16, 0]}>
        <boxGeometry args={[0.025, 0.08, 0.04]} />
        <meshStandardMaterial color="#9ca3af" metalness={0.9} />
      </mesh>

      {/* 3 Bent Metal Solder Lugs / Terminals */}
      {[-0.07, 0, 0.07].map((xPos, idx) => (
        <group key={idx} position={[xPos, 0.015, 0.12]}>
          {/* Horizontal Tab */}
          <mesh position={[0, 0, 0.02]}>
            <boxGeometry args={[0.025, 0.008, 0.04]} />
            <meshStandardMaterial color="#d1d5db" metalness={0.9} />
          </mesh>
          {/* Downward Bent Leg */}
          <mesh position={[0, -0.025, 0.04]}>
            <boxGeometry args={[0.02, 0.05, 0.008]} />
            <meshStandardMaterial color="#d1d5db" metalness={0.9} />
          </mesh>
        </group>
      ))}

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
