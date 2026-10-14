import { Router } from 'express';

const router = Router();

let connectionStatus = {
  connected: false,
  port: process.env.DEFAULT_SERIAL_PORT || 'COM3',
  baudRate: parseInt(process.env.DEFAULT_BAUD_RATE || '115200', 10),
  device: 'ESP32-WROOM-32D',
  lastSeen: null
};

// GET /api/hardware/status - current bridge state
router.get('/status', (req, res) => {
  res.json({ success: true, hardware: connectionStatus });
});

// POST /api/hardware/connect - simulate / establish connection
router.post('/connect', (req, res) => {
  const { port = 'COM3', baudRate = 115200 } = req.body;
  connectionStatus = {
    connected: true,
    port,
    baudRate: parseInt(baudRate, 10),
    device: 'ESP32-WROOM-32D (Connected via WebSerial/USB-UART)',
    lastSeen: new Date().toISOString()
  };
  res.json({ success: true, message: 'ESP32 Hardware Bridge connected', hardware: connectionStatus });
});

// POST /api/hardware/disconnect
router.post('/disconnect', (req, res) => {
  connectionStatus.connected = false;
  connectionStatus.lastSeen = new Date().toISOString();
  res.json({ success: true, message: 'ESP32 Hardware Bridge disconnected', hardware: connectionStatus });
});

export default router;
