import React from 'react';
import { useVoiceAssistant } from '../../hooks/useVoiceAssistant';

export function VoiceAssistant() {
  const { listening, transcript, speak, startListening } = useVoiceAssistant();

  return (
    <div style={{ padding: '15px', background: '#1c1c24', borderRadius: '8px', border: '1px solid #3b3b4a' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ margin: 0, color: '#a78bfa' }}>🎙️ AI Voice Mentor</h4>
        <button
          onClick={startListening}
          style={{
            padding: '6px 12px',
            background: listening ? '#ef4444' : '#8b5cf6',
            border: 'none',
            color: '#fff',
            borderRadius: '20px',
            cursor: 'pointer'
          }}
        >
          {listening ? 'Listening...' : 'Speak'}
        </button>
      </div>
      {transcript && <p style={{ fontSize: '13px', background: '#262632', padding: '8px', borderRadius: '4px', marginTop: '10px' }}>"{transcript}"</p>}
      <button onClick={() => speak('Welcome to the 3D Virtual Hardware Laboratory!')} style={{ marginTop: '10px', fontSize: '12px', background: 'transparent', border: '1px solid #555', color: '#ccc', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}>
        Test Voice Response
      </button>
    </div>
  );
}
