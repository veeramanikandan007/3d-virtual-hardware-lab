import React from 'react';
import { Pin } from '../Pin';

export function RoboticsAll3D({ instanceId, selected, onClick, pins, type }) {
  // Robotic Arm 
  if (type === 'robotic-arm') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.15, 0]}>
            <boxGeometry args={[0.3, 0.35, 0.3]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Base turntable */}
        <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.12, 0.14, 0.04, 24]} />
          <meshStandardMaterial color="#1e293b" roughness={0.4} />
        </mesh>
        {/* Lower Link arm */}
        <mesh position={[0, 0.1, 0]} rotation={[0.2, 0, 0]} castShadow>
          <boxGeometry args={[0.04, 0.16, 0.04]} />
          <meshStandardMaterial color="#0284c7" />
        </mesh>
        {/* Elbow Joint */}
        <mesh position={[0, 0.18, 0.03]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.06, 16]} />
          <meshStandardMaterial color="#64748b" metalness={0.8} />
        </mesh>
        {/* Forearm Link */}
        <mesh position={[0, 0.24, -0.02]} rotation={[-0.4, 0, 0]} castShadow>
          <boxGeometry args={[0.035, 0.14, 0.035]} />
          <meshStandardMaterial color="#0284c7" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Gripper / Claw
  if (type === 'gripper') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.28, 0.1, 0.28]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Gripper actuator base */}
        <mesh position={[0, 0.02, -0.06]} castShadow>
          <boxGeometry args={[0.14, 0.04, 0.08]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        {/* Left Claw Prong */}
        <mesh position={[-0.06, 0.02, 0.04]} rotation={[0, 0.3, 0]} castShadow>
          <boxGeometry args={[0.02, 0.03, 0.12]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.8} />
        </mesh>
        {/* Right Claw Prong */}
        <mesh position={[0.06, 0.02, 0.04]} rotation={[0, -0.3, 0]} castShadow>
          <boxGeometry args={[0.02, 0.03, 0.12]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.8} />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Robot Wheel (Rubber tire with yellow/white rim)
  if (type === 'robot-wheel') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.08, 0]}>
            <boxGeometry args={[0.2, 0.18, 0.2]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        <group position={[0, 0.08, 0]} rotation={[0, 0, Math.PI / 2]}>
          {/* Black Rubber Tire with Tread Ridges */}
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.08, 0.08, 0.04, 24]} />
            <meshStandardMaterial color="#18181b" roughness={0.9} />
          </mesh>
          {/* Yellow Wheel Rim */}
          <mesh position={[0, 0.005, 0]}>
            <cylinderGeometry args={[0.055, 0.055, 0.042, 16]} />
            <meshStandardMaterial color="#eab308" roughness={0.3} />
          </mesh>
        </group>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Robot Chassis / Default Robotics Element
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.04, 0]}>
          <boxGeometry args={[0.62, 0.1, 0.44]} />
          <meshBasicMaterial color="#38bdf8" wireframe />
        </mesh>
      )}
      {/* Acrylic / Anodized Aluminum 2WD Chassis Plate */}
      <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.58, 0.015, 0.4]} />
        <meshPhysicalMaterial color="#38bdf8" transmission={0.6} roughness={0.2} transparent opacity={0.8} />
      </mesh>
      {/* Brass Standoff Pillars */}
      {[[-0.24, -0.16], [0.24, -0.16], [-0.24, 0.16], [0.24, 0.16]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.04, z]} castShadow>
          <cylinderGeometry args={[0.01, 0.01, 0.05, 12]} />
          <meshStandardMaterial color="#eab308" metalness={0.9} />
        </mesh>
      ))}
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
