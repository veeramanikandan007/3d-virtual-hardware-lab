import React, { useRef, useState, useMemo } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useWorkbench } from '../../context/WorkbenchContext';
import { COMPONENT_MANIFEST } from '../../data/componentManifest';
import { ModelRenderer } from './ModelRenderer';

export function PlacedComponentContainer({ componentData }) {
  const {
    selectedComponentId,
    setSelectedComponentId,
    updateComponentPosition,
    setIsDraggingObject
  } = useWorkbench();

  const { camera, raycaster } = useThree();
  const [isDragging, setIsDragging] = useState(false);
  const groupRef = useRef();

  const isSelected = selectedComponentId === componentData.instanceId;

  const manifestMeta = useMemo(() => {
    return COMPONENT_MANIFEST.find((item) => item.id === componentData.componentId);
  }, [componentData.componentId]);

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setSelectedComponentId(componentData.instanceId);
    setIsDragging(true);
    setIsDraggingObject(true);

    if (e.target) {
      e.target.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    e.stopPropagation();

    const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -componentData.position[1]);
    const targetPoint = new THREE.Vector3();

    raycaster.setFromCamera(e.pointer, camera);
    if (raycaster.ray.intersectPlane(groundPlane, targetPoint)) {
      const snapX = Math.round(targetPoint.x / 0.025) * 0.025;
      const snapZ = Math.round(targetPoint.z / 0.025) * 0.025;
      updateComponentPosition(componentData.instanceId, [snapX, componentData.position[1], snapZ]);
    }
  };

  const handlePointerUp = (e) => {
    if (isDragging) {
      e.stopPropagation();
      setIsDragging(false);
      setIsDraggingObject(false);
      if (e.target) {
        e.target.releasePointerCapture(e.pointerId);
      }
    }
  };

  return (
    <group
      ref={groupRef}
      position={componentData.position}
      rotation={componentData.rotation}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <ModelRenderer
        componentData={componentData}
        manifestMeta={manifestMeta}
        selected={isSelected}
      />
    </group>
  );
}
