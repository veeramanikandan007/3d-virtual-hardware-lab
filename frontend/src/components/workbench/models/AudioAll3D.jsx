import React from 'react';
import { Pin } from '../Pin';

export function AudioAll3D({ instanceId, selected, onClick, pins, type }) {
  // PAM8403 2x3W Stereo Audio Amplifier with Potentiometer Knob
  if (type === 'pam8403-amp') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.38, 0.08, 0.32]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Green PCB */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.34, 0.02, 0.28]} />
          <meshStandardMaterial color="#15803d" roughness={0.35} />
        </mesh>
        {/* Rotary Potentiometer with Switch & Fluted Knob */}
        <group position={[-0.1, 0.035, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.04, 0.04, 0.03, 16]} />
            <meshStandardMaterial color="#1e293b" metalness={0.8} />
          </mesh>
        </group>
        {/* PAM8403 SOP-16 IC */}
        <mesh position={[0.06, 0.028, 0]} castShadow>
          <boxGeometry args={[0.07, 0.012, 0.06]} />
          <meshStandardMaterial color="#09090b" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // 8Ω Mini Dynamic Speaker
  if (type === 'speaker-8ohm') {
    return (
      <group onClick={onClick}>
        {selected && (
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.38, 0.08, 0.38]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        )}
        {/* Metal Outer Basket Rim */}
        <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.16, 0.16, 0.03, 24]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.9} />
        </mesh>
        {/* Translucent Mylar Sound Diaphragm Cone */}
        <mesh position={[0, 0.025, 0]}>
          <cylinderGeometry args={[0.13, 0.04, 0.015, 20]} />
          <meshStandardMaterial color="#334155" roughness={0.3} />
        </mesh>
        {/* Center Dust Cap */}
        <mesh position={[0, 0.032, 0]}>
          <sphereGeometry args={[0.03, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>
        {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
      </group>
    );
  }

  // Electret / MAX4466 Microphone Module
  return (
    <group onClick={onClick}>
      {selected && (
        <mesh position={[0, 0.03, 0]}>
          <boxGeometry args={[0.26, 0.07, 0.22]} />
          <meshBasicMaterial color="#38bdf8" wireframe />
        </mesh>
      )}
      {/* Purple/Red PCB */}
      <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.22, 0.02, 0.18]} />
        <meshStandardMaterial color="#7e22ce" roughness={0.35} />
      </mesh>
      {/* Silver Aluminum Electret Capsule with Acoustic Felt Port */}
      <group position={[-0.04, 0.035, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.035, 0.035, 0.03, 16]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.95} />
        </mesh>
        <mesh position={[0, 0.016, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 0.002, 12]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
      </group>
      {/* Mini Trimmer Potentiometer for Gain */}
      <mesh position={[0.05, 0.03, 0]}>
        <boxGeometry args={[0.03, 0.02, 0.03]} />
        <meshStandardMaterial color="#ca8a04" />
      </mesh>
      {pins && pins.map((p) => <Pin key={p.id} instanceId={instanceId} pinId={p.id} name={p.name} type={p.type} position={p.pos} />)}
    </group>
  );
}
