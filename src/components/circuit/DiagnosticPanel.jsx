import React from 'react';

export function DiagnosticPanel({ diagnostics = [] }) {
  return (
    <div style={{ padding: '15px' }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#ef4444', textTransform: 'uppercase', fontSize: '12px' }}>Live Diagnostics</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {diagnostics.length === 0 ? (
          <div style={{ fontSize: '13px', color: '#10b981' }}>✓ No circuit errors detected.</div>
        ) : (
          diagnostics.map((diag) => (
            <div key={diag.id} style={{ padding: '10px', background: '#2a1a1a', borderLeft: '3px solid #ef4444', borderRadius: '4px', fontSize: '13px' }}>
              <div style={{ fontWeight: 'bold', color: '#f87171' }}>[{diag.severity.toUpperCase()}] {diag.ruleId}</div>
              <div>{diag.message}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
