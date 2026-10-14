import { mockDiagnostics } from '../data/mockDiagnostics';

export const circuitService = {
  validateCircuit: (components, wires) => {
    // Basic circuit validation logic
    if (wires.length === 0) {
      return [{ id: 'diag-0', severity: 'low', message: 'No wires connected in workspace.' }];
    }
    return mockDiagnostics;
  }
};
