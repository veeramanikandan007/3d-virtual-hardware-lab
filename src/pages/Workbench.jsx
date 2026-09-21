import React, { useState } from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { ThreeDCanvas } from '../components/workbench/ThreeDCanvas';
import { ComponentPalette } from '../components/workbench/ComponentPalette';
import { ComponentProperties } from '../components/workbench/ComponentProperties';
import { TelemetryGraph } from '../components/workbench/TelemetryGraph';
import { SimulationControls } from '../components/circuit/SimulationControls';
import { HardwareConnection } from '../components/serial/HardwareConnection';
import { SerialMonitor } from '../components/serial/SerialMonitor';
import { useCircuit } from '../hooks/useCircuit';

export function Workbench({ activeTab }) {
  const { validate } = useCircuit();
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [placedComponents, setPlacedComponents] = useState([]);
  const [viewMode, setViewMode] = useState('3D View');
  const [showLeftSidebar, setShowLeftSidebar] = useState(true);
  const [showRightSidebar, setShowRightSidebar] = useState(true);

  const handleAddComponent = (item, customPosition) => {
    const instanceId = `${item.id}-${Date.now()}`;
    const newComponent = {
      ...item,
      instanceId,
      position: customPosition || [(Math.random() - 0.5) * 0.12, 0.005, (Math.random() - 0.5) * 0.04],
      status: 'Active'
    };
    setPlacedComponents((prev) => [...prev, newComponent]);
    setSelectedComponent(newComponent);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px)', width: '100vw', overflow: 'hidden', background: 'var(--bg-main)' }}>
      {/* Workbench Layout Body */}
      <div style={{ display: 'flex', flex: 1, position: 'relative', overflow: 'hidden' }}>
        
        {/* Left Column - Component Library (22% width) */}
        <div 
          style={{ 
            display: showLeftSidebar ? 'block' : 'none',
            width: '22%',
            minWidth: '260px',
            maxWidth: '320px',
            height: '100%'
          }} 
          className="workbench-left-col"
        >
          <Sidebar title="Components" icon="🧩">
            <ComponentPalette
              onSelect={(item) => setSelectedComponent(item)}
              onAddComponent={(item) => handleAddComponent(item)}
            />
          </Sidebar>
        </div>

        {/* Center 3D Workspace (56% - 62% width) */}
        <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          
          {/* Top Simulation Control Bar */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            right: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 30,
            pointerEvents: 'none',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ pointerEvents: 'auto' }}>
              <SimulationControls onRun={validate} onPause={() => {}} onReset={() => {}} />
            </div>

            <div style={{ display: 'flex', gap: '8px', pointerEvents: 'auto' }}>
              <button 
                onClick={() => setShowLeftSidebar(!showLeftSidebar)} 
                className="btn-outline" 
                style={{ padding: '6px 12px', fontSize: '12px', background: '#FFFFFF', minHeight: '36px' }}
              >
                {showLeftSidebar ? 'Components ✕' : 'Components'}
              </button>

              <button 
                onClick={() => setShowRightSidebar(!showRightSidebar)} 
                className="btn-outline" 
                style={{ padding: '6px 12px', fontSize: '12px', background: '#FFFFFF', minHeight: '36px' }}
              >
                {showRightSidebar ? 'Properties ✕' : 'Properties'}
              </button>

              <div className="desktop-only">
                <HardwareConnection />
              </div>
            </div>
          </div>

          {/* 3D Canvas Viewport */}
          <div style={{ flex: 1, position: 'relative', width: '100%', height: '100%' }}>
            <ThreeDCanvas
              viewMode={viewMode}
              setViewMode={setViewMode}
              selectedComponent={selectedComponent}
              onSelectComponent={(comp) => setSelectedComponent(comp)}
              placedComponents={placedComponents}
              onDropComponent={(item, pos) => handleAddComponent(item, pos)}
            />

            {/* Floating Serial Console Trigger */}
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              zIndex: 25
            }}>
              <SerialMonitor />
            </div>
          </div>

          {/* Collapsible Telemetry Graph / Simulation Data */}
          <div style={{ zIndex: 20, position: 'relative' }}>
            <TelemetryGraph />
          </div>
        </div>

        {/* Right Column - Properties (22% width) */}
        <div 
          style={{ 
            display: showRightSidebar ? 'block' : 'none',
            width: '22%',
            minWidth: '260px',
            maxWidth: '320px',
            height: '100%'
          }} 
          className="workbench-right-col"
        >
          <Sidebar title="Properties" icon="⚙️">
            <ComponentProperties selectedComponent={selectedComponent} />
          </Sidebar>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .workbench-left-col, .workbench-right-col {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 280px !important;
            z-index: 80;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          }
          .workbench-left-col { left: 0; }
          .workbench-right-col { right: 0; }
        }
      `}</style>
    </div>
  );
}
