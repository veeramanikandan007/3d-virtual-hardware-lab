import React, { useState } from 'react';

export function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{ maxWidth: '400px', margin: '80px auto', padding: '30px', background: '#1c1c24', borderRadius: '10px', border: '1px solid #2d2d3a' }}>
      <h2 style={{ textAlign: 'center', color: '#61dafb', marginTop: 0 }}>Lab Access Login</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} style={{ padding: '10px', background: '#121218', border: '1px solid #333', color: '#fff', borderRadius: '4px' }} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{ padding: '10px', background: '#121218', border: '1px solid #333', color: '#fff', borderRadius: '4px' }} />
        <button onClick={() => onLogin && onLogin()} style={{ padding: '12px', background: '#10b981', border: 'none', color: '#fff', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' }}>Sign In</button>
      </div>
    </div>
  );
}
