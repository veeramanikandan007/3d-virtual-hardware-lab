import React, { useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Wire } from './Wire';
import { useWorkbench } from '../../context/WorkbenchContext';

export function ActiveWireDraft() {
  const { activePinSource, wireColor } = useWorkbench();
  const { camera, raycaster, pointer } = useThree();
  const [mousePos, setMousePos] = useState([0, 0, 0]);

  useFrame(() => {
    if (!activePinSource) return;

    // Raycast onto workspace plane at Y=0.05
    raycaster.setFromCamera(pointer, camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -0.05);
    const target = new THREE.Vector3();
    if (raycaster.ray.intersectPlane(plane, target)) {
      setMousePos([target.x, target.y, target.z]);
    }
  });

  if (!activePinSource) return null;

  return (
    <Wire
      start={activePinSource.worldPos || [0, 0.1, 0]}
      end={mousePos}
      color={wireColor}
    />
  );
}
