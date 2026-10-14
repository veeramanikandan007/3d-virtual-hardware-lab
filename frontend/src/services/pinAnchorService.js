import * as THREE from 'three';

/**
 * pinAnchorService.js — Authoritative Local-to-World Coordinate Transformations
 */

export const pinAnchorService = {
  /**
   * Calculates the exact 3D world coordinates of a pin anchor
   * by applying component translation, Euler rotation, and scaling.
   */
  calculateWorldPosition: (componentPos, componentRot = [0, 0, 0], localPinPos = [0, 0, 0]) => {
    const worldVec = new THREE.Vector3(...localPinPos);

    // Apply Euler rotation
    const euler = new THREE.Euler(...componentRot, 'XYZ');
    worldVec.applyEuler(euler);

    // Apply Translation
    worldVec.add(new THREE.Vector3(...componentPos));

    return [worldVec.x, worldVec.y, worldVec.z];
  }
};
