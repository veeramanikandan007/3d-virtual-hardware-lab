import React, { useState } from 'react';

export function TelemetryGraph() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{
      borderTop: '1px solid var(--border-subtle)',
      background: '#FFFFFF',
      color: 'var(--text-main)'
    }}>
      {/* Panel Header Bar */}
      <div 
        onClick={() => setExpanded(!expanded)}
        style={{
          padding: '8px 20px',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          background: '#FFFFFF',
          userSelect: 'none'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#159C9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
          <span style={{ fontSize: '13px', fontWeight: '600', color: '#123047' }}>
            Simulation Data
          </span>
          <span style={{ fontSize: '12px', color: '#587184' }}>
            100 Hz Sampling
          </span>
        </div>

        <button style={{ background: 'transparent', border: 'none', color: '#587184', fontSize: '12px', fontWeight: '500', cursor: 'pointer' }}>
          {expanded ? 'Hide Graphs ▲' : 'Show Graphs ▼'}
        </button>
      </div>

      {expanded && (
        <div style={{ padding: '16px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-main)' }}>
          {/* Waveform 1: Voltage */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px', color: 'var(--text-muted)' }}>
              <span>Voltage vs Time (CH1)</span>
              <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>5.02 V Peak</span>
            </div>
            <svg width="100%" height="60" viewBox="0 0 300 60" style={{ background: '#FFFFFF', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
              <line x1="0" y1="30" x2="300" y2="30" stroke="#E5E5E0" strokeDasharray="3 3" />
              <path d="M0 30 Q 30 10, 60 30 T 120 30 T 180 30 T 240 30 T 300 30" fill="none" stroke="#A01717" strokeWidth="2" />
            </svg>
          </div>

          {/* Waveform 2: Current */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px', color: 'var(--text-muted)' }}>
              <span>Current Draw (CH2)</span>
              <span style={{ fontWeight: '600', color: 'var(--red-primary)' }}>22.7 mA RMS</span>
            </div>
            <svg width="100%" height="60" viewBox="0 0 300 60" style={{ background: '#FFFFFF', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
              <line x1="0" y1="30" x2="300" y2="30" stroke="#E5E5E0" strokeDasharray="3 3" />
              <path d="M0 45 L 40 45 L 40 15 L 100 15 L 100 45 L 160 45 L 160 15 L 220 15 L 220 45 L 300 45" fill="none" stroke="#FFE162" strokeWidth="2" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}



