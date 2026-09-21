import React from 'react';

export function Home({ onNavigate }) {
  return (
    <div style={{ padding: '60px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '42px', color: '#61dafb', marginBottom: '20px' }}>3D Virtual Hardware Laboratory</h1>
      <p style={{ fontSize: '18px', color: '#aaa', lineHeight: '1.6', marginBottom: '30px' }}>
        Interactive 3D circuit assembly, real-time electrical diagnostic validation, voice-guided AI mentorship, and live ESP32 Web Serial API hardware integration.
      </p>
      <button
        onClick={() => onNavigate('Workbench')}
        style={{ padding: '14px 28px', background: '#2563eb', border: 'none', color: '#fff', fontSize: '16px', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer' }}
      >
        🚀 Enter 3D Workbench
      </button>
    </div>
  );
}
