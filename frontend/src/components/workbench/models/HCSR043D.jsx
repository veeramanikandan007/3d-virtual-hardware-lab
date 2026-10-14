import React, { useMemo } from 'react';
import * as THREE from 'three';
import { Pin } from '../Pin';

// PCB texture for HC-SR04
function createHCSR04Texture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0284c7';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('HC-SR04', canvas.width / 2, 80);

  ctx.font = 'bold 20px monospace';
  ctx.fillText('VCC', 180, 235);
  ctx.fillText('TRIG', 235, 235);
  ctx.fillText('ECHO', 285, 235);
  ctx.fillText('GND', 340, 235);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function HCSR043D({ instanceId, selected, onClick, pins }) {
  const pcbTexture = useMemo(() => createHCSR04Texture(), []);

  return (
    <group onClick={onClick}>
      {/* Selection Box */}
      {selected && (
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[0.62, 0.16, 0.35]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}

      {/* Blue PCB Base */}
      <mesh position={[0, 0.03, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.56, 0.02, 0.26]} />
        <meshStandardMaterial color="#0284c7" roughness={0.3} />
      </mesh>

      {/* PCB Silkscreen Face */}
      <mesh position={[0, 0.041, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.54, 0.24]} />
        <meshStandardMaterial map={pcbTexture} roughness={0.4} />
      </mesh>

      {/* 4 Corner Silver Mounting Eyelets */}
      {[
        [-0.24, 0.042, -0.09],
        [-0.24, 0.042, 0.09],
        [0.24, 0.042, -0.09],
        [0.24, 0.042, 0.09]
      ].map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <cylinderGeometry args={[0.02, 0.02, 0.005, 16]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.9} />
        </mesh>
      ))}

      {/* Left Ultrasonic Transducer Cylinder (Transmitter "T") */}
      <mesh position={[-0.14, 0.095, -0.03]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.1, 32]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.95} roughness={0.15} />
      </mesh>
      {/* Left Mesh Grille Inset */}
      <mesh position={[-0.14, 0.095, -0.081]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.072, 0.072, 0.005, 24]} />
        <meshStandardMaterial color="#18181b" roughness={0.8} />
      </mesh>

      {/* Right Ultrasonic Transducer Cylinder (Receiver "R") */}
      <mesh position={[0.14, 0.095, -0.03]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.1, 32]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.95} roughness={0.15} />
      </mesh>
      {/* Right Mesh Grille Inset */}
      <mesh position={[0.14, 0.095, -0.081]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.072, 0.072, 0.005, 24]} />
        <meshStandardMaterial color="#18181b" roughness={0.8} />
      </mesh>

      {/* Crystal Oscillator in Center */}
      <mesh position={[0, 0.05, -0.03]}>
        <boxGeometry args={[0.06, 0.018, 0.035]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.9} />
      </mesh>

      {/* 4 Straight Metal Male Header Pins */}
      <mesh position={[0, 0.02, 0.14]}>
        <boxGeometry args={[0.2, 0.02, 0.03]} />
        <meshStandardMaterial color="#111827" />
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
