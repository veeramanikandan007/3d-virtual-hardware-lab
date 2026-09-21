import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import {
  Breadboard3D,
  Resistor3D,
  LED3D,
  Capacitor3D,
  Diode3D,
  Transistor3D,
  IC3D,
  Microcontroller3D,
  Battery3D,
  Switch3D,
  Sensor3D,
  Motor3D,
  RealisticWire3D
} from './RealisticHardware3D';

function CameraController({ viewMode }) {
  const controlsRef = useRef();

  useEffect(() => {
    if (!controlsRef.current) return;
    const controls = controlsRef.current;
    switch (viewMode) {
      case 'Top':
        controls.object.position.set(0, 0.35, 0.001);
        controls.target.set(0, 0, 0);
        break;
      case 'Front':
        controls.object.position.set(0, 0.02, 0.35);
        controls.target.set(0, 0, 0);
        break;
      case 'Side':
        controls.object.position.set(0.35, 0.05, 0);
        controls.target.set(0, 0, 0);
        break;
      case 'Isometric':
        controls.object.position.set(0.25, 0.25, 0.25);
        controls.target.set(0, 0, 0);
        break;
      case '3D View':
      default:
        controls.object.position.set(0.18, 0.18, 0.22);
        controls.target.set(0, 0, 0);
        break;
    }
    controls.update();
  }, [viewMode]);

  return <OrbitControls ref={controlsRef} makeDefault minDistance={0.08} maxDistance={0.8} />;
}

export function ThreeDCanvas({ viewMode = '3D View', setViewMode, selectedComponent, onSelectComponent, placedComponents = [], onDropComponent }) {
  const selectedId = selectedComponent ? selectedComponent.id : 'resistor-220';
  const [activeTool, setActiveTool] = useState('select');

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('application/json');
    if (!data) return;
    try {
      const item = JSON.parse(data);
      if (onDropComponent) {
        // Calculate offset position on breadboard
        const offsetX = (Math.random() - 0.5) * 0.1;
        const offsetZ = (Math.random() - 0.5) * 0.04;
        onDropComponent(item, [offsetX, 0.005, offsetZ]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const renderDynamicComponent = (comp, index) => {
    const isSelected = selectedId === comp.instanceId || selectedId === comp.id;
    const pos = comp.position || [0.02, 0.005, -0.015];

    switch (comp.type) {
      case 'resistor':
        return (
          <Resistor3D
            key={comp.instanceId || index}
            position={pos}
            selected={isSelected}
            onClick={() => onSelectComponent && onSelectComponent(comp)}
          />
        );
      case 'capacitor':
        return (
          <Capacitor3D
            key={comp.instanceId || index}
            position={pos}
            selected={isSelected}
            onClick={() => onSelectComponent && onSelectComponent(comp)}
          />
        );
      case 'led':
        return (
          <LED3D
            key={comp.instanceId || index}
            position={pos}
            color={comp.color || '#FF0000'}
            isPowered={true}
            selected={isSelected}
            onClick={() => onSelectComponent && onSelectComponent(comp)}
          />
        );
      case 'transistor':
        return (
          <Transistor3D
            key={comp.instanceId || index}
            position={pos}
            selected={isSelected}
            onClick={() => onSelectComponent && onSelectComponent(comp)}
          />
        );
      case 'diode':
        return (
          <Diode3D
            key={comp.instanceId || index}
            position={pos}
            selected={isSelected}
            onClick={() => onSelectComponent && onSelectComponent(comp)}
          />
        );
      case 'ic':
        return (
          <IC3D
            key={comp.instanceId || index}
            position={pos}
            selected={isSelected}
            onClick={() => onSelectComponent && onSelectComponent(comp)}
          />
        );
      case 'microcontroller':
        return (
          <Microcontroller3D
            key={comp.instanceId || index}
            position={pos}
            selected={isSelected}
            onClick={() => onSelectComponent && onSelectComponent(comp)}
          />
        );
      case 'battery':
        return (
          <Battery3D
            key={comp.instanceId || index}
            position={pos}
            selected={isSelected}
            onClick={() => onSelectComponent && onSelectComponent(comp)}
          />
        );
      case 'switch':
        return (
          <Switch3D
            key={comp.instanceId || index}
            position={pos}
            selected={isSelected}
            onClick={() => onSelectComponent && onSelectComponent(comp)}
          />
        );
      case 'sensor':
        return (
          <Sensor3D
            key={comp.instanceId || index}
            position={pos}
            selected={isSelected}
            onClick={() => onSelectComponent && onSelectComponent(comp)}
          />
        );
      case 'motor':
        return (
          <Motor3D
            key={comp.instanceId || index}
            position={pos}
            selected={isSelected}
            onClick={() => onSelectComponent && onSelectComponent(comp)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      style={{ width: '100%', height: '100%', position: 'relative', background: '#F4F8F8' }}
    >
      {/* Top-Left Toolbar Matching Reference Design (Teal Active Buttons) */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        background: '#FFFFFF',
        border: '1px solid #DCE8E8',
        padding: '4px 6px',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(20, 70, 70, 0.06)'
      }}>
        {[
          { id: 'select', icon: '↖', label: 'Select' },
          { id: 'move', icon: '✢', label: 'Move' },
          { id: 'rotate', icon: '🔄', label: 'Rotate' },
          { id: 'pan', icon: '✋', label: 'Pan' },
          { id: 'zoom', icon: '🔍', label: 'Zoom' },
          { id: 'reset', icon: '↺', label: 'Reset' }
        ].map((tool) => {
          const isActive = activeTool === tool.id;
          return (
            <button
              key={tool.id}
              onClick={() => {
                setActiveTool(tool.id);
                if (tool.id === 'reset' && setViewMode) setViewMode('3D View');
              }}
              title={tool.label}
              style={{
                background: isActive ? '#DDF5F3' : 'transparent',
                border: 'none',
                color: isActive ? '#159C9C' : '#123047',
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: isActive ? '700' : '400',
                transition: 'background 0.2s ease, color 0.2s ease'
              }}
            >
              {tool.icon}
            </button>
          );
        })}
      </div>

      {/* Top-Right Orientation Gizmo Visual Indicator */}
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '16px',
        zIndex: 20,
        width: '44px',
        height: '44px',
        background: 'rgba(255, 255, 255, 0.9)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10px',
        fontWeight: '700',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
      }}>
        <svg width="32" height="32" viewBox="0 0 32 32">
          <line x1="16" y1="16" x2="26" y2="22" stroke="#DC2626" strokeWidth="2" />
          <line x1="16" y1="16" x2="6" y2="22" stroke="#16A34A" strokeWidth="2" />
          <line x1="16" y1="16" x2="16" y2="4" stroke="#2563EB" strokeWidth="2" />
          <text x="27" y="24" fontSize="8" fill="#DC2626" fontWeight="bold">X</text>
          <text x="2" y="24" fontSize="8" fill="#16A34A" fontWeight="bold">Y</text>
          <text x="14" y="4" fontSize="8" fill="#2563EB" fontWeight="bold">Z</text>
        </svg>
      </div>

      <Canvas camera={{ position: [0.18, 0.18, 0.22], fov: 45 }} shadows>
        {/* Soft Ambient & Directional Lighting */}
        <ambientLight intensity={1.6} color="#FFFFFF" />
        <directionalLight position={[0.5, 0.8, 0.5]} intensity={2.2} castShadow shadow-mapSize={[1024, 1024]} />
        <directionalLight position={[-0.5, 0.4, -0.5]} intensity={0.6} color="#FFE162" />

        {/* Clean Engineering Grid Base */}
        <Grid args={[2, 2]} cellSize={0.02} sectionSize={0.1} cellColor="#E5E5E0" sectionColor="#D0D0CA" fadeDistance={3} position={[0, -0.001, 0]} />

        {/* 1. Realistic Solderless Breadboard */}
        <Breadboard3D
          position={[0, 0, 0]}
          selected={selectedId === 'breadboard-830'}
          onClick={() => onSelectComponent && onSelectComponent({ id: 'breadboard-830', name: 'Solderless Breadboard', category: 'Breadboard', voltage: '5V Rail', status: 'Active' })}
        />

        {/* Default Circuit Setup matching reference image */}
        {/* 9V Battery Pack */}
        <Battery3D
          position={[-0.14, 0, 0]}
          selected={selectedId === 'battery-9v'}
          onClick={() => onSelectComponent && onSelectComponent({ id: 'battery-9v', name: '9V Battery Pack', category: 'Power Source', type: 'battery', voltage: '9.0 V DC', current: '500 mAh', status: 'Active' })}
        />

        {/* 220Ω Resistor R1 */}
        <Resistor3D
          position={[0.02, 0.005, -0.015]}
          selected={selectedId === 'resistor-220'}
          onClick={() => onSelectComponent && onSelectComponent({ id: 'resistor-220', name: 'Resistor R1', category: 'Passive Component', type: 'resistor', resistance: '220 Ω', voltage: '5.0 V', current: '22.7 mA', power: '0.25 W', temperature: '32.4 °C', status: 'Active' })}
        />

        {/* Glowing Red 5mm LED */}
        <LED3D
          position={[0.05, 0.005, -0.015]}
          color="#FF0000"
          isPowered={true}
          selected={selectedId === 'led-red'}
          onClick={() => onSelectComponent && onSelectComponent({ id: 'led-red', name: 'Red LED 1', category: 'Light Emitting Diode', type: 'led', voltage: '2.0 V', current: '20.0 mA', power: '0.04 W', temperature: '28.1 °C', status: 'Active (Glowing)' })}
        />

        {/* Electrolytic Capacitor */}
        <Capacitor3D
          position={[-0.02, 0.005, -0.005]}
          selected={selectedId === 'capacitor-10uf'}
          onClick={() => onSelectComponent && onSelectComponent({ id: 'capacitor-10uf', name: '10µF Capacitor C1', category: 'Passive Component', type: 'capacitor', capacitance: '10 µF', voltage: '16.0 V', power: '0.01 W', temperature: '25.0 °C', status: 'Active' })}
        />

        {/* NE555 Timer IC */}
        <IC3D
          position={[0.00, 0.005, 0.015]}
          selected={selectedId === 'ic-ne555'}
          onClick={() => onSelectComponent && onSelectComponent({ id: 'ic-ne555', name: 'NE555 Timer IC', category: 'Integrated Circuit', type: 'ic', voltage: '5.0 V', current: '10 mA', power: '0.05 W', status: 'Active' })}
        />

        {/* Tactile Push Button Switch */}
        <Switch3D
          position={[0.04, 0.005, 0.018]}
          selected={selectedId === 'switch-tactile'}
          onClick={() => onSelectComponent && onSelectComponent({ id: 'switch-tactile', name: 'Tactile Switch SW1', category: 'Switch', type: 'switch', voltage: '5.0 V', status: 'Closed' })}
        />

        {/* 2N2222 Transistor Q1 */}
        <Transistor3D
          position={[0.07, 0.005, -0.015]}
          selected={selectedId === 'transistor-2n2222'}
          onClick={() => onSelectComponent && onSelectComponent({ id: 'transistor-2n2222', name: '2N2222 Transistor Q1', category: 'Semiconductor', type: 'transistor', voltage: '40 V max', current: '15 mA', status: 'Active' })}
        />

        {/* Render Dynamically Dropped Components */}
        {placedComponents.map((comp, i) => renderDynamicComponent(comp, i))}

        {/* 3D Curved Circuit Wires matching reference image */}
        <RealisticWire3D start={[-0.146, 0.043, 0]} end={[-0.095, 0.0102, -0.034]} color="#EA580C" />
        <RealisticWire3D start={[-0.134, 0.043, 0]} end={[-0.095, 0.0102, -0.031]} color="#1E293B" />
        <RealisticWire3D start={[-0.07, 0.012, -0.015]} end={[-0.02, 0.012, -0.005]} color="#16A34A" />
        <RealisticWire3D start={[-0.02, 0.012, -0.005]} end={[0.02, 0.012, -0.015]} color="#DC2626" />
        <RealisticWire3D start={[0.035, 0.012, -0.015]} end={[0.048, 0.012, -0.015]} color="#EA580C" />
        <RealisticWire3D start={[0.052, 0.012, -0.015]} end={[0.07, 0.012, -0.015]} color="#CA8A04" />
        <RealisticWire3D start={[-0.04, 0.012, 0.02]} end={[-0.04, 0.0102, -0.031]} color="#EAB308" />

        <CameraController viewMode={viewMode} />
      </Canvas>
    </div>
  );
}




