import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import { Pin } from './Pin';
import { Wire } from './Wire';

export function ThreeDCanvas() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#0d0d11' }}>
      <Canvas camera={{ position: [0.5, 0.5, 0.5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 4, 2]} intensity={1.2} />
        <Grid args={[2, 2]} cellSize={0.05} sectionSize={0.2} cellColor="#333" sectionColor="#555" />
        
        {/* Breadboard Base */}
        <mesh position={[0, -0.01, 0]}>
          <boxGeometry args={[0.3, 0.02, 0.15]} />
          <meshStandardMaterial color="#2d2f36" />
        </mesh>

        {/* Demo Pin Anchors */}
        <Pin position={[-0.1, 0.01, 0]} name="VCC" color="#ff4444" />
        <Pin position={[0.1, 0.01, 0]} name="GND" color="#4444ff" />

        {/* Demo Wire */}
        <Wire start={[-0.1, 0.01, 0]} end={[0.1, 0.01, 0]} color="#ffbb00" />

        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
