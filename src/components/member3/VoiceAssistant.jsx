import React, { useState } from 'react';
import {
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  AlertOctagon,
  MessageSquare,
  List,
  Wand2,
  Settings2
} from 'lucide-react';
import { SPEECH_PRIORITY } from '../../services/speechService';
import { useVoiceAssistant } from '../../hooks/useVoiceAssistant';

export default function VoiceAssistant() {
  const { state, language, setLanguage, transcript, startListening, stopListening, simulateInput, speak, stopSpeech } = useVoiceAssistant();
  const [isMuted, setIsMuted] = useState(false);

  const isSpeaking = state.speaking;
  const isListening = state.listening;
  const queueCount = state.queueLength;
  const lastMessage = transcript.text || (isListening ? 'Listening...' : (isSpeaking ? 'Speaking...' : 'Ready'));

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
      // Auto-simulate after a delay if no speech recognized (for testing)
      setTimeout(() => {
        if (!state.listening) {
          simulateInput('run diagnostics');
        }
      }, 3000);
    }
  };

  const handleInterrupt = () => {
    speak('MANUAL OVERRIDE. CRITICAL ABORT INITIATED.', SPEECH_PRIORITY.CRITICAL);
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (nextMuted) stopSpeech();
  };

  return (
    <div className="flex flex-col gap-6">
      
      {/* Main Status Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col items-center text-center">
        
        {/* Animated Visualizer */}
        <div className="h-12 w-full flex items-center justify-center gap-1.5 mb-6">
          {isSpeaking ? (
            <>
              <div className="w-1.5 bg-blue-500 rounded-full animate-audio-bar-1"></div>
              <div className="w-1.5 bg-blue-500 rounded-full animate-audio-bar-2"></div>
              <div className="w-1.5 bg-blue-500 rounded-full animate-audio-bar-3"></div>
              <div className="w-1.5 bg-blue-500 rounded-full animate-audio-bar-4"></div>
              <div className="w-1.5 bg-blue-500 rounded-full animate-audio-bar-5"></div>
            </>
          ) : (
            <div className="w-12 h-1 bg-slate-200 rounded-full"></div>
          )}
        </div>

        <h3 className="text-sm font-bold text-slate-500 mb-1 uppercase tracking-widest">
          {isSpeaking ? 'Speaking' : isListening ? 'Listening' : 'Ready'}
        </h3>
        
        <p className="text-lg font-medium text-slate-800 mb-8 min-h-[56px] flex items-center justify-center italic">
          "{lastMessage}"
        </p>

        {/* Primary Action Button */}
        <button
          onClick={toggleListening}
          className={`flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg transition-all shadow-md active:scale-95 ${
            isListening 
              ? 'bg-red-500 hover:bg-red-600 ring-4 ring-red-500/20' 
              : 'bg-blue-600 hover:bg-blue-700 ring-4 ring-blue-600/20'
          }`}
        >
          {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          {isListening ? 'Stop Listening' : 'Start Listening'}
        </button>

        {/* Quick Settings */}
        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100 w-full justify-center">
           <button 
             onClick={() => setLanguage(language === 'en-IN' ? 'ta-IN' : 'en-IN')}
             className="px-3 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center font-bold text-sm transition-colors"
             title="Toggle Language"
           >
             {language === 'en-IN' ? 'EN' : 'TA'}
           </button>
           <button 
             onClick={toggleMute}
             className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
               isMuted ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
             }`}
             title={isMuted ? "Unmute" : "Mute"}
           >
             {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
           </button>
           <button 
             className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center transition-colors"
             title="Settings"
           >
             <Settings2 className="w-5 h-5" />
           </button>
        </div>
      </div>

      {/* Queue & Diagnostics */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <List className="w-4 h-4 text-slate-400" />
            Speech Queue
          </h4>
          <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-bold">
            {queueCount} Pending
          </span>
        </div>
        
        <div className="flex flex-col gap-3">
          <button
            onClick={() => {
              speak('This is a normal priority message, like reading component details.', SPEECH_PRIORITY.NORMAL);
              speak('This is a low priority tooltip.', SPEECH_PRIORITY.LOW);
            }}
            className="w-full py-2.5 px-4 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-100 flex items-center justify-between transition"
          >
            <span>Enqueue Test Messages</span>
            <MessageSquare className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={handleInterrupt}
            className="w-full py-2.5 px-4 bg-red-50 border border-red-200 text-red-700 text-sm font-bold rounded-lg hover:bg-red-100 flex items-center justify-between transition"
          >
            <span>Interrupt Critical</span>
            <AlertOctagon className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Voice Commands Help */}
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 shadow-sm">
         <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
           <Wand2 className="w-3 h-3" /> Try Saying
         </h4>
         <div className="flex flex-wrap gap-2">
           {['"Search ESP32"', '"Run diagnostics"', '"Clear serial"', '"Open Help"'].map(cmd => (
             <span key={cmd} className="px-2.5 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600 font-medium">
               {cmd}
             </span>
           ))}
         </div>
      </div>

    </div>
  );
}
