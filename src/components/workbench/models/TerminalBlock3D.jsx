import React, { useMemo } from 'react';
import * as THREE from 'three';
import { Pin } from '../Pin';

// Create label texture for terminal block (Ground symbol, 3.3V, 5V)
function createTerminalTexture(type) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  if (type === 'ground-terminal') {
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // White Ground Symbol
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 12;
    ctx.lineCap = 'round';

    ctx.beginPath();
    // Vertical stem
    ctx.moveTo(128, 40);
    ctx.lineTo(128, 120);
    // Horizontal line 1 (widest)
    ctx.moveTo(40, 120);
    ctx.lineTo(216, 120);
    // Horizontal line 2
    ctx.moveTo(70, 160);
    ctx.lineTo(186, 160);
    // Horizontal line 3 (narrowest)
    ctx.moveTo(100, 200);
    ctx.lineTo(156, 200);
    ctx.stroke();
  } else {
    // Red background for 3.3V and 5V
    ctx.fillStyle = '#dc2626';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 64px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(type === 'rail-3v3' ? '3.3V' : '5V', 128, 128);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function TerminalBlock3D({ instanceId, selected, onClick, pins, type = 'ground-terminal' }) {
  const labelTexture = useMemo(() => createTerminalTexture(type), [type]);
  const isRed = type === 'rail-3v3' || type === 'rail-5v';

  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[0.22, 0.18, 0.22]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}

      {/* Main Terminal Block Plastic Housing */}
      <mesh position={[0, 0.07, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.18, 0.14, 0.18]} />
        <meshStandardMaterial color={isRed ? '#dc2626' : '#18181b'} roughness={0.35} />
      </mesh>

      {/* Top Printed Label (Ground Symbol / 3.3V / 5V) */}
      <mesh position={[0, 0.141, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.16, 0.16]} />
        <meshStandardMaterial map={labelTexture} roughness={0.3} />
      </mesh>

      {/* Front Recessed Cavity for Screw */}
      <mesh position={[0, 0.07, 0.085]}>
        <boxGeometry args={[0.11, 0.09, 0.02]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>

      {/* Silver Screw Head Inside Cavity */}
      <mesh position={[0, 0.07, 0.08]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.035, 0.035, 0.015, 24]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.95} roughness={0.15} />
      </mesh>
      {/* Philips Cross Slot in Screw */}
      <mesh position={[0, 0.07, 0.088]}>
        <boxGeometry args={[0.04, 0.008, 0.002]} />
        <meshBasicMaterial color="#334155" />
      </mesh>
      <mesh position={[0, 0.07, 0.088]}>
        <boxGeometry args={[0.008, 0.04, 0.002]} />
        <meshBasicMaterial color="#334155" />
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
