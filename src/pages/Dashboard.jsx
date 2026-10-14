import React from 'react';
import { SerialMonitor } from '../components/serial/SerialMonitor';

export function Dashboard({ onNavigate }) {
  const metrics = [
    { label: 'Active Simulations', value: '4', change: '+2 this week', icon: '⚡' },
    { label: 'Circuit Nodes', value: '24', change: 'All validated', icon: '🔗' },
    { label: 'Total Power Draw', value: '1.25 W', change: 'Optimal range', icon: '🔋' },
    { label: 'System Health', value: '99.8%', change: '0 Errors', icon: '🛡️' }
  ];

  const recentProjects = [
    { 
      name: 'Smart Motor Controller', 
      type: 'EV Motor Drive', 
      components: 24, 
      connections: 31, 
      status: 'Simulation Ready', 
      modified: '2 mins ago' 
    },
    { 
      name: 'High Voltage Inverter', 
      type: 'Stationary Power', 
      components: 18, 
      connections: 22, 
      status: 'Simulation Active', 
      modified: '1 hour ago' 
    },
    { 
      name: 'UAV Sensor Array', 
      type: 'Aerospace Flight', 
      components: 32, 
      connections: 45, 
      status: 'Validated', 
      modified: 'Yesterday' 
    }
  ];

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(20px, 4vw, 40px) 24px' }}>
      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '8px', color: '#FFFFFF' }}>
          Simulation <span className="highlight-orange">Dashboard</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '15px', fontWeight: '400' }}>
          Real-time hardware status, telemetry overview, and active virtual bench sessions.
        </p>
      </div>

      {/* Metrics Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {metrics.map((m, idx) => (
          <div key={idx} className="theme-card theme-card-hover" style={{ padding: '22px', borderRadius: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '600' }}>{m.label}</span>
              <span style={{ fontSize: '24px', background: 'rgba(255, 107, 0, 0.15)', color: 'var(--orange-primary)', padding: '4px', borderRadius: '8px', border: '1px solid var(--steel-border-orange)' }}>{m.icon}</span>
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '30px', fontWeight: '800', color: 'var(--yellow-cyber)', marginBottom: '4px' }}>
              {m.value}
            </div>
            <span style={{ fontSize: '12px', background: 'rgba(255, 107, 0, 0.1)', color: 'var(--orange-primary)', padding: '2px 8px', borderRadius: '4px', fontWeight: '700' }}>
              {m.change}
            </span>
          </div>
        ))}
      </div>

      {/* Section Title */}
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: '800', color: '#FFFFFF', marginBottom: '20px' }}>
        Active Hardware Projects
      </h2>

      {/* Large Visual Project Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        marginBottom: '40px'
      }}>
        {recentProjects.map((proj, i) => (
          <div
            key={i}
            className="theme-card theme-card-hover"
            style={{
              padding: '24px',
              borderRadius: '18px',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              background: 'var(--bg-card)'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: '800', color: '#FFFFFF', marginBottom: '4px' }}>
                    {proj.name}
                  </h3>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600' }}>
                    Type: <strong style={{ color: 'var(--orange-primary)' }}>{proj.type}</strong>
                  </span>
                </div>
                <span style={{
                  padding: '4px 10px',
                  background: 'rgba(255, 214, 0, 0.12)',
                  border: '1px solid var(--yellow-cyber)',
                  color: 'var(--yellow-cyber)',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: '700'
                }}>
                  {proj.status}
                </span>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
                padding: '12px',
                background: 'var(--bg-dark)',
                borderRadius: '10px',
                border: '1px solid var(--steel-border)',
                marginBottom: '20px',
                fontSize: '13px'
              }}>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '11px' }}>COMPONENTS</span>
                  <strong style={{ color: 'var(--orange-primary)', fontSize: '15px' }}>{proj.components} Components</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '11px' }}>CONNECTIONS</span>
                  <strong style={{ color: 'var(--yellow-cyber)', fontSize: '15px' }}>{proj.connections} Connections</strong>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--steel-border)', paddingTop: '16px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                Modified {proj.modified}
              </span>
              <button
                onClick={() => onNavigate && onNavigate('Workbench')}
                className="btn-primary"
                style={{ padding: '8px 16px', fontSize: '13px' }}
              >
                Open Project →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Hardware Bridge / Diagnostics Console */}
      <div className="theme-card" style={{ padding: '24px', borderRadius: '18px' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: '800', marginBottom: '16px', color: '#FFFFFF' }}>
          📟 Hardware Bridge Terminal & Serial Output
        </h3>
        <SerialMonitor />
      </div>
    </div>
  );
}


