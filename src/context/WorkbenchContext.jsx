import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { componentsData } from '../data/components';
import { connectionEvents } from '../services/connectionEvents';
import { workbenchSerializer } from '../services/workbenchSerializer';

const WorkbenchContext = createContext();

export function WorkbenchProvider({ children }) {
  const [placedComponents, setPlacedComponents] = useState([
    {
      instanceId: 'breadboard-1',
      componentId: 'breadboard',
      name: '830-Point Solderless Breadboard',
      category: 'Prototyping',
      position: [0, 0, 0],
      rotation: [0, 0, 0]
    },
    {
      instanceId: 'esp32-1',
      componentId: 'esp32',
      name: 'ESP32 Dev Board',
      category: 'Microcontroller',
      position: [-0.6, 0.05, 0.4],
      rotation: [0, 0, 0]
    },
    {
      instanceId: 'led-1',
      componentId: 'led-red',
      name: 'Red LED (5mm)',
      category: 'Output',
      position: [0.6, 0.05, 0.4],
      rotation: [0, 0, 0]
    }
  ]);

  const [placedWires, setPlacedWires] = useState([
    {
      wireId: 'wire-demo-1',
      from: { instanceId: 'esp32-1', pinId: 'esp32-gpio2', name: 'GPIO2 (LED)' },
      to: { instanceId: 'led-1', pinId: 'led-anode', name: 'Anode (+)' },
      color: '#ef4444'
    }
  ]);

  const [selectedComponentId, setSelectedComponentId] = useState('esp32-1');
  const [selectedWireId, setSelectedWireId] = useState(null);
  const [activePinSource, setActivePinSource] = useState(null);
  const [hoveredPin, setHoveredPin] = useState(null);
  const [wireColor, setWireColor] = useState('#ef4444');
  const [isDraggingObject, setIsDraggingObject] = useState(false);

  // Undo / Redo History Stacks
  const historyStack = useRef([]);
  const redoStack = useRef([]);
  const isRestoringHistory = useRef(false);

  const pushHistoryState = (components, wires) => {
    if (isRestoringHistory.current) return;
    historyStack.current.push({
      components: JSON.parse(JSON.stringify(components)),
      wires: JSON.parse(JSON.stringify(wires))
    });
    if (historyStack.current.length > 30) historyStack.current.shift();
    redoStack.current = []; // clear redo on new user action
  };

  const undo = () => {
    if (historyStack.current.length === 0) return;
    isRestoringHistory.current = true;

    const prevState = historyStack.current.pop();
    redoStack.current.push({
      components: JSON.parse(JSON.stringify(placedComponents)),
      wires: JSON.parse(JSON.stringify(placedWires))
    });

    setPlacedComponents(prevState.components);
    setPlacedWires(prevState.wires);

    setTimeout(() => {
      isRestoringHistory.current = false;
    }, 50);
  };

  const redo = () => {
    if (redoStack.current.length === 0) return;
    isRestoringHistory.current = true;

    const nextState = redoStack.current.pop();
    historyStack.current.push({
      components: JSON.parse(JSON.stringify(placedComponents)),
      wires: JSON.parse(JSON.stringify(placedWires))
    });

    setPlacedComponents(nextState.components);
    setPlacedWires(nextState.wires);

    setTimeout(() => {
      isRestoringHistory.current = false;
    }, 50);
  };

  // Keyboard Shortcuts for Undo/Redo & Delete
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        if (e.shiftKey) {
          redo();
        } else {
          undo();
        }
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
        redo();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [placedComponents, placedWires]);

  const addComponent = (catalogId) => {
    const template = componentsData.find((c) => c.id === catalogId);
    if (!template) {
      console.warn('Component not found in catalog:', catalogId);
      return;
    }

    pushHistoryState(placedComponents, placedWires);

    const instanceId = `${catalogId}-${Date.now().toString().slice(-4)}`;
    // Stagger new components radially around workspace so they are immediately visible and not hidden under breadboard
    const count = placedComponents.length;
    const angle = (count * 0.75) % (Math.PI * 2);
    const radius = 0.6 + ((count % 3) * 0.15);
    const posX = Math.sin(angle) * radius;
    const posZ = Math.cos(angle) * radius;

    const newComp = {
      instanceId,
      componentId: catalogId,
      name: template.name,
      category: template.category,
      position: [parseFloat(posX.toFixed(2)), 0.05, parseFloat(posZ.toFixed(2))],
      rotation: [0, 0, 0]
    };

    setPlacedComponents((prev) => [...prev, newComp]);
    setSelectedComponentId(instanceId);
    connectionEvents.emitComponentAdded(newComp);
  };

  const removeComponent = (instanceId) => {
    pushHistoryState(placedComponents, placedWires);

    setPlacedComponents((prev) => prev.filter((c) => c.instanceId !== instanceId));
    setPlacedWires((prev) => prev.filter((w) => w.from.instanceId !== instanceId && w.to.instanceId !== instanceId));
    if (selectedComponentId === instanceId) setSelectedComponentId(null);
    connectionEvents.emitComponentRemoved(instanceId);
  };

  const updateComponentPosition = (instanceId, newPos, newRot) => {
    setPlacedComponents((prev) =>
      prev.map((c) => {
        if (c.instanceId === instanceId) {
          const updated = { ...c, position: newPos };
          if (newRot) updated.rotation = newRot;
          return updated;
        }
        return c;
      })
    );
    connectionEvents.emitComponentMoved(instanceId, newPos, newRot || [0, 0, 0]);
  };

  const rotateComponent = (instanceId) => {
    pushHistoryState(placedComponents, placedWires);
    setPlacedComponents((prev) =>
      prev.map((c) => {
        if (c.instanceId === instanceId) {
          const currentY = c.rotation ? c.rotation[1] : 0;
          const newY = (currentY + Math.PI / 2) % (Math.PI * 2);
          const newRot = [0, newY, 0];
          connectionEvents.emitComponentMoved(instanceId, c.position, newRot);
          return { ...c, rotation: newRot };
        }
        return c;
      })
    );
  };

  const handlePinClick = (pinData) => {
    connectionEvents.emitPinSelected(pinData.instanceId, pinData.pinId, pinData);

    if (!activePinSource) {
      setActivePinSource(pinData);
    } else {
      if (
        activePinSource.instanceId === pinData.instanceId &&
        activePinSource.pinId === pinData.pinId
      ) {
        setActivePinSource(null);
        return;
      }

      pushHistoryState(placedComponents, placedWires);

      const newWireId = `wire-${Date.now().toString().slice(-4)}`;
      const newWire = {
        wireId: newWireId,
        from: activePinSource,
        to: pinData,
        color: wireColor
      };

      setPlacedWires((prev) => [...prev, newWire]);
      connectionEvents.emitWireCreated(newWire);
      setActivePinSource(null);
    }
  };

  const removeWire = (wireId) => {
    pushHistoryState(placedComponents, placedWires);
    setPlacedWires((prev) => prev.filter((w) => w.wireId !== wireId));
    connectionEvents.emitWireDeleted(wireId);
    if (selectedWireId === wireId) setSelectedWireId(null);
  };

  const resetWorkbench = () => {
    pushHistoryState(placedComponents, placedWires);
    setPlacedComponents([]);
    setPlacedWires([]);
    setSelectedComponentId(null);
    setSelectedWireId(null);
    setActivePinSource(null);
  };

  const exportStateJSON = () => {
    return workbenchSerializer.serialize(placedComponents, placedWires);
  };

  const importStateJSON = (jsonData) => {
    try {
      const restored = workbenchSerializer.deserialize(jsonData);
      pushHistoryState(placedComponents, placedWires);
      setPlacedComponents(restored.components);
      setPlacedWires(restored.wires);
      setSelectedComponentId(null);
    } catch (err) {
      console.error('[WorkbenchContext] Failed to import state:', err);
      alert(err.message);
    }
  };

  return (
    <WorkbenchContext.Provider
      value={{
        placedComponents,
        placedWires,
        selectedComponentId,
        setSelectedComponentId,
        selectedWireId,
        setSelectedWireId,
        activePinSource,
        setActivePinSource,
        hoveredPin,
        setHoveredPin,
        wireColor,
        setWireColor,
        isDraggingObject,
        setIsDraggingObject,
        addComponent,
        removeComponent,
        updateComponentPosition,
        rotateComponent,
        handlePinClick,
        removeWire,
        undo,
        redo,
        resetWorkbench,
        exportStateJSON,
        importStateJSON,
        canUndo: historyStack.current.length > 0,
        canRedo: redoStack.current.length > 0
      }}
    >
      {children}
    </WorkbenchContext.Provider>
  );
}

export function useWorkbench() {
  return useContext(WorkbenchContext);
}
