import React, { useMemo } from 'react';
import * as THREE from 'three';
import { Pin } from '../Pin';

// Create silkscreen texture for ESP32 Dev Board
function createESP32Texture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Matte black PCB
  ctx.fillStyle = '#18181b';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // White silkscreen labels
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 16px monospace';

  // Pin labels along left side
  const leftPins = ['3V3', 'EN', 'VP', 'VN', 'D34', 'D35', 'D32', 'D33', 'D25', 'D26', 'D27', 'D14', 'D12', 'D13', 'GND'];
  leftPins.forEach((p, idx) => {
    ctx.fillText(p, 50, 220 + idx * 48);
  });

  // Pin labels along right side
  const rightPins = ['VIN', 'GND', 'D13', 'D12', 'D14', 'D27', 'D26', 'D25', 'D33', 'D32', 'D35', 'D34', 'VN', 'VP', 'EN'];
  rightPins.forEach((p, idx) => {
    ctx.textAlign = 'right';
    ctx.fillText(p, canvas.width - 50, 220 + idx * 48);
  });

  // Center branding
  ctx.textAlign = 'center';
  ctx.font = 'bold 22px sans-serif';
  ctx.fillText('DOIT ESP32 DEVKIT V1', canvas.width / 2, 860);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function ESP323D({ instanceId, selected, onClick, pins }) {
  const pcbTexture = useMemo(() => createESP32Texture(), []);

  return (
    <group onClick={onClick}>
      {/* Selection Box */}
      {selected && (
        <mesh position={[0, 0.04, 0]}>
          <boxGeometry args={[0.55, 0.1, 1.05]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}

      {/* Matte Black PCB Body */}
      <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 0.03, 0.98]} />
        <meshStandardMaterial color="#18181b" roughness={0.4} metalness={0.1} />
      </mesh>

      {/* Silkscreen Face */}
      <mesh position={[0, 0.036, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.48, 0.96]} />
        <meshStandardMaterial map={pcbTexture} roughness={0.5} />
      </mesh>

      {/* Gold/Copper Serpentine PCB Antenna at top */}
      <mesh position={[0, 0.037, -0.38]}>
        <boxGeometry args={[0.34, 0.002, 0.14]} />
        <meshStandardMaterial color="#d97706" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Metallic Silver RF Shield Can (ESP-WROOM-32) */}
      <mesh position={[0, 0.05, -0.15]} castShadow>
        <boxGeometry args={[0.34, 0.028, 0.32]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.9} roughness={0.15} />
      </mesh>
      {/* Shield Engraving Texture Line */}
      <mesh position={[0, 0.065, -0.15]}>
        <boxGeometry args={[0.26, 0.001, 0.22]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* CP2102 USB-to-UART Bridge Chip */}
      <mesh position={[0, 0.045, 0.12]} castShadow>
        <boxGeometry args={[0.1, 0.015, 0.1]} />
        <meshStandardMaterial color="#09090b" roughness={0.5} />
      </mesh>

      {/* Micro-USB Port at bottom */}
      <mesh position={[0, 0.048, 0.46]} castShadow>
        <boxGeometry args={[0.16, 0.035, 0.12]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.95} roughness={0.1} />
      </mesh>
      {/* USB Opening */}
      <mesh position={[0, 0.048, 0.521]}>
        <boxGeometry args={[0.1, 0.02, 0.002]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* EN & BOOT Tactile Buttons */}
      <mesh position={[-0.14, 0.045, 0.38]}>
        <boxGeometry args={[0.06, 0.018, 0.06]} />
        <meshStandardMaterial color="#9ca3af" metalness={0.8} />
      </mesh>
      <mesh position={[-0.14, 0.056, 0.38]}>
        <cylinderGeometry args={[0.018, 0.018, 0.01, 12]} />
        <meshStandardMaterial color="#18181b" />
      </mesh>

      <mesh position={[0.14, 0.045, 0.38]}>
        <boxGeometry args={[0.06, 0.018, 0.06]} />
        <meshStandardMaterial color="#9ca3af" metalness={0.8} />
      </mesh>
      <mesh position={[0.14, 0.056, 0.38]}>
        <cylinderGeometry args={[0.018, 0.018, 0.01, 12]} />
        <meshStandardMaterial color="#18181b" />
      </mesh>

      {/* Red Power LED & Blue GPIO2 LED */}
      <mesh position={[-0.06, 0.04, 0.28]}>
        <boxGeometry args={[0.025, 0.01, 0.025]} />
        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[0.06, 0.04, 0.28]}>
        <boxGeometry args={[0.025, 0.01, 0.025]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.8} />
      </mesh>

      {/* Dual 15-Pin Black Header Strips on Left and Right */}
      <mesh position={[-0.2, 0.05, 0.05]} castShadow>
        <boxGeometry args={[0.05, 0.04, 0.76]} />
        <meshStandardMaterial color="#09090b" roughness={0.5} />
      </mesh>
      <mesh position={[0.2, 0.05, 0.05]} castShadow>
        <boxGeometry args={[0.05, 0.04, 0.76]} />
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
