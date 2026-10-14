import React, { useMemo } from 'react';
import * as THREE from 'three';
import { Pin } from '../Pin';

// Texture for TowerPro SG90 sticker
function createServoStickerTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  // Gold foil border & dark center
  ctx.fillStyle = '#eab308';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(8, 8, canvas.width - 16, canvas.height - 16);

  ctx.fillStyle = '#eab308';
  ctx.font = 'bold 30px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('TowerPro', canvas.width / 2, 48);

  ctx.font = 'bold 34px sans-serif';
  ctx.fillText('SG90', canvas.width / 2, 85);

  ctx.font = '14px sans-serif';
  ctx.fillText('Micro Servo', canvas.width / 2, 108);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function ServoMotor3D({ instanceId, selected, onClick, pins }) {
  const stickerTexture = useMemo(() => createServoStickerTexture(), []);

  return (
    <group onClick={onClick}>
      {/* Selection Box */}
      {selected && (
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[0.36, 0.18, 0.44]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}

      {/* Translucent Royal Blue Main Body */}
      <mesh position={[0, 0.06, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.18, 0.11, 0.32]} />
        <meshPhysicalMaterial
          color="#1d4ed8"
          roughness={0.2}
          transmission={0.4}
          thickness={0.5}
          transparent
          opacity={0.88}
        />
      </mesh>

      {/* Side Mounting Ears with screw holes */}
      <mesh position={[0, 0.08, 0]} castShadow>
        <boxGeometry args={[0.18, 0.02, 0.44]} />
        <meshPhysicalMaterial
          color="#1d4ed8"
          roughness={0.2}
          transmission={0.4}
          transparent
          opacity={0.88}
        />
      </mesh>

      {/* Side Sticker Label */}
      <mesh position={[0.091, 0.06, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[0.26, 0.09]} />
        <meshStandardMaterial map={stickerTexture} roughness={0.3} />
      </mesh>

      {/* White Output Gear Spline Shaft */}
      <mesh position={[0, 0.125, -0.07]} castShadow>
        <cylinderGeometry args={[0.035, 0.035, 0.025, 20]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.3} />
      </mesh>

      {/* White Nylon Double-Arm Servo Horn */}
      <group position={[0, 0.142, -0.07]}>
        {/* Center Hub */}
        <mesh>
          <cylinderGeometry args={[0.045, 0.045, 0.01, 20]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.3} />
        </mesh>
        {/* Long Horn Arm with holes */}
        <mesh position={[0, 0, 0]} rotation={[0, 0.3, 0]}>
          <boxGeometry args={[0.024, 0.008, 0.22]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.3} />
        </mesh>
      </group>

      {/* 3-Wire Ribbon Cable (Brown, Red, Orange) protruding from bottom */}
      <group position={[0, 0.02, 0.16]}>
        <mesh position={[-0.015, 0, 0.04]}>
          <boxGeometry args={[0.01, 0.008, 0.08]} />
          <meshStandardMaterial color="#78350f" />
        </mesh>
        <mesh position={[0, 0, 0.04]}>
          <boxGeometry args={[0.01, 0.008, 0.08]} />
          <meshStandardMaterial color="#ef4444" />
        </mesh>
        <mesh position={[0.015, 0, 0.04]}>
          <boxGeometry args={[0.01, 0.008, 0.08]} />
          <meshStandardMaterial color="#f97316" />
        </mesh>

        {/* 3-Pin Black DuPont Female Connector Header */}
        <mesh position={[0, 0, 0.1]}>
          <boxGeometry args={[0.045, 0.02, 0.05]} />
          <meshStandardMaterial color="#111827" roughness={0.5} />
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
