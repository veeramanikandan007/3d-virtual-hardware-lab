import React, { useMemo } from 'react';
import * as THREE from 'three';

export function Wire({ start, end, color = '#ffcc00' }) {
  const points = useMemo(() => {
    const s = new THREE.Vector3(...start);
    const e = new THREE.Vector3(...end);
    const mid = s.clone().lerp(e, 0.5).add(new THREE.Vector3(0, 0.04, 0));
    const curve = new THREE.CatmullRomCurve3([s, mid, e]);
    return curve.getPoints(20);
  }, [start, end]);

  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  return (
    <line>
      <primitive object={geometry} attach="geometry" />
      <lineBasicMaterial attach="material" color={color} linewidth={3} />
    </line>
  );
}
