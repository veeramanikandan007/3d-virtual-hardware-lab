export const mockDiagnostics = [
  { id: 'diag-1', ruleId: 'R001', severity: 'critical', message: 'Short circuit detected between VCC and GND.', timestamp: new Date().toLocaleTimeString() },
  { id: 'diag-2', ruleId: 'R002', severity: 'high', message: 'Voltage mismatch: 5V GPIO driving 3.3V sensor pin.', timestamp: new Date().toLocaleTimeString() },
];
