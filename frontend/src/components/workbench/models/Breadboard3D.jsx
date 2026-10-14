import React, { useMemo } from 'react';
import * as THREE from 'three';
import { Pin } from '../Pin';

// Generate a high-resolution canvas texture matching a real 830-point MB-102 Breadboard
function createBreadboardTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 768;
  const ctx = canvas.getContext('2d');

  // Background cream/off-white plastic
  ctx.fillStyle = '#f2f1ec';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const paddingX = 80;
  const width = canvas.width - paddingX * 2;
  const numCols = 60;
  const colStep = width / (numCols - 1);

  // Helper to draw text
  ctx.fillStyle = '#475569';
  ctx.font = 'bold 16px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // --- POWER RAILS (TOP & BOTTOM) ---
  const topRedY = 55;
  const topBlueY = 100;
  const botBlueY = 665;
  const botRedY = 710;

  // Red (+) Lines
  ctx.strokeStyle = '#dc2626';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(paddingX + 20, topRedY);
  ctx.lineTo(canvas.width - paddingX - 20, topRedY);
  ctx.moveTo(paddingX + 20, botRedY);
  ctx.lineTo(canvas.width - paddingX - 20, botRedY);
  ctx.stroke();

  // Blue (-) Lines
  ctx.strokeStyle = '#2563eb';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(paddingX + 20, topBlueY);
  ctx.lineTo(canvas.width - paddingX - 20, topBlueY);
  ctx.moveTo(paddingX + 20, botBlueY);
  ctx.lineTo(canvas.width - paddingX - 20, botBlueY);
  ctx.stroke();

  // Plus (+) & Minus (-) Symbols
  ctx.font = 'bold 22px sans-serif';
  ctx.fillStyle = '#dc2626';
  ctx.fillText('+', paddingX - 15, topRedY);
  ctx.fillText('+', canvas.width - paddingX + 15, topRedY);
  ctx.fillText('+', paddingX - 15, botRedY);
  ctx.fillText('+', canvas.width - paddingX + 15, botRedY);

  ctx.fillStyle = '#2563eb';
  ctx.fillText('-', paddingX - 15, topBlueY);
  ctx.fillText('-', canvas.width - paddingX + 15, topBlueY);
  ctx.fillText('-', paddingX - 15, botBlueY);
  ctx.fillText('-', canvas.width - paddingX + 15, botBlueY);

  // --- TIE POINT SOCKETS GRID ---
  // Rows A-E Y coordinates
  const rowEY = 160;
  const rowDY = 195;
  const rowCY = 230;
  const rowBY = 265;
  const rowAY = 300;

  // Center Divider Groove Y
  const centerGrooveY = 384;

  // Rows F-J Y coordinates
  const rowFY = 465;
  const rowGY = 500;
  const rowHY = 535;
  const rowIY = 570;
  const rowJY = 605;

  const topRailHolesY = [75, 120];
  const botRailHolesY = [645, 690];
  const terminalRowsY = [rowEY, rowDY, rowCY, rowBY, rowAY, rowFY, rowGY, rowHY, rowIY, rowJY];

  // Draw holes for all 60 columns
  ctx.fillStyle = '#1e293b';

  for (let c = 0; c < numCols; c++) {
    const x = paddingX + c * colStep;

    // Power rail holes
    topRailHolesY.forEach((y) => {
      ctx.fillRect(x - 5, y - 5, 10, 10);
    });
    botRailHolesY.forEach((y) => {
      ctx.fillRect(x - 5, y - 5, 10, 10);
    });

    // Terminal row holes (A-J)
    terminalRowsY.forEach((y) => {
      ctx.fillRect(x - 5, y - 5, 10, 10);
    });

    // Column numbers (printed every 5 columns: 1, 5, 10, 15... 60)
    const colNum = c + 1;
    if (colNum === 1 || colNum % 5 === 0) {
      ctx.fillStyle = '#64748b';
      ctx.font = 'bold 15px monospace';
      ctx.fillText(colNum.toString(), x, 140);
      ctx.fillText(colNum.toString(), x, 625);
      ctx.fillStyle = '#1e293b';
    }
  }

  // Row Letters (A, B, C, D, E and F, G, H, I, J)
  ctx.fillStyle = '#475569';
  ctx.font = 'bold 16px sans-serif';
  const leftLetterX = paddingX - 35;
  const rightLetterX = canvas.width - paddingX + 35;

  const rowLetters = [
    { label: 'A', y: rowAY },
    { label: 'B', y: rowBY },
    { label: 'C', y: rowCY },
    { label: 'D', y: rowDY },
    { label: 'E', y: rowEY },
    { label: 'F', y: rowFY },
    { label: 'G', y: rowGY },
    { label: 'H', y: rowHY },
    { label: 'I', y: rowIY },
    { label: 'J', y: rowJY }
  ];

  rowLetters.forEach(({ label, y }) => {
    ctx.fillText(label, leftLetterX, y);
    ctx.fillText(label, rightLetterX, y);
  });

  // Center Ravine Line
  ctx.fillStyle = '#d1d5db';
  ctx.fillRect(paddingX - 40, centerGrooveY - 12, width + 80, 24);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function Breadboard3D({ instanceId, selected, onClick, pins }) {
  const topTexture = useMemo(() => createBreadboardTexture(), []);

  return (
    <group onClick={onClick}>
      {/* Highlight Box */}
      {selected && (
        <mesh position={[0, 0.02, 0]}>
          <boxGeometry args={[1.72, 0.06, 0.62]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      )}

      {/* Main Off-White Plastic Body */}
      <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.68, 0.04, 0.58]} />
        <meshStandardMaterial color="#f3f2ed" roughness={0.45} />
      </mesh>

      {/* Top Printed Surface Face with Real Markings */}
      <mesh position={[0, 0.041, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.66, 0.56]} />
        <meshStandardMaterial map={topTexture} roughness={0.5} />
      </mesh>

      {/* Center Trough / IC Ravine Groove */}
      <mesh position={[0, 0.038, 0]}>
        <boxGeometry args={[1.64, 0.01, 0.04]} />
        <meshStandardMaterial color="#cbd5e1" roughness={0.8} />
      </mesh>

      {/* Interlocking Side Tabs (Left & Right Male/Female Notches) */}
      <mesh position={[-0.85, 0.02, -0.15]}>
        <boxGeometry args={[0.02, 0.03, 0.08]} />
        <meshStandardMaterial color="#e2e8f0" />
      </mesh>
      <mesh position={[-0.85, 0.02, 0.15]}>
        <boxGeometry args={[0.02, 0.03, 0.08]} />
        <meshStandardMaterial color="#e2e8f0" />
      </mesh>
      <mesh position={[0.85, 0.02, -0.15]}>
        <boxGeometry args={[0.02, 0.03, 0.08]} />
        <meshStandardMaterial color="#e2e8f0" />
      </mesh>
      <mesh position={[0.85, 0.02, 0.15]}>
        <boxGeometry args={[0.02, 0.03, 0.08]} />
        <meshStandardMaterial color="#e2e8f0" />
      </mesh>

      {/* Interactive Socket Pins */}
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
