import React from 'react';

export function HelpPanel() {
  return (
    <div style={{ padding: '15px' }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#61dafb' }}>❓ Lab Quick Guide</h4>
      <ul style={{ fontSize: '13px', lineHeight: '1.6', color: '#ccc', paddingLeft: '20px' }}>
        <li>Drag components from the library into the 3D canvas.</li>
        <li>Click & drag between pin anchors to connect jumper wires.</li>
        <li>Check the live diagnostics panel for short circuit warnings.</li>
        <li>Connect an ESP32 board via the Web Serial monitor.</li>
      </ul>
    </div>
  );
}
