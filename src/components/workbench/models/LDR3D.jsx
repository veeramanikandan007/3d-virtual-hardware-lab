import React, { useMemo } from 'react';
import * as THREE from 'three';
import { Pin } from '../Pin';

// Texture for LDR serpentine cadmium sulfide photosensitive track
function createLDRTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Ceramic beige disc background
  ctx.fillStyle = '#e2d3c1';
  ctx.beginPath();
  ctx.arc(128, 128, 120, 0, Math.PI * 2);
  ctx.fill();

  // Orange serpentine photocurve track
  ctx.strokeStyle = '#ea580c';
  ctx.lineWidth = 14;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  ctx.beginPath();
  ctx.moveTo(50, 60);
  ctx.lineTo(206, 60);
  ctx.lineTo(206, 100);
  ctx.lineTo(50, 100);
  ctx.lineTo(50, 140);
  ctx.lineTo(206, 140);
  ctx.lineTo(206, 180);
  ctx.lineTo(50, 180);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function LDR3D({ instanceId, selected, onClick, pins }) {
  const ldrTexture = useMemo(() => createLDRTexture(), []);

  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[0.2, 0.18, 0.2]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}

      {/* Ceramic Disc Sensor Head */}
      <mesh position={[0, 0.1, 0]} castShadow>
        <cylinderGeometry args={[0.065, 0.065, 0.015, 32]} />
        <meshStandardMaterial color="#c2410c" roughness={0.4} />
      </mesh>

      {/* Top Photoconductive Face with Serpentine Pattern */}
      <mesh position={[0, 0.108, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.12, 0.12]} />
        <meshStandardMaterial map={ldrTexture} roughness={0.2} />
      </mesh>

      {/* Transparent Epoxy Protective Dome */}
      <mesh position={[0, 0.112, 0]}>
        <cylinderGeometry args={[0.063, 0.063, 0.008, 32]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.9}
          transparent
          opacity={0.7}
          roughness={0.05}
          ior={1.5}
        />
      </mesh>

      {/* Two Silver Lead Legs */}
      <mesh position={[-0.025, 0.045, 0]} castShadow>
        <cylinderGeometry args={[0.003, 0.003, 0.09, 8]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.95} roughness={0.15} />
      </mesh>
      <mesh position={[0.025, 0.045, 0]} castShadow>
        <cylinderGeometry args={[0.003, 0.003, 0.09, 8]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.95} roughness={0.15} />
      </mesh>

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
