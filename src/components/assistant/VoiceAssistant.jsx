import React, { useState } from 'react';
import { useVoiceAssistant } from '../../hooks/useVoiceAssistant';
import { SPEECH_PRIORITY } from '../../services/speechService';
import {
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  AlertTriangle,
  Languages,
  Sparkles,
  Play
} from 'lucide-react';

export function VoiceAssistant() {
  const {
    state,
    listening,
    transcript,
    speak,
    startListening,
    stopListening,
    simulateInput,
    language,
    setLanguage,
    stopSpeech
  } = useVoiceAssistant();

  const [isMuted, setIsMuted] = useState(false);
  const isSpeaking = state?.speaking;

  const toggleListening = () => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (nextMuted) stopSpeech();
  };

  const handleInterrupt = () => {
    speak('Emergency manual override. All lab circuits safe.', SPEECH_PRIORITY.CRITICAL);
  };

  const sampleCommands = [
    'Explain ESP32 pinout',
    'Run diagnostics',
    'Check VCC to GND short',
    'How does NE555 work?'
  ];

  return (
    <div
      style={{
        padding: '16px',
        background: '#0f172a',
        borderRadius: '12px',
        border: '1px solid #1e293b',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        color: '#f8fafc'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ background: '#0284c7', padding: '6px', borderRadius: '8px', display: 'flex' }}>
            <Sparkles size={16} color="#fff" />
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#f8fafc' }}>
              AI Voice Mentor
            </h4>
            <span style={{ fontSize: '10px', color: '#38bdf8' }}>
              Web Speech API • Bilingual (EN / TA)
            </span>
          </div>
        </div>

        {/* Language & Mute Controls */}
        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            onClick={() => setLanguage(language === 'en-IN' ? 'ta-IN' : 'en-IN')}
            style={{
              background: '#1e293b',
              border: '1px solid #334155',
              color: '#38bdf8',
              borderRadius: '6px',
              padding: '3px 8px',
              fontSize: '11px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
            title="Toggle Language: English / Tamil"
          >
            <Languages size={12} /> {language === 'ta-IN' ? 'தமிழ்' : 'EN'}
          </button>

          <button
            onClick={toggleMute}
            style={{
              background: isMuted ? 'rgba(239, 68, 68, 0.2)' : '#1e293b',
              border: `1px solid ${isMuted ? '#ef4444' : '#334155'}`,
              color: isMuted ? '#ef4444' : '#94a3b8',
              borderRadius: '6px',
              padding: '4px 6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
          </button>
        </div>
      </div>

      {/* Audio Visualizer Wave */}
      <div
        style={{
          height: '28px',
          background: '#090d16',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          border: '1px solid #1e293b'
        }}
      >
        {isSpeaking ? (
          [12, 22, 16, 26, 14, 20, 10].map((h, i) => (
            <div
              key={i}
              style={{
                width: '4px',
                height: `${h}px`,
                background: '#38bdf8',
                borderRadius: '2px',
                animation: 'pulse 0.8s infinite alternate'
              }}
            />
          ))
        ) : (
          <span style={{ fontSize: '11px', color: '#64748b' }}>
            {listening ? '● Listening for voice commands...' : 'Voice engine idle'}
          </span>
        )}
      </div>

      {/* Transcript or Status Display */}
      {transcript ? (
        <div
          style={{
            padding: '8px 12px',
            background: 'rgba(2, 132, 199, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            borderRadius: '6px',
            fontSize: '12px',
            color: '#38bdf8'
          }}
        >
          <strong>Recognized:</strong> "{transcript}"
        </div>
      ) : null}

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={toggleListening}
          style={{
            flex: 1,
            padding: '8px',
            background: listening ? '#ef4444' : '#0284c7',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            transition: 'background 0.2s'
          }}
        >
          {listening ? <MicOff size={14} /> : <Mic size={14} />}
          {listening ? 'Stop Listening' : 'Speak to Mentor'}
        </button>

        <button
          onClick={() =>
            speak(
              language === 'ta-IN'
                ? 'வணக்கம்! 3D மெய்நிகர் மின்னணு ஆய்வகத்திற்கு உங்களை வரவேற்கிறோம்.'
                : 'Welcome to the 3D Virtual Hardware Laboratory. Ready for circuit simulation and diagnostics!'
            )
          }
          style={{
            padding: '8px 12px',
            background: '#1e293b',
            color: '#38bdf8',
            border: '1px solid #334155',
            borderRadius: '6px',
            fontSize: '12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
          title="Test Voice Speech"
        >
          <Play size={12} /> Test
        </button>
      </div>

      {/* Quick Voice Command Chips */}
      <div>
        <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#64748b', fontWeight: '700', marginBottom: '6px' }}>
          Suggested Prompts
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
          {sampleCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => simulateInput ? simulateInput(cmd) : speak(cmd)}
              style={{
                background: '#1e293b',
                color: '#cbd5e1',
                border: '1px solid #334155',
                borderRadius: '12px',
                padding: '3px 8px',
                fontSize: '10px',
                cursor: 'pointer'
              }}
            >
              "{cmd}"
            </button>
          ))}
        </div>
      </div>

      {/* Safety Override */}
      <button
        onClick={handleInterrupt}
        style={{
          background: 'rgba(239, 68, 68, 0.1)',
          color: '#ef4444',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          padding: '6px',
          borderRadius: '6px',
          fontSize: '11px',
          fontWeight: '700',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px'
        }}
      >
        <AlertTriangle size={13} /> Emergency Override
      </button>
    </div>
  );
}

export default VoiceAssistant;
