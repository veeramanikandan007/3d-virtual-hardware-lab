import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import { WebSocketServer } from 'ws';

import circuitRoutes from './routes/circuit.js';
import projectsRoutes from './routes/projects.js';
import aiMentorRoutes from './routes/aiMentor.js';
import hardwareRoutes from './routes/hardware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173';

// Middleware
app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: '3D Virtual Hardware Lab Backend API',
    version: '1.0.0',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.use('/api/circuit', circuitRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/ai-mentor', aiMentorRoutes);
app.use('/api/hardware', hardwareRoutes);

// Create HTTP server for Express and WebSocket
const server = http.createServer(app);

// WebSocket Server for live telemetry & serial streaming
const wss = new WebSocketServer({ server, path: '/ws/telemetry' });

wss.on('connection', (ws) => {
  console.log('[WebSocket] Client connected to live telemetry stream');

  // Stream telemetry heartbeats every 2 seconds
  const interval = setInterval(() => {
    if (ws.readyState === ws.OPEN) {
      const sampleTelemetry = {
        type: 'telemetry_tick',
        timestamp: Date.now(),
        voltage: +(5.0 + (Math.random() * 0.05 - 0.025)).toFixed(3),
        current: +(22.5 + (Math.random() * 0.4)).toFixed(2),
        temperature: +(28.0 + (Math.random() * 0.2)).toFixed(1),
        frequency: 1000
      };
      ws.send(JSON.stringify(sampleTelemetry));
    }
  }, 2000);

  ws.on('close', () => {
    clearInterval(interval);
    console.log('[WebSocket] Client disconnected from telemetry stream');
  });

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      console.log('[WebSocket] Received message:', data);
    } catch {
      // ignore
    }
  });
});

server.listen(PORT, () => {
  console.log(`⚡ 3D Virtual Hardware Lab Backend running on http://localhost:${PORT}`);
  console.log(`📡 WebSocket server streaming on ws://localhost:${PORT}/ws/telemetry`);
});
