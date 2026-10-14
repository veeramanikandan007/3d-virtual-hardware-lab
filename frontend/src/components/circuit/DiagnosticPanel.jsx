import React from 'react';

export function DiagnosticPanel({ diagnostics }) {
  const items = diagnostics || [
    { type: 'success', text: 'Circuit connectivity check passed' },
    { type: 'warning', text: 'Resistor R1 operating near peak thermal dissipation' },
    { type: 'warning', text: 'Voltage drop across MCU node exceeds 0.2V tolerance' },
    { type: 'info', text: 'ESP32 serial bridge interface connected & active' }
  ];

  return (
    <div style={{ padding: '16px' }}>
      {/* Header with Title & Error Count */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '14px',
        paddingBottom: '10px',
        borderBottom: '1px solid var(--steel-border)'
      }}>
        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: '800', color: 'var(--orange-primary)' }}>
          SYSTEM DIAGNOSTICS
        </span>
        <span style={{ fontSize: '11px', background: 'rgba(255, 214, 0, 0.15)', color: 'var(--yellow-cyber)', border: '1px solid var(--yellow-cyber)', padding: '2px 8px', borderRadius: '4px', fontWeight: '800' }}>
          0 ERRORS
        </span>
      </div>

      {/* Summary Diagnostics Counter Box */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '6px',
        marginBottom: '14px',
        textAlign: 'center',
        background: 'var(--bg-dark)',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid var(--steel-border)'
      }}>
        <div>
          <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: '700' }}>COMPONENTS</div>
          <div style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-main)' }}>24</div>
        </div>
        <div>
          <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: '700' }}>CONNECTIONS</div>
          <div style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-main)' }}>31</div>
        </div>
        <div>
          <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: '700' }}>WARNINGS</div>
          <div style={{ fontSize: '14px', fontWeight: '800', color: 'var(--yellow-cyber)', background: 'rgba(255, 214, 0, 0.15)', borderRadius: '4px' }}>2</div>
        </div>
      </div>

      {/* Diagnostic Log Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {items.map((d, index) => {
          let isWarning = d.type === 'warning';
          let isError = d.type === 'error';
          
          return (
            <div
              key={index}
              style={{
                padding: '10px 12px',
                background: 'var(--bg-dark)',
                border: isWarning ? '1px solid var(--yellow-cyber)' : isError ? '1px solid #FF6666' : '1px solid var(--steel-border)',
                borderRadius: '8px',
                fontSize: '12px',
                color: isWarning ? 'var(--yellow-cyber)' : isError ? '#FF8888' : 'var(--text-main)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
              }}
            >
              <span style={{ 
                color: isWarning ? 'var(--yellow-cyber)' : isError ? '#FF6666' : 'var(--orange-primary)', 
                fontWeight: 'bold',
                fontSize: '14px'
              }}>
                {isWarning ? '⚠' : isError ? '✖' : '✓'}
              </span>
              <span style={{ lineHeight: '1.4', fontWeight: isWarning ? '600' : '500' }}>{d.text || d}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}


