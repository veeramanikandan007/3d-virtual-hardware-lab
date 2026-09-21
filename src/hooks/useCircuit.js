import { useState } from 'react';
import { circuitService } from '../services/circuitService';

export function useCircuit() {
  const [components, setComponents] = useState([]);
  const [wires, setWires] = useState([]);
  const [diagnostics, setDiagnostics] = useState([]);

  const validate = () => {
    const results = circuitService.validateCircuit(components, wires);
    setDiagnostics(results);
  };

  return { components, setComponents, wires, setWires, diagnostics, validate };
}
