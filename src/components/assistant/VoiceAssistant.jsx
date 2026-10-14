import React from 'react';
import { useVoiceAssistant } from '../../hooks/useVoiceAssistant';

export function VoiceAssistant() {
  const { listening, transcript, speak, startListening } = useVoiceAssistant();

  return (
    <div style={{ padding: '16px', background: 'var(--cream-bg)', borderRadius: '10px', border: '2px solid var(--border-red)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ margin: 0, color: 'var(--red-dark)', fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '13px' }}>
          🎙️ AI Voice Mentor
        </h4>
        <button
          onClick={startListening}
          className="btn-secondary"
          style={{
            padding: '4px 12px',
            fontSize: '11px',
            minHeight: '28px',
            border: '1px solid var(--red-dark)'
          }}
        >
          {listening ? 'Listening...' : 'Speak'}
        </button>
      </div>
      {transcript && (
        <p style={{ fontSize: '12px', background: 'var(--white)', padding: '8px', borderRadius: '6px', marginTop: '10px', border: '1px solid var(--border-red)', color: 'var(--red-dark)', fontWeight: '600' }}>
          "{transcript}"
        </p>
      )}
      <button 
        onClick={() => speak('Welcome to the 3D Virtual Hardware Laboratory!')} 
        style={{ marginTop: '10px', fontSize: '11px', background: 'transparent', border: '1px solid var(--red-dark)', color: 'var(--red-dark)', padding: '4px 10px', borderRadius: '6px', cursor: 'pointer', fontWeight: '700' }}
      >
        Test Voice Response
      </button>
    </div>
  );
}

