/**
 * workbenchSerializer.js — Serialization & Restoration Service for Member 4
 * Validates and converts between active workbench state and versioned JSON schemas
 */

export const SCHEMA_VERSION = 1;

export const workbenchSerializer = {
  /**
   * Serialize active workbench state into a clean JSON structure
   */
  serialize: (placedComponents, placedWires) => {
    return {
      schema_version: SCHEMA_VERSION,
      timestamp: Date.now(),
      components: placedComponents.map((c) => ({
        instance_id: c.instanceId,
        component_id: c.componentId,
        name: c.name,
        category: c.category,
        position: [...c.position],
        rotation: [...(c.rotation || [0, 0, 0])]
      })),
      wires: placedWires.map((w) => ({
        wire_id: w.wireId,
        from: {
          instance_id: w.from.instanceId,
          pin_id: w.from.pinId,
          pin_name: w.from.name
        },
        to: {
          instance_id: w.to.instanceId,
          pin_id: w.to.pinId,
          pin_name: w.to.name
        },
        color: w.color
      }))
    };
  },

  /**
   * Deserialize and validate incoming JSON data
   */
  deserialize: (jsonData) => {
    if (!jsonData || typeof jsonData !== 'object') {
      throw new Error('Invalid circuit file: JSON root must be an object.');
    }

    if (jsonData.schema_version !== SCHEMA_VERSION) {
      console.warn(`[WorkbenchSerializer] Schema version mismatch: expected ${SCHEMA_VERSION}, got ${jsonData.schema_version}`);
    }

    if (!Array.isArray(jsonData.components)) {
      throw new Error('Invalid circuit file: missing components array.');
    }

    const restoredComponents = jsonData.components.map((c) => ({
      instanceId: c.instance_id,
      componentId: c.component_id,
      name: c.name,
      category: c.category,
      position: c.position || [0, 0.05, 0],
      rotation: c.rotation || [0, 0, 0]
    }));

    const validInstanceIds = new Set(restoredComponents.map((c) => c.instanceId));

    const restoredWires = (jsonData.wires || [])
      .filter((w) => validInstanceIds.has(w.from.instance_id) && validInstanceIds.has(w.to.instance_id))
      .map((w) => ({
        wireId: w.wire_id,
        from: {
          instanceId: w.from.instance_id,
          pinId: w.from.pin_id,
          name: w.from.pin_name
        },
        to: {
          instanceId: w.to.instance_id,
          pinId: w.to.pin_id,
          name: w.to.pin_name
        },
        color: w.color || '#ef4444'
      }));

    return {
      components: restoredComponents,
      wires: restoredWires
    };
  }
};
