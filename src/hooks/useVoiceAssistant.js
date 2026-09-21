import { useState } from 'react';
import { speechService } from '../services/speechService';

export function useVoiceAssistant() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const speak = (text) => speechService.speak(text);

  const startListening = () => {
    setListening(true);
    speechService.listen((result) => {
      setTranscript(result);
      setListening(false);
    });
  };

  return { listening, transcript, speak, startListening };
}
