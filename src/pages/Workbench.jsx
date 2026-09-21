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
import { useCircuit } from '../hooks/useCircuit';
import { Cpu, Crosshair } from 'lucide-react';

function WorkbenchContent() {
  const { validate } = useCircuit();
  const [showCalibrator, setShowCalibrator] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', background: '#090d16', overflow: 'hidden' }}>
      {/* TOP HEADER */}
      <header
        style={{
          height: '52px',
          background: '#0f172a',
          borderBottom: '1px solid #1e293b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          color: '#f8fafc',
          zIndex: 20
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ background: '#0284c7', padding: '6px', borderRadius: '8px', display: 'flex' }}>
            <Cpu size={20} color="#fff" />
          </div>
          <span style={{ fontWeight: '700', fontSize: '16px', letterSpacing: '-0.02em' }}>
            3D Virtual Hardware Lab
          </span>
          <span style={{ fontSize: '11px', background: '#334155', padding: '2px 8px', borderRadius: '12px', color: '#38bdf8' }}>
            Member 1 Workbench
          </span>
        </div>

        {/* Center Editing Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <WorkbenchToolbar />
          <button
            onClick={() => setShowCalibrator(!showCalibrator)}
            title="Toggle Developer Pin Calibrator"
            style={{
              background: showCalibrator ? '#0284c7' : '#1e293b',
              border: '1px solid #334155',
              color: '#f8fafc',
              padding: '6px 10px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px'
            }}
          >
            <Crosshair size={14} /> Calibrate
          </button>
        </div>

        {/* Right Simulation & Serial Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <HardwareConnection />
          <SimulationControls onRun={validate} onPause={() => {}} onReset={() => {}} />
        </div>
      </header>

      {/* MAIN CONTENT PANELS */}
      <div style={{ display: 'flex', flex: 1, position: 'relative', overflow: 'hidden' }}>
        {/* LEFT SIDEBAR - COMPONENT PALETTE */}
        <aside style={{ width: '280px', background: '#0b1120', borderRight: '1px solid #1e293b', overflowY: 'auto' }}>
          <ComponentPalette />
        </aside>

        {/* CENTER - 3D WORKSPACE CANVAS */}
        <main style={{ flex: 1, position: 'relative', height: '100%' }}>
          <ThreeDCanvas />

          {/* Floating Wire Color & Wire Count Toolbar */}
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
        </main>

        {/* RIGHT SIDEBAR - DETAILS & GPIO PANEL */}
        <aside style={{ width: '320px', background: '#0b1120', borderLeft: '1px solid #1e293b', overflowY: 'auto' }}>
          <DetailsPanel />
        </aside>
      </div>

      {/* BOTTOM STATUS FOOTER */}
      <footer
        style={{
          height: '28px',
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
            ● WebGL 3D Canvas Active
          </span>
          <span>Shortcuts: Ctrl+Z (Undo) • Ctrl+Y (Redo) • Drag (Move)</span>
        </div>
        <div>Member 1 — 3D Electronics Workbench Frontend</div>
      </footer>
    </div>
  );
}

export function Workbench() {
  return (
    <WorkbenchProvider>
      <WorkbenchContent />
    </WorkbenchProvider>
  );
}
