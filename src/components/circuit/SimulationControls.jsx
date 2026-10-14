import React, { useState } from 'react';

export function SimulationControls({ onRun, onPause, onReset }) {
  const [isRunning, setIsRunning] = useState(false);
  const [simTime, setSimTime] = useState(0.00);

  const handleRun = () => {
    setIsRunning(true);
    if (onRun) onRun();
  };

  const handlePause = () => {
    setIsRunning(false);
    if (onPause) onPause();
  };

  const handleReset = () => {
    setIsRunning(false);
    setSimTime(0.00);
    if (onReset) onReset();
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      background: '#FFFFFF',
      border: '1px solid #DCE8E8',
      padding: '8px 16px',
      borderRadius: '10px',
      boxShadow: '0 2px 12px rgba(20, 70, 70, 0.06)',
      flexWrap: 'wrap',
      gap: '12px'
    }}>
      {/* Simulation Controls Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          onClick={handleRun}
          style={{
            padding: '6px 16px',
            fontSize: '13px',
            fontWeight: '600',
            minHeight: '34px',
            background: '#159C9C',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          ▶ Run
        </button>

        <button
          onClick={handlePause}
          style={{
            padding: '6px 12px',
            fontSize: '13px',
            fontWeight: '500',
            minHeight: '34px',
            background: '#FFFFFF',
            color: '#123047',
            border: '1px solid #DCE8E8',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          ⏸ Pause
        </button>

        <button
          onClick={handlePause}
          style={{
            padding: '6px 12px',
            fontSize: '13px',
            fontWeight: '500',
            minHeight: '34px',
            background: '#FFFFFF',
            color: '#123047',
            border: '1px solid #DCE8E8',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          ⏹ Stop
        </button>

        <button
          onClick={handleReset}
          style={{
            padding: '6px 12px',
            fontSize: '13px',
            fontWeight: '500',
            minHeight: '34px',
            background: '#FFFFFF',
            color: '#123047',
            border: '1px solid #DCE8E8',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          🔄 Reset
        </button>
      </div>

      {/* Vertical Separator */}
      <div style={{ width: '1px', height: '20px', background: '#DCE8E8' }} className="desktop-only" />

      {/* Essential Metrics Display */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px', color: '#123047' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: isRunning ? '#10B981' : '#159C9C'
          }} />
          <span style={{ color: '#587184' }}>Status <strong style={{ color: '#123047', marginLeft: '4px' }}>{isRunning ? 'Running' : 'Ready'}</strong></span>
        </div>

        <div style={{ color: '#587184' }}>
          Voltage <strong style={{ color: '#123047', marginLeft: '4px' }}>5.02 V</strong>
        </div>

        <div style={{ color: '#587184' }}>
          Current <strong style={{ color: '#123047', marginLeft: '4px' }}>22.7 mA</strong>
        </div>

        <div style={{ color: '#587184' }}>
          Power <strong style={{ color: '#123047', marginLeft: '4px' }}>1.28 W</strong>
        </div>

        <div style={{ color: '#587184' }}>
          Temperature <strong style={{ color: '#123047', marginLeft: '4px' }}>34.2 °C</strong>
        </div>
      </div>

      {/* Simulation Data Dropdown Trigger (Far Right) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '600', color: '#159C9C', cursor: 'pointer' }}>
        <span>📊 Simulation Data</span>
        <span style={{ fontSize: '11px' }}>▼</span>
      </div>
    </div>
  );
}



