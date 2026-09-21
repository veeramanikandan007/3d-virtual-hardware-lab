import { PRIORITY, SpeechQueue } from './speechQueue';
import { parseCommand } from './voiceCommandParser';
import { getDiagnosticMessage, getCommandResponseMessage } from './voiceResponseService';

export const SPEECH_PRIORITY = PRIORITY;

class SpeechService {
  constructor() {
    this.queue = new SpeechQueue();
    this.isSpeaking = false;
    this.isListening = false;
    this.isPaused = false;
    this.rate = 1.0;
    this.pitch = 1.0;
    this.volume = 1.0;
    
    // Load language from localStorage or default to en-IN
    this.language = typeof window !== 'undefined' && localStorage.getItem('voice_language') ? localStorage.getItem('voice_language') : 'en-IN';
    
    this.selectedVoice = null;
    this.recognition = null;
    this.audioCtx = null;
    
    this.listeners = {
      stateChange: new Set(),
      command: new Set(),
      transcript: new Set(),
      queueChange: new Set(),
      speakingChange: new Set(),
      listeningChange: new Set()
    };
    
    this.initSpeechSynthesis();
    this.initSpeechRecognition();
  }

  setLanguage(lang) {
    this.language = lang;
    if (typeof window !== 'undefined') localStorage.setItem('voice_language', lang);
    this.initSpeechSynthesis();
    if (this.recognition) {
      this.recognition.lang = this.language;
    }
    this.notifyStateChange();
  }

  getState() {
    return {
      listening: this.isListening,
      speaking: this.isSpeaking,
      paused: this.isPaused,
      queueLength: this.queue.getLength(),
      supported: typeof window !== 'undefined' && 'speechSynthesis' in window,
      language: this.language
    };
  }

  notifyStateChange() {
    this.emit('stateChange', this.getState());
  }

  getAudioContext() {
    if (!this.audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  playCriticalAlarm() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      for (let i = 0; i < 2; i++) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(880, now + i * 0.23);
        gain.gain.setValueAtTime(0.2, now + i * 0.23);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.23 + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.23);
        osc.stop(now + i * 0.23 + 0.15);
      }
    } catch {
      // Ignore
    }
  }

  initSpeechSynthesis() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        // Try to find a voice matching the current language exactly
        const exactVoice = voices.find(v => v.lang === this.language);
        // Fallback to loose match (e.g., 'ta' for 'ta-IN')
        const looseVoice = voices.find(v => v.lang.startsWith(this.language.split('-')[0]));
        
        // If English, prefer high quality voices
        let enVoice = null;
        if (this.language.startsWith('en')) {
           enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha')));
        }
        
        this.selectedVoice = exactVoice || looseVoice || enVoice || voices[0];
      }
    };
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  initSpeechRecognition() {
    if (typeof window === 'undefined') return;
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) return;

    try {
      this.recognition = new SpeechRec();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.lang = this.language;

      this.recognition.onstart = () => {
        this.isListening = true;
        this.notifyStateChange();
        this.emit('listeningChange', true);
      };
      
      this.recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) finalTranscript += event.results[i][0].transcript;
          else interimTranscript += event.results[i][0].transcript;
        }
        const text = finalTranscript || interimTranscript;
        this.emit('transcript', { text, isFinal: Boolean(finalTranscript) });
        
        if (finalTranscript) {
          this.processRawInput(finalTranscript);
        }
      };

      this.recognition.onerror = () => {
        this.isListening = false;
        this.notifyStateChange();
        this.emit('listeningChange', false);
      };
      
      this.recognition.onend = () => {
        this.isListening = false;
        this.notifyStateChange();
        this.emit('listeningChange', false);
      };
    } catch {
      // Ignore
    }
  }

  processRawInput(rawText) {
    const cmd = parseCommand(rawText);
    
    // Legacy compatibility for UI hooks
    this.emit('command', { 
      type: cmd.command, 
      query: cmd.payload?.query, 
      componentId: cmd.payload?.componentId,
      raw: rawText 
    });
    
    const responseMsg = getCommandResponseMessage(cmd, this.language);
    if (responseMsg) {
      this.speakMessage(responseMsg, cmd.command === 'UNKNOWN' ? PRIORITY.LOW : PRIORITY.NORMAL);
    }
  }

  startListening() {
    if (this.recognition) {
      try { this.recognition.start(); } catch {}
    } else {
      this.isListening = true;
      this.notifyStateChange();
      this.emit('listeningChange', true);
    }
  }
  
  stopListening() {
    if (this.recognition) {
      try { this.recognition.stop(); } catch {}
    }
    this.isListening = false;
    this.notifyStateChange();
    this.emit('listeningChange', false);
  }
  
  simulateVoiceInput(rawText) {
    this.emit('transcript', { text: rawText, isFinal: true });
    this.processRawInput(rawText);
  }

  // Legacy fallback
  speak(text, options = {}) {
    const priority = options.priority !== undefined ? options.priority : PRIORITY.NORMAL;
    this.speakMessage(text, priority);
  }

  speakMessage(text, priority = PRIORITY.NORMAL) {
    if (!text || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    
    const item = { text, priority, id: Date.now() };
    
    if (priority === PRIORITY.CRITICAL) {
      this.playCriticalAlarm();
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
    }
    
    if (priority === PRIORITY.LOW && this.queue.getLength() > 2) {
      return;
    }
    
    this.queue.push(item);
    this.notifyStateChange();
    this.emit('queueChange', this.queue.getItems());
    
    if (!this.isSpeaking) {
      this.processNextSpeech();
    }
  }
  
  speakDiagnostic(diagnosticObj) {
    const text = getDiagnosticMessage(diagnosticObj);
    const priority = (diagnosticObj.severity === 'CRITICAL') ? PRIORITY.CRITICAL : PRIORITY.HIGH;
    this.speakMessage(text, priority);
  }

  processNextSpeech() {
    if (this.queue.getLength() === 0) {
      this.isSpeaking = false;
      this.notifyStateChange();
      this.emit('speakingChange', false, null);
      return;
    }
    
    const next = this.queue.pop();
    this.isSpeaking = true;
    this.notifyStateChange();
    this.emit('queueChange', this.queue.getItems());
    this.emit('speakingChange', true, next);
    
    const utterance = new SpeechSynthesisUtterance(next.text);
    if (this.selectedVoice) utterance.voice = this.selectedVoice;
    
    utterance.rate = next.priority === PRIORITY.CRITICAL ? Math.max(this.rate, 1.1) : this.rate;
    utterance.pitch = next.priority === PRIORITY.CRITICAL ? 1.2 : this.pitch;
    utterance.volume = this.volume;
    
    utterance.onend = () => {
      this.processNextSpeech();
    };
    utterance.onerror = () => {
      this.processNextSpeech();
    };
    
    try {
      window.speechSynthesis.speak(utterance);
    } catch {
      this.processNextSpeech();
    }
  }

  stop() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.queue.clear();
    this.isSpeaking = false;
    this.isPaused = false;
    this.notifyStateChange();
    this.emit('queueChange', []);
    this.emit('speakingChange', false, null);
  }

  pause() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
      this.isPaused = true;
      this.notifyStateChange();
    }
  }

  resume() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
      this.isPaused = false;
      this.notifyStateChange();
    }
  }

  on(event, callback) {
    if (this.listeners[event]) this.listeners[event].add(callback);
    return () => this.off(event, callback);
  }

  off(event, callback) {
    if (this.listeners[event]) this.listeners[event].delete(callback);
  }

  emit(event, ...args) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(cb => {
        try { cb(...args); } catch {}
      });
    }
  }
}

export const speechService = new SpeechService();
export default speechService;
