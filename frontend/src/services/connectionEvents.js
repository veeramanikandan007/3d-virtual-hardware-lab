// connectionEvents.js — Event Bus for Member 2 (Circuit/Netlist) & Member 4 Integration
// All payloads use strictly plain serializable primitives (no Three.js Vector3 or Mesh objects)

class ConnectionEventEmitter {
  constructor() {
    this.listeners = new Set();
  }

  /**
   * Subscribe to all workbench connection and component events
   * @param {Function} callback - Called with { type: string, payload: object, timestamp: number }
   * @returns {Function} unsubscribe function
   */
  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  /**
   * Emit an event to all subscribers
   */
  emit(type, payload) {
    const event = {
      type,
      payload,
      timestamp: Date.now()
    };
    this.listeners.forEach((cb) => {
      try {
        cb(event);
      } catch (err) {
        console.error(`[ConnectionEvents] Error in subscriber for event ${type}:`, err);
      }
    });
  }

  // Predefined event helpers
  emitComponentAdded(component) {
    this.emit('COMPONENT_ADDED', {
      component_id: component.instanceId,
      type: component.componentId,
      name: component.name,
      position: [...component.position],
      rotation: [...(component.rotation || [0, 0, 0])]
    });
  }

  emitComponentMoved(componentId, position, rotation) {
    this.emit('COMPONENT_MOVED', {
      component_id: componentId,
      position: [...position],
      rotation: [...rotation]
    });
  }

  emitComponentRemoved(componentId) {
    this.emit('COMPONENT_REMOVED', {
      component_id: componentId
    });
  }

  emitPinSelected(componentId, pinId, pinMetadata) {
    this.emit('PIN_SELECTED', {
      component_id: componentId,
      pin_id: pinId,
      pin_name: pinMetadata?.name,
      pin_type: pinMetadata?.type
    });
  }

  emitWireCreated(wire) {
    this.emit('WIRE_CREATED', {
      wire_id: wire.wireId,
      source: {
        component_id: wire.from.instanceId,
        pin_id: wire.from.pinId,
        pin_name: wire.from.name
      },
      destination: {
        component_id: wire.to.instanceId,
        pin_id: wire.to.pinId,
        pin_name: wire.to.name
      },
      color: wire.color
    });
  }

  emitWireDeleted(wireId) {
    this.emit('WIRE_DELETED', {
      wire_id: wireId
    });
  }

  emitWireRerouted(wireId, newColor) {
    this.emit('WIRE_REROUTED', {
      wire_id: wireId,
      color: newColor
    });
  }
}

export const connectionEvents = new ConnectionEventEmitter();
