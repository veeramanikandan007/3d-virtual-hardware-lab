import { useState } from 'react';
import { serialService } from '../services/serialService';
import { mockSerialLogs } from '../data/mockSerialData';

export function useSerial() {
  const [connected, setConnected] = useState(false);
  const [logs, setLogs] = useState(mockSerialLogs);

  const connect = async () => {
    try {
      await serialService.connect();
      setConnected(true);
    } catch (err) {
      console.warn('Web Serial fallback to simulation mode');
      setConnected(true);
    }
  };

  return { connected, logs, connect };
}
