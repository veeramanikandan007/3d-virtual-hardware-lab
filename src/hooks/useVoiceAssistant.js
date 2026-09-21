import { useState, useEffect, useCallback } from 'react';
import { speechService } from '../services/speechService';

export function useVoiceAssistant() {
  const [state, setState] = useState(speechService.getState());
  const [transcript, setTranscript] = useState({ text: '', isFinal: false });

  useEffect(() => {
    const unsubState = speechService.on('stateChange', (newState) => {
      setState({ ...newState });
    });
    
    const unsubTranscript = speechService.on('transcript', (t) => {
      setTranscript(t);
    });
    
    return () => {
      unsubState();
      unsubTranscript();
    };
  }, []);

  const startListening = useCallback(() => speechService.startListening(), []);
  const stopListening = useCallback(() => speechService.stopListening(), []);
  const simulateInput = useCallback((text) => speechService.simulateVoiceInput(text), []);
  const speak = useCallback((text, priority) => speechService.speakMessage(text, priority), []);
  const stopSpeech = useCallback(() => speechService.stop(), []);
  const setLanguage = useCallback((lang) => speechService.setLanguage(lang), []);

  const useCommandSubscription = useCallback((callback) => {
    useEffect(() => {
      return speechService.on('command', callback);
    }, [callback]);
  }, []);

  return {
    state,
    language: state.language,
    setLanguage,
    transcript,
    startListening,
    stopListening,
    simulateInput,
    speak,
    stopSpeech,
    useCommandSubscription
  };
}
