import React, { useMemo } from 'react';
import * as THREE from 'three';
import { Pin } from '../Pin';

// Silkscreen for OLED Display
function createOLEDTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Deep blue PCB
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Silkscreen pin labels at top
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 24px monospace';
  ctx.textAlign = 'center';

  ctx.fillText('GND', 100, 60);
  ctx.fillText('VCC', 205, 60);
  ctx.fillText('SCL', 310, 60);
  ctx.fillText('SDA', 415, 60);

  // Screen active pixel area (yellow header, blue body)
  ctx.fillStyle = '#facc15';
  ctx.fillRect(50, 110, canvas.width - 100, 45);
  ctx.fillStyle = '#0284c7';
  ctx.fillRect(50, 160, canvas.width - 100, 290);

  // OLED Graphic demo content
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 26px sans-serif';
  ctx.fillText('0.96" I2C OLED', canvas.width / 2, 140);
  ctx.font = '22px monospace';
  ctx.fillText('128 x 64 PIXELS', canvas.width / 2, 230);
  ctx.fillText('SSD1306 DRIVER', canvas.width / 2, 280);
  ctx.fillText('ONLINE [OK]', canvas.width / 2, 350);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function OLEDDisplay3D({ instanceId, selected, onClick, pins }) {
  const oledTexture = useMemo(() => createOLEDTexture(), []);

  return (
    <group onClick={onClick}>
      {/* Selection Box */}
      {selected && (
        <mesh position={[0, 0.04, 0]}>
          <boxGeometry args={[0.55, 0.08, 0.55]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}

      {/* Blue PCB Board with 4 corner mounting eyelets */}
      <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 0.025, 0.5]} />
        <meshStandardMaterial color="#0f2b5c" roughness={0.3} />
      </mesh>

      {/* 4 Corner Silver Mounting Eyelets */}
      {[
        [-0.21, 0.033, -0.21],
        [-0.21, 0.033, 0.21],
        [0.21, 0.033, -0.21],
        [0.21, 0.033, 0.21]
      ].map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <cylinderGeometry args={[0.025, 0.025, 0.005, 16]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.9} />
        </mesh>
      ))}

      {/* Glass OLED Screen Panel */}
      <mesh position={[0, 0.038, 0.02]} castShadow>
        <boxGeometry args={[0.42, 0.015, 0.36]} />
        <meshStandardMaterial color="#020617" roughness={0.1} metalness={0.8} />
      </mesh>

      {/* Emissive Screen Face */}
      <mesh position={[0, 0.046, 0.02]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.4, 0.34]} />
        <meshStandardMaterial map={oledTexture} roughness={0.2} emissive="#0284c7" emissiveIntensity={0.6} />
      </mesh>

      {/* Top 4-Pin Female/Male Connector Header */}
      <mesh position={[0, 0.042, -0.2]} castShadow>
        <boxGeometry args={[0.28, 0.028, 0.04]} />
        <meshStandardMaterial color="#09090b" roughness={0.5} />
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
