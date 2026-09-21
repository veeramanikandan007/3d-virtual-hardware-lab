import React from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { ThreeDCanvas } from '../components/workbench/ThreeDCanvas';
import { ComponentPalette } from '../components/workbench/ComponentPalette';
import { DiagnosticPanel } from '../components/circuit/DiagnosticPanel';
import { SimulationControls } from '../components/circuit/SimulationControls';
import { VoiceAssistant } from '../components/assistant/VoiceAssistant';
import { HardwareConnection } from '../components/serial/HardwareConnection';
import { SerialMonitor } from '../components/serial/SerialMonitor';
import { useCircuit } from '../hooks/useCircuit';

export function Workbench() {
  const { diagnostics, validate } = useCircuit();

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 56px)', width: '100%' }}>
      {/* Left Sidebar - Component Palette */}
      <Sidebar>
        <ComponentPalette />
      </Sidebar>

      {/* Main 3D Canvas */}
      <div style={{ flex: 1, position: 'relative' }}>
        <ThreeDCanvas />

        {/* Top Control Bar */}
        <div style={{ position: 'absolute', top: '15px', left: '15px', right: '15px', display: 'flex', justifyContent: 'space-between', zIndex: 10, pointerEvents: 'none' }}>
          <div style={{ pointerEvents: 'auto' }}>
            <SimulationControls onRun={validate} onPause={() => {}} onReset={() => {}} />
          </div>
          <div style={{ pointerEvents: 'auto' }}>
            <HardwareConnection />
          </div>
        </div>

        {/* Bottom Floating Serial Console */}
        <div style={{ position: 'absolute', bottom: '15px', left: '15px', width: '380px', zIndex: 10 }}>
          <SerialMonitor />
        </div>
      </div>

      {/* Right Sidebar - Diagnostics & Voice Assistant */}
      <Sidebar>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', padding: '15px' }}>
          <VoiceAssistant />
          <DiagnosticPanel diagnostics={diagnostics} />
        </div>
      </Sidebar>
    </div>
  );
}
