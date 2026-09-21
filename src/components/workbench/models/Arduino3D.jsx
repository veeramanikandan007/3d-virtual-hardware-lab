import React, { useMemo } from 'react';
import * as THREE from 'three';
import { Pin } from '../Pin';

// Create high-detail silkscreen texture for Arduino UNO R3
function createArduinoTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 768;
  const ctx = canvas.getContext('2d');

  // Arduino iconic teal-blue PCB background
  ctx.fillStyle = '#00878f';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // White silkscreen lines and branding
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 3;

  // Arduino Infinity Logo
  ctx.beginPath();
  ctx.arc(580, 220, 35, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(635, 220, 35, 0, Math.PI * 2);
  ctx.stroke();

  ctx.font = 'bold 36px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('-', 580, 230);
  ctx.fillText('+', 635, 230);

  ctx.font = 'bold 38px sans-serif';
  ctx.fillText('ARDUINO', 610, 285);
  ctx.font = 'bold 50px sans-serif';
  ctx.fillText('UNO', 760, 250);

  // Digital pin labels along top edge
  ctx.font = 'bold 20px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('DIGITAL (PWM ~)', 550, 70);
  const digitalPins = ['SCL', 'SDA', 'AREF', 'GND', '13', '12', '~11', '~10', '~9', '8', '7', '~6', '~5', '4', '~3', '2', 'TX>1', 'RX<0'];
  digitalPins.forEach((p, idx) => {
    ctx.fillText(p, 200 + idx * 42, 105);
  });

  // Power and Analog labels along bottom edge
  ctx.fillText('POWER', 380, 710);
  const powerPins = ['IOREF', 'RESET', '3.3V', '5V', 'GND', 'GND', 'VIN'];
  powerPins.forEach((p, idx) => {
    ctx.fillText(p, 260 + idx * 42, 670);
  });

  ctx.fillText('ANALOG IN', 680, 710);
  const analogPins = ['A0', 'A1', 'A2', 'A3', 'A4', 'A5'];
  analogPins.forEach((p, idx) => {
    ctx.fillText(p, 600 + idx * 42, 670);
  });

  // Italian Map & Open Source Logo silkscreen detail
  ctx.font = '16px sans-serif';
  ctx.fillText('MADE IN ITALY', 610, 320);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function Arduino3D({ instanceId, selected, onClick, pins }) {
  const pcbTexture = useMemo(() => createArduinoTexture(), []);

  return (
    <group onClick={onClick}>
      {/* Selection Box */}
      {selected && (
        <mesh position={[0, 0.04, 0]}>
          <boxGeometry args={[1.08, 0.1, 0.82]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}

      {/* Main Teal-Blue PCB with rounded profile */}
      <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.02, 0.03, 0.76]} />
        <meshStandardMaterial color="#00878f" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Silkscreen Top Face */}
      <mesh position={[0, 0.036, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.0, 0.74]} />
        <meshStandardMaterial map={pcbTexture} roughness={0.4} />
      </mesh>

      {/* 4 Corner Gold Plated Mounting Holes */}
      {[
        [-0.44, 0.037, -0.32],
        [-0.44, 0.037, 0.32],
        [0.44, 0.037, -0.28],
        [0.44, 0.037, 0.28]
      ].map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <cylinderGeometry args={[0.025, 0.025, 0.005, 16]} />
          <meshStandardMaterial color="#eab308" metalness={0.9} roughness={0.3} />
        </mesh>
      ))}

      {/* Silver USB Type-B Port */}
      <mesh position={[-0.4, 0.058, -0.2]} castShadow>
        <boxGeometry args={[0.22, 0.055, 0.18]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.95} roughness={0.15} />
      </mesh>
      {/* USB Port Opening */}
      <mesh position={[-0.511, 0.058, -0.2]}>
        <boxGeometry args={[0.002, 0.035, 0.12]} />
        <meshBasicMaterial color="#1e293b" />
      </mesh>

      {/* Black DC Barrel Power Jack */}
      <mesh position={[-0.4, 0.058, 0.22]} castShadow>
        <boxGeometry args={[0.24, 0.055, 0.18]} />
        <meshStandardMaterial color="#111827" roughness={0.5} />
      </mesh>
      {/* DC Barrel Jack Core Hole */}
      <mesh position={[-0.521, 0.058, 0.22]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.035, 0.035, 0.005, 16]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* DIP-28 IC Socket & ATmega328P Chip */}
      <mesh position={[0.12, 0.046, 0.08]} castShadow>
        <boxGeometry args={[0.42, 0.022, 0.12]} />
        <meshStandardMaterial color="#111827" roughness={0.4} />
      </mesh>
      {/* Chip Pins on sides */}
      <mesh position={[0.12, 0.038, 0.08]}>
        <boxGeometry args={[0.44, 0.01, 0.14]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.9} />
      </mesh>

      {/* 16MHz Silver Crystal Oscillator */}
      <mesh position={[-0.1, 0.045, -0.05]} castShadow>
        <boxGeometry args={[0.1, 0.02, 0.045]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.95} roughness={0.15} />
      </mesh>

      {/* Red Reset Tactile Button with Silver Frame */}
      <mesh position={[-0.38, 0.045, 0.02]}>
        <boxGeometry args={[0.06, 0.015, 0.06]} />
        <meshStandardMaterial color="#9ca3af" metalness={0.8} />
      </mesh>
      <mesh position={[-0.38, 0.055, 0.02]}>
        <cylinderGeometry args={[0.018, 0.018, 0.01, 16]} />
        <meshStandardMaterial color="#ef4444" roughness={0.3} />
      </mesh>

      {/* Dual Barrel Filter Capacitors */}
      <mesh position={[-0.2, 0.055, 0.18]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.045, 16]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.9} />
      </mesh>
      <mesh position={[-0.12, 0.055, 0.18]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.045, 16]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.9} />
      </mesh>

      {/* Top Black Female Header Strip (Digital 0-13, GND, AREF) */}
      <mesh position={[0.04, 0.055, -0.32]} castShadow>
        <boxGeometry args={[0.76, 0.042, 0.05]} />
        <meshStandardMaterial color="#111827" roughness={0.5} />
      </mesh>

      {/* Bottom Black Female Header Strips (Power & Analog) */}
      <mesh position={[-0.14, 0.055, 0.32]} castShadow>
        <boxGeometry args={[0.34, 0.042, 0.05]} />
        <meshStandardMaterial color="#111827" roughness={0.5} />
      </mesh>
      <mesh position={[0.26, 0.055, 0.32]} castShadow>
        <boxGeometry args={[0.32, 0.042, 0.05]} />
        <meshStandardMaterial color="#111827" roughness={0.5} />
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
