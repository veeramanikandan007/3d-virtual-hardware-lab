import React, { useState } from 'react';
import { WorkbenchProvider } from '../context/WorkbenchContext';
import { ComponentPalette } from '../components/workbench/ComponentPalette';
import { ThreeDCanvas } from '../components/workbench/ThreeDCanvas';
import { DetailsPanel } from '../components/workbench/DetailsPanel';
import { WireColorPicker } from '../components/workbench/WireColorPicker';
import { WorkbenchToolbar } from '../components/workbench/WorkbenchToolbar';
import { CalibrationTool } from '../components/workbench/CalibrationTool';
import { SimulationControls } from '../components/circuit/SimulationControls';
import { HardwareConnection } from '../components/serial/HardwareConnection';
import { SerialMonitor } from '../components/serial/SerialMonitor';
import { DiagnosticPanel } from '../components/circuit/DiagnosticPanel';
import { VoiceAssistant } from '../components/assistant/VoiceAssistant';
import { TelemetryGraph } from '../components/workbench/TelemetryGraph';
import { useCircuit } from '../hooks/useCircuit';
import { Crosshair, Eye, Settings, Activity, Mic, Layers } from 'lucide-react';

function WorkbenchContent({ activeTab }) {
  const { validate, diagnostics } = useCircuit();
  const [showCalibrator, setShowCalibrator] = useState(false);
  const [showLeftSidebar, setShowLeftSidebar] = useState(true);
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  const [rightTab, setRightTab] = useState('properties'); // 'properties' | 'diagnostics' | 'voice'
  const [viewMode, setViewMode] = useState('3D View');

  const viewModes = ['3D View', 'Top', 'Front', 'Side', 'Isometric'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 56px)', width: '100vw', background: '#090d16', overflow: 'hidden' }}>
      
      {/* TOP HEADER CONTROLS */}
      <header
        style={{
          minHeight: '52px',
          background: '#0f172a',
          borderBottom: '1px solid #1e293b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '4px 16px',
          color: '#f8fafc',
          zIndex: 20,
          flexWrap: 'wrap',
          gap: '8px'
        }}
      >
        {/* Left: View Mode Presets & Sidebar Toggles */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setShowLeftSidebar(!showLeftSidebar)}
            style={{
              background: showLeftSidebar ? '#0284c7' : '#1e293b',
              color: '#fff',
              border: '1px solid #334155',
              padding: '5px 10px',
              borderRadius: '6px',
              fontSize: '11px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
            title="Toggle Component Palette"
          >
            <Layers size={13} /> {showLeftSidebar ? 'Catalog' : 'Catalog'}
          </button>

          {/* Perspective View Switcher */}
          <div style={{ display: 'flex', background: '#020617', padding: '2px', borderRadius: '6px', border: '1px solid #1e293b' }}>
            {viewModes.map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                style={{
                  background: viewMode === mode ? '#0284c7' : 'transparent',
                  color: viewMode === mode ? '#ffffff' : '#94a3b8',
                  border: 'none',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  cursor: 'pointer',
                  fontWeight: viewMode === mode ? '600' : '400',
                  transition: 'all 0.15s ease'
                }}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Center: Workbench Action Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <WorkbenchToolbar />
          
          <button
            onClick={() => setShowCalibrator(!showCalibrator)}
            title="Toggle Pin Calibrator"
            style={{
              background: showCalibrator ? '#0284c7' : '#1e293b',
              border: '1px solid #334155',
              color: '#f8fafc',
              padding: '5px 8px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '11px'
            }}
          >
            <Crosshair size={13} /> Calibrate
          </button>
        </div>

        {/* Right: Simulation & Hardware Bridge Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <HardwareConnection />
          <SimulationControls onRun={validate} onPause={() => {}} onReset={() => {}} />
          <button
            onClick={() => setShowRightSidebar(!showRightSidebar)}
            style={{
              background: showRightSidebar ? '#0284c7' : '#1e293b',
              color: '#fff',
              border: '1px solid #334155',
              padding: '5px 10px',
              borderRadius: '6px',
              fontSize: '11px',
              cursor: 'pointer'
            }}
            title="Toggle Right Panel"
          >
            {showRightSidebar ? 'Panels ✕' : 'Panels'}
          </button>
        </div>
      </header>

      {/* MAIN WORKBENCH LAYOUT */}
      <div style={{ display: 'flex', flex: 1, position: 'relative', overflow: 'hidden' }}>
        
        {/* LEFT SIDEBAR - COMPONENT PALETTE */}
        {showLeftSidebar && (
          <aside style={{ width: '280px', minWidth: '260px', maxWidth: '320px', background: '#0b1120', borderRight: '1px solid #1e293b', overflowY: 'auto', zIndex: 10 }}>
            <ComponentPalette />
          </aside>
        )}

        {/* CENTER - 3D WORKSPACE CANVAS */}
        <main style={{ flex: 1, position: 'relative', height: '100%', minWidth: 0 }}>
          <ThreeDCanvas viewMode={viewMode} />

          {/* Floating Wire Color & Wire Toolbar */}
          <div style={{ position: 'absolute', top: '16px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
            <WireColorPicker />
          </div>

          {/* Developer Pin Calibration Floating Tool */}
          {showCalibrator && (
            <div style={{ position: 'absolute', top: '70px', right: '16px', zIndex: 15 }}>
              <CalibrationTool />
            </div>
          )}

          {/* Bottom Floating Serial Monitor */}
          <div style={{ position: 'absolute', bottom: '16px', left: '16px', width: '380px', zIndex: 10 }}>
            <SerialMonitor />
          </div>

          {/* Telemetry Graph Overlay (docked bottom-right) */}
          <div style={{ position: 'absolute', bottom: '16px', right: '16px', width: '340px', zIndex: 10 }}>
            <TelemetryGraph />
          </div>
        </main>

        {/* RIGHT SIDEBAR - MULTI-TAB INSPECTION & AI ASSISTANT */}
        {showRightSidebar && (
          <aside style={{ width: '320px', minWidth: '280px', maxWidth: '360px', background: '#0b1120', borderLeft: '1px solid #1e293b', display: 'flex', flexDirection: 'column', zIndex: 10 }}>
            {/* Panel Tab Switcher */}
            <div style={{ display: 'flex', borderBottom: '1px solid #1e293b', background: '#0f172a' }}>
              <button
                onClick={() => setRightTab('properties')}
                style={{
                  flex: 1,
                  padding: '10px 4px',
                  background: rightTab === 'properties' ? '#0b1120' : 'transparent',
                  color: rightTab === 'properties' ? '#38bdf8' : '#94a3b8',
                  border: 'none',
                  borderBottom: rightTab === 'properties' ? '2px solid #38bdf8' : '2px solid transparent',
                  fontSize: '11px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px'
                }}
              >
                <Settings size={13} /> Properties
              </button>

              <button
                onClick={() => setRightTab('diagnostics')}
                style={{
                  flex: 1,
                  padding: '10px 4px',
                  background: rightTab === 'diagnostics' ? '#0b1120' : 'transparent',
                  color: rightTab === 'diagnostics' ? '#38bdf8' : '#94a3b8',
                  border: 'none',
                  borderBottom: rightTab === 'diagnostics' ? '2px solid #38bdf8' : '2px solid transparent',
                  fontSize: '11px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px'
                }}
              >
                <Activity size={13} /> Diagnostics
              </button>

              <button
                onClick={() => setRightTab('voice')}
                style={{
                  flex: 1,
                  padding: '10px 4px',
                  background: rightTab === 'voice' ? '#0b1120' : 'transparent',
                  color: rightTab === 'voice' ? '#38bdf8' : '#94a3b8',
                  border: 'none',
                  borderBottom: rightTab === 'voice' ? '2px solid #38bdf8' : '2px solid transparent',
                  fontSize: '11px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px'
                }}
              >
                <Mic size={13} /> Voice AI
              </button>
            </div>

            {/* Tab Contents */}
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {rightTab === 'properties' && <DetailsPanel />}
              {rightTab === 'diagnostics' && <DiagnosticPanel diagnostics={diagnostics} />}
              {rightTab === 'voice' && (
                <div style={{ padding: '16px' }}>
                  <VoiceAssistant />
                </div>
              )}
            </div>
          </aside>
        )}
      </div>

      {/* BOTTOM STATUS FOOTER */}
      <footer
        style={{
          height: '26px',
          background: '#0f172a',
          borderTop: '1px solid #1e293b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
          fontSize: '11px',
          color: '#64748b',
          zIndex: 20
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#10b981' }}>
            ● WebGL 3D Lab Active
          </span>
          <span>Shortcuts: Ctrl+Z (Undo) • Ctrl+Y (Redo) • Drag (Move component) • Click pins to wire</span>
        </div>
        <div>Unified 3D Virtual Hardware Laboratory</div>
      </footer>
    </div>
  );
}

export function Workbench({ activeTab }) {
  return (
    <WorkbenchProvider>
      <WorkbenchContent activeTab={activeTab} />
    </WorkbenchProvider>
  );
}
export default Workbench;
