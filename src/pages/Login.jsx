import React, { useState } from 'react';

export function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{ maxWidth: '460px', margin: '60px auto', padding: '0 24px' }}>
      <div className="theme-card pulse-orange" style={{ padding: '40px 32px', borderRadius: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{
            width: '54px',
            height: '54px',
            margin: '0 auto 16px auto',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #FF6B00 0%, #E05D00 100%)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '26px',
            border: '1px solid var(--yellow-cyber)',
            boxShadow: 'var(--shadow-orange)'
          }}>
            ⚡
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: '800', color: '#FFFFFF', marginBottom: '6px' }}>
            Lab Access <span className="highlight-orange">Portal</span>
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: '400' }}>
            Sign in to sync 3D simulation schematics & hardware bridge.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--orange-primary)', marginBottom: '6px', fontFamily: 'var(--font-heading)', fontWeight: '700' }}>
              ENGINEER EMAIL
            </label>
            <input
              type="email"
              placeholder="engineer@aerolab.io"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                background: 'var(--bg-dark)',
                border: '1px solid var(--steel-border-orange)',
                borderRadius: '8px',
                color: 'var(--text-main)',
                fontSize: '14px',
                outline: 'none',
                fontWeight: '500'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--orange-primary)', marginBottom: '6px', fontFamily: 'var(--font-heading)', fontWeight: '700' }}>
              SECURITY KEY / PASSWORD
            </label>
            <input
              type="password"
              placeholder="••••••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                background: 'var(--bg-dark)',
                border: '1px solid var(--steel-border-orange)',
                borderRadius: '8px',
                color: 'var(--text-main)',
                fontSize: '14px',
                outline: 'none',
                fontWeight: '500'
              }}
            />
          </div>

          <button
            onClick={() => onLogin && onLogin()}
            className="btn-primary"
            style={{ width: '100%', padding: '14px', marginTop: '8px', fontSize: '15px' }}
          >
            Authenticate Session 🔓
          </button>
        </div>
      </div>
    </div>
  );
}


