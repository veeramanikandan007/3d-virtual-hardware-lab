import React from 'react';
import { CircuitStatus } from '../components/circuit/CircuitStatus';
import { SerialMonitor } from '../components/serial/SerialMonitor';

export function Dashboard() {
  return (
    <div style={{ padding: '30px' }}>
      <h2 style={{ color: '#61dafb', marginTop: 0 }}>Telemetry Dashboard</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <div style={{ background: '#1e1e28', padding: '20px', borderRadius: '8px' }}>
          <h3>Circuit Status</h3>
          <CircuitStatus active={true} voltage="5.0V" />
        </div>
        <div style={{ background: '#1e1e28', padding: '20px', borderRadius: '8px' }}>
          <h3>Hardware Bridge</h3>
          <SerialMonitor />
        </div>
      </div>
    </div>
  );
}
